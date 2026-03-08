// ===== 미로 게임 (Apple IIe Mono UI 백본) =====
// FIX:
// - 이전 에러(missing ) after argument list)의 원인은 runTests()의 console.assert 줄에
//   잘못 들어간 역슬래시(\)였습니다. 해당 라인을 정상 문법으로 수정했습니다.

class MazeGame {
  constructor(){
    this.SAVE_KEY = "a2e_maze_save_v1";
    this.NL = "\n";

    // ===== UI 핸들 =====
    this.$screen = document.getElementById("screen");
    this.$crt = document.getElementById("crt");
    this.$endOverlay = document.getElementById("endOverlay");
    this.$dpad = document.getElementById("dpad");
    this.$lbtn = document.getElementById("lbtn");
    this.$mbtn = document.getElementById("mbtn");
    this.$art = document.getElementById("art");
    this.$mapView = document.getElementById("mapView");
    this.$hint = document.getElementById("hint");
    this.$status = document.getElementById("status");
    this.$cmd = document.getElementById("cmd");
    this.$messageSheet = document.getElementById("messageSheet");
    this.$messageBody = document.getElementById("messageBody");
    this.$messageClose = document.getElementById("messageClose");

    // ===== 방향/벽 비트 =====
    // 0:N,1:E,2:S,3:W
    this.DIRS = [
      {name:"north", dx:0, dy:-1},
      {name:"east",  dx:1, dy:0},
      {name:"south", dx:0, dy:1},
      {name:"west",  dx:-1,dy:0}
    ];
    this.BIT_N = 1;
    this.BIT_E = 2;
    this.BIT_S = 4;
    this.BIT_W = 8;
    this.BITS = [this.BIT_N, this.BIT_E, this.BIT_S, this.BIT_W];

    this.state = this.newState();

    // ===== 시작 =====
    this.bindDpad();
    this.bindLanternButton();
    this.bindMessageButton();
    this.bindKeyboard();
    this.bindRestartOnClick();
    this.runTests();
    this.clearSave();
    this.reset();

    // 시간 기반 랜턴 범위/상태 업데이트 (UI 갱신용)
    this._intervalId = setInterval(() => {
      if(this.state && this.state.game && !this.state.game.ended){
        this.renderInfo(false);
      }
    }, 1000);
  }

  // ===== 유틸 =====
  nowMs(){ return (new Date()).getTime(); }
  pad2(n){ return (n<10?"0":"") + n; }
  fmtDuration(ms){
    if(ms < 0) ms = 0;
    var sec = Math.floor(ms/1000);
    var m = Math.floor(sec/60);
    var s = sec % 60;
    return this.pad2(m) + ":" + this.pad2(s);
  }
  oppDir(d){ return (d+2)%4; }

  // ===== 게임 상태(JSON) =====
  newState(){
    return {
      meta: { version: 1 },
      ui: {
        screenLines: [],
        status: "READY"
      },
      game: {
        w: 9,
        h: 9,
        // maze[y][x] = 벽 bitmask (해당 방향에 벽이 있으면 1)
        maze: [],
        visited: [],
        items: [],
        player: { x:0, y:0 },
        facing: 0,
        start: { x:0, y:0 },
        exit:  { x:8, y:8 },
        // 요구사항: 시작부터 랜턴 소지 + ON
        hasLantern: true,
        lanternOn: true,
        lanternStartedAt: 0,
        lanternCharges: 3,
        turns: 0,
        startedAt: 0,
        endedAt: 0,
        ended: false
      },
    };
  }

  // ===== 렌더: SCREEN 로그 =====
  renderScreen(){
    if(this.$screen){
      this.$screen.textContent = (this.state.ui.screenLines || []).join(this.NL);
      this.$screen.scrollTop = this.$screen.scrollHeight;
    }
    if(this.$messageBody){
      this.$messageBody.textContent = (this.state.ui.screenLines || []).join(this.NL);
      this.$messageBody.scrollTop = this.$messageBody.scrollHeight;
    }
  }
  log(line){
    if(!this.state.ui.screenLines) this.state.ui.screenLines = [];
    this.state.ui.screenLines.push(String(line));
    if(this.state.ui.screenLines.length > 500){
      this.state.ui.screenLines = this.state.ui.screenLines.slice(this.state.ui.screenLines.length - 500);
    }
    this.renderScreen();
    this.save();
  }
  logBlock(lines){ for(var i=0;i<lines.length;i++) this.log(lines[i]); }

