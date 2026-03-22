const fs = require("fs/promises");
const path = require("path");

const VIEWER_FILE = "excalidraw_viewer.html";
const MIN_VIEWPORT_WIDTH = 640;
const MIN_VIEWPORT_HEIGHT = 480;
const FIT_PADDING = 80;

async function main() {
  const cwd = process.cwd();
  const viewerPath = path.join(cwd, VIEWER_FILE);
  const runtimeScript = extractRuntimeScript(await fs.readFile(viewerPath, "utf8"));
  const fileNames = await listExcalidrawFiles(cwd);

  if (!fileNames.length) {
    console.log("No .excalidraw files found.");
    return;
  }

  for (const fileName of fileNames) {
    const sourcePath = path.join(cwd, fileName);
    const scene = JSON.parse(await fs.readFile(sourcePath, "utf8"));
    validateScene(scene, fileName);

    const payload = buildExportPayload(scene, fileName);
    const html = buildStandaloneHtml(payload, runtimeScript);
    const outputPath = path.join(cwd, `${path.parse(fileName).name}.html`);
    await fs.writeFile(outputPath, html, "utf8");
    console.log(`Created ${path.basename(outputPath)}`);
  }
}

async function listExcalidrawFiles(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && path.extname(entry.name).toLowerCase() === ".excalidraw")
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "ko"));
}

function validateScene(scene, fileName) {
  if (!scene || !Array.isArray(scene.elements)) {
    throw new Error(`Invalid Excalidraw file: ${fileName}`);
  }
}

function buildExportPayload(scene, fileName) {
  const elements = (scene.elements || [])
    .filter((element) => !element.isDeleted)
    .sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));
  const bounds = elements.length ? getSceneBounds(elements) : null;

  return {
    scene,
    viewState: getInitialViewState(bounds),
    meta: {
      fileName,
      exportedAt: new Date().toISOString(),
    },
  };
}

function getInitialViewState(bounds) {
  if (!bounds) {
    return { scale: 1, offsetX: 0, offsetY: 0 };
  }

  const minScale = 0.1;
  const sceneWidth = Math.max(1, bounds.maxX - bounds.minX);
  const sceneHeight = Math.max(1, bounds.maxY - bounds.minY);
  const scale = Math.min(
    2,
    Math.max(
      minScale,
      Math.min(
        (MIN_VIEWPORT_WIDTH - FIT_PADDING * 2) / sceneWidth,
        (MIN_VIEWPORT_HEIGHT - FIT_PADDING * 2) / sceneHeight
      )
    )
  );

  return {
    scale,
    offsetX: (MIN_VIEWPORT_WIDTH - sceneWidth * scale) / 2 - bounds.minX * scale,
    offsetY: (MIN_VIEWPORT_HEIGHT - sceneHeight * scale) / 2 - bounds.minY * scale,
  };
}

function extractRuntimeScript(viewerHtml) {
  const match = viewerHtml.match(/<script>\s*([\s\S]*?)\s*<\/script>\s*<\/body>\s*<\/html>\s*$/i);
  if (!match) {
    throw new Error(`Could not extract runtime script from ${VIEWER_FILE}`);
  }
  return match[1];
}

function buildStandaloneHtml(payload, runtimeScript) {
  const sceneTag = `<script id="embeddedSceneData" type="application/json">${escapeScriptJson(JSON.stringify(payload.scene))}<\/script>`;
  const viewStateTag = `<script id="embeddedViewStateData" type="application/json">${escapeScriptJson(JSON.stringify(payload.viewState))}<\/script>`;
  const metaTag = `<script id="embeddedMetaData" type="application/json">${escapeScriptJson(JSON.stringify(payload.meta))}<\/script>`;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(payload.meta.fileName || "Excalidraw Viewer")}</title>
  <style>
    :root {
      --ink: #172033;
    }

    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background:
        linear-gradient(rgba(23, 32, 51, 0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(23, 32, 51, 0.04) 1px, transparent 1px),
        linear-gradient(180deg, #fcfaf5 0%, #f7f1e6 100%);
      background-size: 24px 24px, 24px 24px, 100% 100%;
      background-position: 0 0, 0 0, 0 0;
      color: var(--ink);
      font-family: "Segoe UI", "Apple SD Gothic Neo", sans-serif;
    }

    .canvas-wrap {
      position: fixed;
      inset: 0;
      overflow: hidden;
      cursor: grab;
      touch-action: none;
    }

    .canvas-wrap.dragging {
      cursor: grabbing;
    }

    canvas {
      display: block;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>
  <div class="canvas-wrap" id="canvasWrap">
    <canvas id="viewerCanvas"></canvas>
  </div>
  ${sceneTag}
  ${viewStateTag}
  ${metaTag}
  <script>
${runtimeScript}
  <\/script>
</body>
</html>`;
}

function escapeScriptJson(json) {
  return json.replace(/</g, "\\u003c");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getSceneBounds(elements) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (const element of elements) {
    const box = getElementBounds(element);
    minX = Math.min(minX, box.minX);
    minY = Math.min(minY, box.minY);
    maxX = Math.max(maxX, box.maxX);
    maxY = Math.max(maxY, box.maxY);
  }

  if (!Number.isFinite(minX)) {
    return { minX: 0, minY: 0, maxX: 1200, maxY: 800 };
  }

  return { minX, minY, maxX, maxY };
}

function getElementBounds(element) {
  const x = element.x || 0;
  const y = element.y || 0;
  const w = element.width || 0;
  const h = element.height || 0;

  if (Array.isArray(element.points) && element.points.length) {
    let minX = x;
    let minY = y;
    let maxX = x;
    let maxY = y;

    for (const point of element.points) {
      minX = Math.min(minX, x + point[0]);
      minY = Math.min(minY, y + point[1]);
      maxX = Math.max(maxX, x + point[0]);
      maxY = Math.max(maxY, y + point[1]);
    }

    return expandBounds({ minX, minY, maxX, maxY }, element.strokeWidth || 1);
  }

  return expandBounds(
    {
      minX: Math.min(x, x + w),
      minY: Math.min(y, y + h),
      maxX: Math.max(x, x + w),
      maxY: Math.max(y, y + h),
    },
    element.strokeWidth || 1
  );
}

function expandBounds(bounds, amount) {
  return {
    minX: bounds.minX - amount * 2,
    minY: bounds.minY - amount * 2,
    maxX: bounds.maxX + amount * 2,
    maxY: bounds.maxY + amount * 2,
  };
}

main().catch((error) => {
  console.error(error && error.message ? error.message : error);
  process.exitCode = 1;
});
