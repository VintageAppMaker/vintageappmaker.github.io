// Increment VERSION whenever the app shell changes.
const VERSION = 'v1';
const PREFIX = `namgwang-comic:${self.registration.scope}:`;
const CACHE = PREFIX + VERSION;
const APP = new URL('./index.html', self.registration.scope).href;
const FILES = ['index.html', 'pwa.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png',
  'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
const URLS = FILES.map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(
    URLS.map(url => new Request(url, { cache: 'reload' }))
  )));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isApp = url.origin === new URL(APP).origin &&
    (url.pathname === new URL(APP).pathname || url.pathname === new URL(self.registration.scope).pathname);
  const key = isApp ? APP : url.href;
  if (!URLS.includes(key)) return;
  // A complete version is cached during install, including all nine embedded images.
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    return await cache.match(key) || fetch(event.request);
  })());
});