  setStatus(t){
    this.state.ui.status = t;
    this.$status.textContent = t;
    this.save();
  }

  // ===== 저장/로드 =====
  save(){
    // try{ localStorage.setItem(this.SAVE_KEY, JSON.stringify(this.state)); }catch(e){}
  }
  load(){
    // try{
    //   var raw = localStorage.getItem(this.SAVE_KEY);
    //   if(!raw) return false;
    //   var obj = JSON.parse(raw);
    //   if(!obj || !obj.game || !obj.ui) return false;
    //   this.state = obj;
    //   if(typeof this.state.game.facing !== "number") this.state.game.facing = 0;
    //   if(typeof this.state.game.lanternStartedAt !== "number") this.state.game.lanternStartedAt = this.state.game.startedAt || this.nowMs();
    //   if(typeof this.state.game.lanternCharges !== "number") this.state.game.lanternCharges = 3;
    //   this.$status.textContent = this.state.ui.status || "READY";
    //   this.renderScreen();
    //   this.renderInfo();
    //   return true;
    // }catch(e){
    //   return false;
    // }
    return false;
  }
  clearSave(){
    // try{ localStorage.removeItem(this.SAVE_KEY); }catch(e){}
  }

  // ===== 미로 생성 =====
  make2D(h, w, fill){
    var a = [];
    for(var y=0;y<h;y++){
      var row = [];
      for(var x=0;x<w;x++) row.push(fill);
      a.push(row);
    }
    return a;
  }

  inBounds(x,y){
    return x>=0 && y>=0 && x<this.state.game.w && y<this.state.game.h;
  }

  shuffle(arr){
    for(var i=arr.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var t = arr[i]; arr[i]=arr[j]; arr[j]=t;
    }
    return arr;
  }

  carvePassage(x,y,nx,ny,dir){
    this.state.game.maze[y][x] &= (~this.BITS[dir]);
    this.state.game.maze[ny][nx] &= (~this.BITS[this.oppDir(dir)]);
  }

  genMaze(w,h){
    this.state.game.w = w;
    this.state.game.h = h;

    this.state.game.maze = this.make2D(h,w, this.BIT_N|this.BIT_E|this.BIT_S|this.BIT_W);
    var seen = this.make2D(h,w,false);

    var self = this;
    function dfs(x,y){
      seen[y][x] = true;
      var dirs = self.shuffle([0,1,2,3]);
      for(var i=0;i<dirs.length;i++){
        var d = dirs[i];
        var nx = x + self.DIRS[d].dx;
        var ny = y + self.DIRS[d].dy;
        if(nx<0 || ny<0 || nx>=w || ny>=h) continue;
        if(seen[ny][nx]) continue;
        self.carvePassage(x,y,nx,ny,d);
        dfs(nx,ny);
      }
    }

    dfs(0,0);

    this.state.game.visited = this.make2D(h,w,false);
    this.state.game.items = this.make2D(h,w,null);
    for(var yy=0;yy<h;yy++){
      for(var xx=0;xx<w;xx++) this.state.game.items[yy][xx] = [];
    }

    this.state.game.start = { x:0, y:0 };
    this.state.game.exit  = { x:w-1, y:h-1 };
    this.state.game.player = { x:0, y:0 };
    this.state.game.facing = 0;

    // 요구사항: 랜턴을 미로 아이템으로 배치하지 않음(시작부터 소지)
    this.state.game.hasLantern = true;
    this.state.game.lanternOn = true;
    this.state.game.lanternStartedAt = this.nowMs();
    this.state.game.lanternCharges = 3;

    this.state.game.turns = 0;
    this.state.game.startedAt = this.nowMs();
    this.state.game.endedAt = 0;
    this.state.game.ended = false;

    this.visit(0,0);
  }

  visit(x,y){
    if(!this.inBounds(x,y)) return;
    this.state.game.visited[y][x] = true;
  }

  // ===== 지도 렌더(지나간 곳만) =====
  renderMap(){
    var w = this.state.game.w;
    var h = this.state.game.h;
    var out = [];

    var H = h*2 + 1;
    var W = w*2 + 1;
    var grid = this.make2D(H, W, " ");
    var glow = this.make2D(H, W, false);

    var self = this;
    function put(y,x,ch,isGlow){
      if(y>=0 && x>=0 && y<H && x<W){
        grid[y][x] = ch;
        if(isGlow) glow[y][x] = true;
      }
    }

    function getLanternPhase(on, elapsed){
      if(!on) return "front";
      if(elapsed >= 60000) return "front";
      if(elapsed >= 40000) return "third";
      if(elapsed >= 20000) return "twothird";
      return "full";
    }

    function isVisibleCell(x,y){
      if(!self.state.game.visited[y][x]) return false;
      var lanternElapsed = self.nowMs() - self.state.game.lanternStartedAt;
      var phase = getLanternPhase(self.state.game.lanternOn, lanternElapsed);
      if(phase === "full") return true;
      if(phase === "twothird" || phase === "third"){
        var ratio = (phase === "twothird") ? (2/3) : (1/3);
        var vw = Math.max(1, Math.floor(w * ratio));
        var vh = Math.max(1, Math.floor(h * ratio));
        var halfW = Math.floor(vw / 2);
        var halfH = Math.floor(vh / 2);
        var minX = self.state.game.player.x - halfW;
        var maxX = self.state.game.player.x + halfW;
        var minY = self.state.game.player.y - halfH;
        var maxY = self.state.game.player.y + halfH;
        return (x >= minX && x <= maxX && y >= minY && y <= maxY);
      }
      // front only
      var fx = self.state.game.player.x + self.DIRS[self.state.game.facing].dx;
      var fy = self.state.game.player.y + self.DIRS[self.state.game.facing].dy;
      if(x === self.state.game.player.x && y === self.state.game.player.y) return true;
      return (x === fx && y === fy);
    }

    for(var y=0;y<h;y++){
      for(var x=0;x<w;x++){
        if(!isVisibleCell(x,y)) continue;
        var dx = Math.abs(x - self.state.game.player.x);
        var dy = Math.abs(y - self.state.game.player.y);
        var isNear = (Math.max(dx, dy) <= 2);

        var cy = y*2 + 1;
        var cx = x*2 + 1;

        var ch = ".";
        if(x===self.state.game.start.x && y===self.state.game.start.y) ch = "S";
        if(x===self.state.game.exit.x  && y===self.state.game.exit.y)  ch = "E";
        if(x===self.state.game.player.x && y===self.state.game.player.y) ch = "@";
        put(cy,cx,ch, isNear);

        var cell = self.state.game.maze[y][x];
        if(cell & self.BIT_N){ put(cy-1,cx,"-", isNear); } else { put(cy-1,cx," "); }
        if(cell & self.BIT_S){ put(cy+1,cx,"-", isNear); } else { put(cy+1,cx," "); }
        if(cell & self.BIT_W){ put(cy,cx-1,"|", isNear); } else { put(cy,cx-1," "); }
        if(cell & self.BIT_E){ put(cy,cx+1,"|", isNear); } else { put(cy,cx+1," "); }

        put(cy-1,cx-1,"+", isNear);
        put(cy-1,cx+1,"+", isNear);
        put(cy+1,cx-1,"+", isNear);
        put(cy+1,cx+1,"+", isNear);
      }
    }

    function esc(ch){
      if(ch === "&") return "&amp;";
      if(ch === "<") return "&lt;";
      if(ch === ">") return "&gt;";
      return ch;
    }

    for(var gy=0;gy<H;gy++){
      var line = "";
      for(var gx=0;gx<W;gx++){
        var ch2 = grid[gy][gx];
        if(ch2 === " "){
          line += " ";
        }else if(glow[gy][gx]){
          line += '<span class="lanternGlow">' + esc(ch2) + "</span>";
        }else{
          line += esc(ch2);
        }
      }
      out.push(line);
    }
    return out.join(this.NL);
  }

  // ===== INFO: 방(탑다운) 표시 =====
  // 중앙=아이템(*), 없으면 +
  // 4방=갈 수 있으면 벽 중앙 공백(문)
  renderRoomView(){
    var x = this.state.game.player.x;
    var y = this.state.game.player.y;
    var cell = this.state.game.maze[y][x];

    var openN = ((cell & this.BIT_N) === 0);
    var openE = ((cell & this.BIT_E) === 0);
    var openS = ((cell & this.BIT_S) === 0);
    var openW = ((cell & this.BIT_W) === 0);

    var itemsHere = this.state.game.items[y][x] || [];
    var center = itemsHere.length ? "*" : "+";

    var top = "+" + (openN ? "- -" : "---") + "+";
    var mid1 = (openW ? " " : "|") + "   " + (openE ? " " : "|");
    var mid2 = (openW ? " " : "|") + " " + center + " " + (openE ? " " : "|");
    var mid3 = (openW ? " " : "|") + "   " + (openE ? " " : "|");
    var bot = "+" + (openS ? "- -" : "---") + "+";

    var itLine = (itemsHere.length)
      ? ("ITEMS: " + itemsHere.join(", "))
      : "ITEMS: (none)";

    return [top, mid1, mid2, mid3, bot, itLine].join(this.NL);
  }

  getExitsText(){
    var x = this.state.game.player.x;
    var y = this.state.game.player.y;
    var cell = this.state.game.maze[y][x];
    var exits = [];
    if((cell & this.BIT_N) === 0) exits.push("north");
    if((cell & this.BIT_E) === 0) exits.push("east");
    if((cell & this.BIT_S) === 0) exits.push("south");
    if((cell & this.BIT_W) === 0) exits.push("west");
    return exits.length ? exits.join(", ") : "(none)";
  }

  printRoomToScreen(){
    // SCREEN에는 방 모양(ASCII 아트)을 표시하지 않는다.
    // 텍스트 정보만 출력한다.
    var lines = [];
    lines.push("----------------");
    lines.push("LOCATION: (" + this.state.game.player.x + "," + this.state.game.player.y + ")");
    lines.push("EXITS: " + this.getExitsText());
    lines.push("TURNS: " + this.state.game.turns + "  TIME: " + this.fmtDuration(this.nowMs() - this.state.game.startedAt));
    lines.push("----------------");
    for(var i=0;i<lines.length;i++) this.log(lines[i]);
  }

  // ===== INFO 렌더 =====
  renderInfo(shouldSave){
    if(arguments.length === 0) shouldSave = true;

    var elapsed = this.nowMs() - this.state.game.startedAt;
    var lanternElapsed = this.nowMs() - this.state.game.lanternStartedAt;
    if(this.state.game.lanternOn && lanternElapsed >= 60000) this.state.game.lanternOn = false;

    // 요구사항: INFO 화면에는 MAP만 표시
    this.$art.innerHTML = this.renderMap();
    this.autoScrollMapToPlayer();
    var maxLanternMs = 60000;
    var remainMs = this.state.game.lanternOn ? Math.max(0, maxLanternMs - lanternElapsed) : 0;
    var barLen = 10;
    var filled = Math.round((remainMs / maxLanternMs) * barLen);
    if(!this.state.game.lanternOn) filled = 0;
    if(filled < 0) filled = 0;
    if(filled > barLen) filled = barLen;
    var bar = "";
    for(var i=0;i<barLen;i++) bar += (i < filled ? "=" : "-");

    this.$hint.textContent = [
      "⏱  " + this.fmtDuration(elapsed),
      "🔦 " + (this.state.game.lanternOn ? "ON " : "OFF") + bar + " " + Math.ceil(remainMs/1000) + "s",
      "🧪 x" + this.state.game.lanternCharges
    ].join(this.NL);
    if(shouldSave) this.save();
  }

  autoScrollMapToPlayer(){
    if(!this.$mapView || !this.$art) return;
    if(this.state && this.state.game && this.state.game.ended) return;
    var playerY = this.state.game.player.y;
    var gridRow = playerY * 2 + 1;
    var style = window.getComputedStyle(this.$art);
    var lineHeight = parseFloat(style.lineHeight);
    if(!lineHeight || isNaN(lineHeight)){
      var fontSize = parseFloat(style.fontSize) || 16;
      lineHeight = fontSize * 1.2;
    }
    var targetY = gridRow * lineHeight;
    var viewH = this.$mapView.clientHeight;
    var maxScroll = Math.max(0, this.$mapView.scrollHeight - viewH);
    var nextScroll = Math.min(maxScroll, Math.max(0, targetY - viewH / 2));
    requestAnimationFrame(() => {
      this.$mapView.scrollTop = nextScroll;
    });
  }

  // ===== 규칙/명령 =====
  isExit(){
    return this.state.game.player.x === this.state.game.exit.x && this.state.game.player.y === this.state.game.exit.y;
  }

  showExitEntryScreen(){
    // 요구사항 변경: ASCII 박스는 깨질 수 있으니 사용하지 않음.
    // SCREEN에는 간단 문구만.
    this.log("");
    this.log("YOU ESCAPE THE MAZE!");
    this.log("");
  }

  startEndFx(){
    if(this.$crt) this.$crt.classList.add("endfx");
    if(this.$endOverlay) this.$endOverlay.classList.add("show");
  }

  stopEndFx(){
    if(this.$crt) this.$crt.classList.remove("endfx");
    // overlay는 종료 화면으로 남겨둠(계속 표시)
  }

  hideEndOverlay(){
    if(this.$endOverlay) this.$endOverlay.classList.remove("show");
  }

  endGame(){
    // 1) E 진입 화면 표시
    // 2) 전체 화면 흔들림 + 깜빡임
    this.state.game.ended = true;
    this.setDpadEnabled(false);

    this.showExitEntryScreen();
    this.startEndFx();

    setTimeout(() => {
      this.stopEndFx();
      this.state.game.endedAt = this.nowMs();
      this.setStatus("COMPLETE");

      // 최소 종료 메시지: 깨지지 않게 한 줄로만
      var elapsed = this.state.game.endedAt - this.state.game.startedAt;
      this.log("TURNS: " + this.state.game.turns + "  TIME: " + this.fmtDuration(elapsed));
      this.log("YOU ESCAPE THE MAZE :)");

      this.renderInfo();
      this.save();
    }, 1100);
  }

  bumpTurn(){ this.state.game.turns += 1; }

  canMove(dir){
    var x = this.state.game.player.x;
    var y = this.state.game.player.y;
    var cell = this.state.game.maze[y][x];
    return ((cell & this.BITS[dir]) === 0);
  }

  moveDir(dir){
    if(this.state.game.ended) { this.log("이미 종료됐다. reset으로 새 게임."); return; }
    this.bumpTurn();

    if(!this.canMove(dir)){
      this.log("벽이다. 갈 수 없다.");
      this.renderInfo();
      return;
    }

    var nx = this.state.game.player.x + this.DIRS[dir].dx;
    var ny = this.state.game.player.y + this.DIRS[dir].dy;
    if(!this.inBounds(nx,ny)){
      this.log("경계 밖이다.");
      this.renderInfo();
      return;
    }

    this.state.game.player.x = nx;
    this.state.game.player.y = ny;
    this.state.game.facing = dir;
    this.visit(nx,ny);

    this.log("Moved to (" + nx + "," + ny + ").");
    this.printRoomToScreen();

    if(this.isExit()){
      this.endGame();
      return;
    }

    this.renderInfo();
    this.save();
  }

  toggleLantern(){
    if(this.state.game.ended) { this.log("이미 종료됐다. reset으로 새 게임."); return; }
    this.bumpTurn();
    if(this.state.game.lanternCharges <= 0){
      this.log("No lantern charges left.");
      this.renderInfo();
      this.save();
      return;
    }
    this.state.game.lanternCharges -= 1;
    this.state.game.lanternOn = true;
    this.state.game.lanternStartedAt = this.nowMs();
    this.log("Lantern refreshed. (" + this.state.game.lanternCharges + " left)");
    this.renderInfo();
    this.save();
  }

  reset(){
    this.clearSave();
    this.state = this.newState();
    this.genMaze(9,9);
    this.hideEndOverlay();
    this.state.ui.screenLines = [];
    this.setStatus("BOOT");
    this.log("APPLE //e  (MONO)");
    this.log("");
    this.log("MAZE LOADED.");
    this.log("GOAL: reach the exit (E). INFO shows MAP only.");
    this.log("TIP: use L to refresh lantern status.");
    this.log("");
    this.setStatus("READY");
    this.renderInfo();
    if(this.$mapView){
      this.$mapView.scrollTop = 0;
      this.$mapView.scrollLeft = 0;
    }
    this.printRoomToScreen();
    this.save();
    this.setDpadEnabled(true);
  }

  setDpadEnabled(on){
    if(!this.$dpad) return;
    var btns = this.$dpad.querySelectorAll("button.btn[data-dir]");
    for(var i=0;i<btns.length;i++) btns[i].disabled = !on;
    if(this.$lbtn) this.$lbtn.disabled = !on;
  }

  onDpadPress(dir){
    // 모바일 터치 편의: 입력창 포커스/키보드와 독립
    // (스크롤 방지)
    try{ if(this.$cmd) this.$cmd.blur(); }catch(e){}
    this.moveDir(dir);
  }

  bindDpad(){
    if(!this.$dpad) return;
    var btns = this.$dpad.querySelectorAll("button.btn[data-dir]");
    for(var i=0;i<btns.length;i++){
      (function(btn, self){
        var dir = parseInt(btn.getAttribute("data-dir"), 10);
        // touch + mouse
        btn.addEventListener("touchstart", function(ev){
          ev.preventDefault();
          self.onDpadPress(dir);
        }, {passive:false});
        btn.addEventListener("mousedown", function(ev){
          ev.preventDefault();
          self.onDpadPress(dir);
        });
      })(btns[i], this);
    }
  }

  bindLanternButton(){
    if(!this.$lbtn) return;
    this.$lbtn.addEventListener("touchstart", (ev) => {
      ev.preventDefault();
      this.toggleLantern();
    }, {passive:false});
    this.$lbtn.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      this.toggleLantern();
    });
  }

  openMessageSheet(){
    if(!this.$messageSheet) return;
    if(typeof this.$messageSheet.showModal === "function"){
      if(!this.$messageSheet.open) this.$messageSheet.showModal();
    }else{
      this.$messageSheet.setAttribute("open", "");
    }
  }

  closeMessageSheet(){
    if(!this.$messageSheet) return;
    if(typeof this.$messageSheet.close === "function"){
      if(this.$messageSheet.open) this.$messageSheet.close();
    }else{
      this.$messageSheet.removeAttribute("open");
    }
  }

  bindMessageButton(){
    if(this.$mbtn){
      this.$mbtn.addEventListener("touchstart", (ev) => {
        ev.preventDefault();
        this.openMessageSheet();
      }, {passive:false});
      this.$mbtn.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        this.openMessageSheet();
      });
    }
    if(this.$messageClose){
      this.$messageClose.addEventListener("click", () => this.closeMessageSheet());
    }
    if(this.$messageSheet){
      this.$messageSheet.addEventListener("click", (ev) => {
        if(ev.target === this.$messageSheet) this.closeMessageSheet();
      });
    }
    if(this.$messageBody){
      this.$messageBody.addEventListener("click", () => {
        if(this.state && this.state.game && this.state.game.ended){
          this.closeMessageSheet();
          this.hideEndOverlay();
          this.reset();
        }
      });
    }
  }

  bindKeyboard(){
    document.addEventListener("keydown", (ev) => {
      if(this.state && this.state.game && this.state.game.ended){
        ev.preventDefault();
        this.closeMessageSheet();
        this.hideEndOverlay();
        this.reset();
        return;
      }
      var key = ev.key;
      var dir = null;
      if(key === "ArrowUp" || key === "w" || key === "W") dir = 0;
      if(key === "ArrowRight" || key === "d" || key === "D") dir = 1;
      if(key === "ArrowDown" || key === "s" || key === "S") dir = 2;
      if(key === "ArrowLeft" || key === "a" || key === "A") dir = 3;
      if(dir === null) return;
      ev.preventDefault();
      this.moveDir(dir);
    });
  }

  bindRestartOnClick(){
    var target = this.$crt || document.body;
    var tryRestart = (ev) => {
      if(this.state && this.state.game && this.state.game.ended){
        if(ev) ev.preventDefault();
        this.closeMessageSheet();
        this.hideEndOverlay();
        this.reset();
        return true;
      }
      return false;
    };
    target.addEventListener("click", (ev) => { tryRestart(ev); });
    target.addEventListener("touchstart", (ev) => { tryRestart(ev); }, {passive:false});
    target.addEventListener("pointerdown", (ev) => { tryRestart(ev); });
  }

  // ===== 테스트 케이스(간단) =====
  runTests(){
    try{
      // 기존 테스트(유지)
      this.state = this.newState();
      this.genMaze(9,9);
      console.assert(this.state.game.maze.length === 9, "maze height should be 9");
      console.assert(this.state.game.maze[0].length === 9, "maze width should be 9");
      console.assert(this.state.game.visited[0][0] === true, "start should be visited");

      var found = false;
      for(var y=0;y<9;y++){
        for(var x=0;x<9;x++){
          var its = this.state.game.items[y][x];
          for(var k=0;k<its.length;k++) if(its[k]==="lantern") found = true;
        }
      }
      console.assert(found === false, "lantern item should NOT exist (start with lantern)");
      console.assert(this.state.game.hasLantern === true, "should start with lantern");
      console.assert(this.state.game.lanternOn === true, "lantern should start ON");

      var m = this.renderMap();
      console.assert(typeof m === "string", "renderMap should return string");

      // 추가 테스트: NL은 실제 개행 문자여야 함
      console.assert(this.NL.length === 1, "NL should be a single newline char");

      // 추가 테스트: 방 표시 렌더링이 예외 없이 문자열 반환 (SCREEN 출력용)
      this.state.game.player = {x:0,y:0};
      var rv = this.renderRoomView();
      console.assert(typeof rv === "string" && rv.length > 0, "renderRoomView should return non-empty string");

      // 추가 테스트: 문(통로) 표현
      // (0,0)셀을 강제로 설정: 북/서 벽, 동/남 통로
      this.state.game.maze[0][0] = (this.BIT_N|this.BIT_W); // E,S는 비트가 없으니 open
      this.state.game.player = {x:0,y:0};
      this.state.game.items[0][0] = [];
      var room = this.renderRoomView().split(this.NL);
      // top는 북쪽이 막혀서 ---
      console.assert(room[0] === "+---+", "north wall should be closed");
      // mid 라인들은 서쪽 막힘(|), 동쪽 열림(공백)
      console.assert(room[1].charAt(0) === "|", "west wall should be closed");
      console.assert(room[1].charAt(4) === " ", "east side should be open (space)"
      );
      // bottom은 남쪽 열림(- -)
      console.assert(room[4] === "+- -+", "south door should be open");

      // 추가 테스트: save/load roundtrip
      // this.state.ui.screenLines = ["TEST"]; 
      // this.save();
      // var ok = this.load();
      // console.assert(ok === true, "load should succeed after save");
      // console.assert(this.state.ui.screenLines[0] === "TEST", "screenLines should persist");

      // 추가 테스트: 모바일 D-pad 존재 및 data-dir 속성
      console.assert(!!document.getElementById("dpad"), "dpad element should exist");
      var dpadBtns = document.querySelectorAll("#dpad button.btn[data-dir]");
      console.assert(dpadBtns.length === 4, "dpad should have 4 directional buttons");
    }catch(e){
      console.warn("tests failed", e);
    }
  }
}

// ===== 시작 =====
var game = new MazeGame();
