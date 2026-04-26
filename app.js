const SAVE_KEY = "summer_card_battle_v13_landscape";
const TICK_MS = 100;
const EMBEDDED_CARDS = [{"id": "yuki_lr_001", "name": "水上 由岐", "rarity": "LR", "position": "front", "attribute": "記憶", "baseHp": 5200, "baseAtk": 980, "baseDef": 420, "baseSpd": 720, "baseLuck": 430, "growHp": 280, "growAtk": 64, "growDef": 28, "growSpd": 34, "growLuck": 20, "dupeBonusRate": 0.035, "normalAttack": {"name": "通常攻撃", "type": "attack", "target": "front_enemy", "power": 1.0, "tpGain": 12, "duration": 900}, "skill1": {"name": "踏み込み掌打", "type": "attack", "target": "front_enemy", "power": 1.65, "tpGain": 18, "duration": 1300}, "skill2": {"name": "旋風蹴り", "type": "attack", "target": "enemy_area", "power": 1.25, "tpGain": 20, "duration": 1500}, "ultimate": {"name": "終ノ空・崩拳連撃", "type": "attack", "target": "enemy_all", "power": 2.8, "tpCost": 100, "duration": 2400}, "actionLoop": ["normalAttack", "skill1", "normalAttack", "skill2", "normalAttack"]}, {"id": "kamome_ur_001", "name": "久島 鴎", "rarity": "UR", "position": "middle", "attribute": "空", "baseHp": 4300, "baseAtk": 820, "baseDef": 380, "baseSpd": 760, "baseLuck": 620, "growHp": 230, "growAtk": 52, "growDef": 24, "growSpd": 38, "growLuck": 30, "dupeBonusRate": 0.03, "normalAttack": {"name": "通常攻撃", "type": "attack", "target": "front_enemy", "power": 1.0, "tpGain": 12, "duration": 900}, "skill1": {"name": "リーフストーン", "type": "attack", "target": "front_enemy", "power": 1.45, "tpGain": 18, "duration": 1250}, "skill2": {"name": "夏風の加護", "type": "buff", "target": "ally_all", "stat": "spd", "value": 0.18, "duration": 1300, "buffDuration": 7000, "tpGain": 20}, "ultimate": {"name": "静寂の羽ばたき・極", "type": "attack", "target": "enemy_all", "power": 2.35, "tpCost": 100, "duration": 2400}, "actionLoop": ["normalAttack", "skill1", "normalAttack", "skill2", "normalAttack"]}, {"id": "front_sr_001", "name": "前衛アタッカー", "rarity": "SR", "position": "front", "attribute": "火", "baseHp": 3900, "baseAtk": 720, "baseDef": 360, "baseSpd": 640, "baseLuck": 300, "growHp": 200, "growAtk": 42, "growDef": 20, "growSpd": 26, "growLuck": 14, "dupeBonusRate": 0.025, "normalAttack": {"name": "通常攻撃", "type": "attack", "target": "front_enemy", "power": 1.0, "tpGain": 12, "duration": 900}, "skill1": {"name": "強打", "type": "attack", "target": "front_enemy", "power": 1.35, "tpGain": 16, "duration": 1200}, "skill2": {"name": "気合", "type": "buff", "target": "self", "stat": "atk", "value": 0.18, "duration": 1200, "buffDuration": 7000, "tpGain": 18}, "ultimate": {"name": "渾身連打", "type": "attack", "target": "front_enemy", "power": 3.1, "tpCost": 100, "duration": 2300}, "actionLoop": ["normalAttack", "skill1", "normalAttack", "skill2", "normalAttack"]}, {"id": "healer_sr_001", "name": "支援ヒーラー", "rarity": "SR", "position": "back", "attribute": "水", "baseHp": 3400, "baseAtk": 520, "baseDef": 300, "baseSpd": 600, "baseLuck": 410, "growHp": 170, "growAtk": 28, "growDef": 18, "growSpd": 24, "growLuck": 20, "dupeBonusRate": 0.025, "normalAttack": {"name": "通常攻撃", "type": "attack", "target": "front_enemy", "power": 0.85, "tpGain": 12, "duration": 900}, "skill1": {"name": "応急手当", "type": "heal", "target": "lowest_ally", "power": 1.3, "tpGain": 18, "duration": 1200}, "skill2": {"name": "防御支援", "type": "buff", "target": "ally_all", "stat": "def", "value": 0.16, "duration": 1300, "buffDuration": 7000, "tpGain": 18}, "ultimate": {"name": "全体回復", "type": "heal", "target": "ally_all", "power": 1.8, "tpCost": 100, "duration": 2300}, "actionLoop": ["normalAttack", "skill1", "normalAttack", "skill2", "normalAttack"]}, {"id": "mage_sr_001", "name": "後衛メイジ", "rarity": "SR", "position": "back", "attribute": "星", "baseHp": 3100, "baseAtk": 840, "baseDef": 260, "baseSpd": 580, "baseLuck": 520, "growHp": 150, "growAtk": 50, "growDef": 14, "growSpd": 22, "growLuck": 24, "dupeBonusRate": 0.025, "normalAttack": {"name": "通常攻撃", "type": "attack", "target": "front_enemy", "power": 0.95, "tpGain": 12, "duration": 900}, "skill1": {"name": "星弾", "type": "attack", "target": "front_enemy", "power": 1.55, "tpGain": 18, "duration": 1250}, "skill2": {"name": "小爆発", "type": "attack", "target": "enemy_area", "power": 1.15, "tpGain": 20, "duration": 1450}, "ultimate": {"name": "星降る夜", "type": "attack", "target": "enemy_all", "power": 2.45, "tpCost": 100, "duration": 2500}, "actionLoop": ["normalAttack", "skill1", "normalAttack", "skill2", "normalAttack"]}];

let cards = [];
let save = null;
let battle = null;
let timer = null;

function defaultSave() {
  return {
    playerLevel: 1,
    stamina: 100,
    gems: 3000,
    coins: 10000,
    deck: ["yuki_lr_001", "kamome_ur_001", "front_sr_001", "healer_sr_001", "mage_sr_001"],
    ownedCards: {
      yuki_lr_001: { count: 1, level: 1, exp: 0, limitBreak: 0 },
      kamome_ur_001: { count: 1, level: 1, exp: 0, limitBreak: 0 },
      front_sr_001: { count: 1, level: 1, exp: 0, limitBreak: 0 },
      healer_sr_001: { count: 1, level: 1, exp: 0, limitBreak: 0 },
      mage_sr_001: { count: 1, level: 1, exp: 0, limitBreak: 0 }
    }
  };
}

async function init() {
  try {
    const res = await fetch("cards.json", { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    cards = await res.json();
  } catch (e) {
    cards = EMBEDDED_CARDS;
  }
  loadSave();
  bind();
  renderHeader();
  initBattle();
  renderAll();
  log("準備完了。敵HPを高めにしています。開始を押してください。");
}

function loadSave() {
  try {
    save = JSON.parse(localStorage.getItem(SAVE_KEY)) || defaultSave();
  } catch {
    save = defaultSave();
  }

  // 旧バージョンのセーブやカードID変更に対応する補正
  const defaults = defaultSave();
  save.playerLevel ??= defaults.playerLevel;
  save.stamina ??= defaults.stamina;
  save.gems ??= defaults.gems;
  save.coins ??= defaults.coins;
  save.ownedCards ??= {};
  save.deck ??= defaults.deck;

  // 旧ID front_r_001 を新ID front_sr_001 に移行
  if (save.ownedCards.front_r_001 && !save.ownedCards.front_sr_001) {
    save.ownedCards.front_sr_001 = save.ownedCards.front_r_001;
  }

  save.deck = save.deck.map(id => id === "front_r_001" ? "front_sr_001" : id);

  // 存在しないカードIDが編成に入っていたら初期デッキに戻す
  const validIds = new Set(cards.map(c => c.id));
  if (save.deck.length !== 5 || save.deck.some(id => !validIds.has(id))) {
    save.deck = defaults.deck;
  }

  // 所持データがない初期デッキカードを補完
  defaults.deck.forEach(id => {
    if (!save.ownedCards[id]) {
      save.ownedCards[id] = { count: 1, level: 1, exp: 0, limitBreak: 0 };
    }
  });

  saveGame();
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function bind() {
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.onclick = () => nav(btn.dataset.nav);
  });
  document.getElementById("startBattleBtn").onclick = startBattle;
  document.getElementById("resetBattleBtn").onclick = () => {
    stopBattle();
    initBattle();
    renderAll();
    log("リセットしました。");
  };
}

function nav(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".bottomNav button").forEach(b => b.classList.toggle("active", b.dataset.nav === id));
  if (id === "battleScreen") renderAll();
}

function renderHeader() {
  document.getElementById("playerLevel").textContent = save.playerLevel;
  document.getElementById("stamina").textContent = save.stamina;
  document.getElementById("gems").textContent = save.gems;
  document.getElementById("coins").textContent = save.coins;
}

function getCard(id) {
  return cards.find(c => c.id === id);
}

function calcStats(card, owned) {
  const level = owned?.level ?? 1;
  const count = owned?.count ?? 1;
  const limitBreak = owned?.limitBreak ?? Math.max(0, count - 1);
  const mul = 1 + (card.dupeBonusRate ?? 0.03) * Math.sqrt(limitBreak);
  return {
    level, limitBreak,
    maxHp: Math.floor((card.baseHp + card.growHp * (level - 1)) * mul),
    atk: Math.floor((card.baseAtk + card.growAtk * (level - 1)) * mul),
    def: Math.floor((card.baseDef + card.growDef * (level - 1)) * mul),
    spd: Math.floor((card.baseSpd + card.growSpd * (level - 1)) * mul),
    luck: Math.floor((card.baseLuck + card.growLuck * (level - 1)) * mul)
  };
}

function makeAlly(cardId, i) {
  let card = getCard(cardId);
  if (!card) {
    console.warn("存在しないカードIDのため初期カードに差し替えます:", cardId);
    card = getCard(defaultSave().deck[i]) || cards[0];
    cardId = card.id;
  }
  const stats = calcStats(card, save.ownedCards[cardId] ?? { count: 1, level: 1, exp: 0, limitBreak: 0 });
  return {
    uid: "ally_" + i,
    side: "ally",
    name: card.name,
    card,
    hp: stats.maxHp,
    maxHp: stats.maxHp,
    atk: stats.atk,
    def: stats.def,
    spd: stats.spd,
    luck: stats.luck,
    tp: 0,
    loopIndex: 0,
    action: null,
    actionEnd: 0,
    impactAt: 0,
    impacted: false,
    state: "idle",
    alive: true,
    buffs: []
  };
}

function makeEnemy(i) {
  const names = ["敵A","敵B","敵C"];
  const positions = ["front","middle","back"];

  // 挙動確認用にかなり硬め。長く殴り合えるようにする。
  const enemyHp = 28000 + i * 9000;

  return {
    uid: "enemy_" + i,
    side: "enemy",
    name: names[i],
    hp: enemyHp,
    maxHp: enemyHp,
    atk: 520 + i * 90,
    def: 330 + i * 70,
    spd: 450 + i * 35,
    luck: 120,
    tp: 0,
    loopIndex: 0,
    action: null,
    actionEnd: 0,
    impactAt: 0,
    impacted: false,
    state: "idle",
    alive: true,
    buffs: [],
    card: {
      rarity: "ENEMY",
      position: positions[i] || "middle",
      actionLoop: ["normalAttack","normalAttack","skill1","normalAttack"],
      normalAttack: { name: "攻撃", type: "attack", target: "front_enemy", power: 0.85, duration: 1050, tpGain: 0 },
      skill1: { name: "強攻撃", type: "attack", target: "front_enemy", power: 1.15, duration: 1300, tpGain: 0 }
    }
  };
}

function initBattle() {
  battle = {
    running: false,
    now: 0,
    allies: save.deck.map(makeAlly),
    enemies: [makeEnemy(0), makeEnemy(1), makeEnemy(2)],
    logs: []
  };
}

function allUnits() {
  return [...battle.allies, ...battle.enemies];
}

function startBattle() {
  if (!battle) initBattle();
  if (battle.running) return toast("戦闘中です");
  battle.running = true;
  battle.now = 0;
  document.getElementById("battleStateText").textContent = "戦闘中";
  log("戦闘開始！");
  renderAll();
  clearInterval(timer);
  timer = setInterval(tick, TICK_MS);
}

function stopBattle() {
  if (timer) clearInterval(timer);
  timer = null;
  if (battle) battle.running = false;
  document.getElementById("battleStateText").textContent = "停止中";
}

function tick() {
  if (!battle?.running) return;
  battle.now += TICK_MS;

  const units = allUnits().filter(u => u.alive);

  units.forEach(u => {
    if (u.action && !u.impacted && battle.now >= u.impactAt) {
      u.impacted = true;
      impact(u);
    }
    if (u.action && battle.now >= u.actionEnd) {
      finishAction(u);
    }
  });

  units
    .filter(u => !u.action)
    .sort((a,b) => effective(b,"spd") - effective(a,"spd"))
    .forEach(u => startNextAction(u));

  checkEnd();
  renderAll();
}

function startNextAction(unit) {
  if (!unit.alive) return;
  const loop = unit.card.actionLoop;
  const key = loop[unit.loopIndex];
  unit.loopIndex = (unit.loopIndex + 1) % loop.length;
  startAction(unit, key, unit.card[key], false);
}

function startAction(unit, key, action, ultimate) {
  if (!action) return;
  unit.action = { key, data: action, ultimate };
  unit.actionEnd = battle.now + (action.duration ?? 1000);
  unit.impactAt = battle.now + Math.floor((action.duration ?? 1000) * 0.55);
  unit.impacted = false;
  unit.state = ultimate ? "ultimate" : "attack";
  flash(unit.uid, ultimate ? "ultimate" : "attack");
  if (ultimate) showCutin(unit, action);
  log(`${unit.name}：${action.name}`);
}

function finishAction(unit) {
  const wasUltimate = unit.action?.ultimate;
  unit.action = null;
  unit.state = "idle";
  unit.actionEnd = 0;
  unit.impactAt = 0;
  unit.impacted = false;

  if (wasUltimate) {
    setTimeout(() => {
      if (battle?.running && unit.alive && !unit.action) startNextAction(unit);
    }, 300);
  }
}

function activateUltimate(uid) {
  const unit = battle.allies.find(u => u.uid === uid);
  if (!unit || !unit.alive) return;
  if (unit.tp < 100) return toast("TPが足りません");
  if (unit.state === "ultimate") return;
  unit.action = null; // 現在行動キャンセル
  unit.tp = 0;
  startAction(unit, "ultimate", unit.card.ultimate, true);
  renderAll();
}

function targetList(unit, targetType) {
  const enemies = unit.side === "ally" ? battle.enemies : battle.allies;
  const allies = unit.side === "ally" ? battle.allies : battle.enemies;
  const aliveEnemies = enemies.filter(x => x.alive);
  const aliveAllies = allies.filter(x => x.alive);

  if (targetType === "front_enemy") {
    // 前衛優先
    const front = aliveEnemies.filter(x => (x.card.position || "middle") === "front");
    if (front.length) return [front[0]];
    return aliveEnemies.slice(0,1);
  }
  if (targetType === "enemy_area") return aliveEnemies.slice(0,2);
  if (targetType === "enemy_all") return aliveEnemies;
  if (targetType === "ally_all") return aliveAllies;
  if (targetType === "self") return [unit];
  if (targetType === "lowest_ally") return aliveAllies.sort((a,b)=>(a.hp/a.maxHp)-(b.hp/b.maxHp)).slice(0,1);
  return aliveEnemies.slice(0,1);
}

function impact(unit) {
  const action = unit.action?.data;
  if (!action) return;

  if (action.type === "attack") {
    targetList(unit, action.target).forEach(t => {
      const dmg = damage(unit, t, action.power ?? 1);
      t.hp = Math.max(0, t.hp - dmg);
      unit.tp = Math.min(100, unit.tp + (action.tpGain ?? 0));
      t.tp = Math.min(100, t.tp + Math.min(18, Math.floor(dmg / t.maxHp * 70)));
      showDamage(t.uid, dmg, false, unit.side);
      showSlash(t.uid);
      flash(t.uid, "hit");
      if (t.hp <= 0) {
        t.alive = false;
        t.action = null;
        log(`${t.name} は倒れた。`);
        unit.tp = Math.min(100, unit.tp + 10);
      }
    });
  }

  if (action.type === "heal") {
    targetList(unit, action.target).forEach(t => {
      const amount = Math.floor(effective(unit,"atk") * (action.power ?? 1));
      t.hp = Math.min(t.maxHp, t.hp + amount);
      unit.tp = Math.min(100, unit.tp + (action.tpGain ?? 0));
      showDamage(t.uid, amount, true, unit.side);
    });
  }

  if (action.type === "buff") {
    targetList(unit, action.target).forEach(t => {
      t.buffs.push({ stat: action.stat, value: action.value ?? .1, end: battle.now + (action.buffDuration ?? 5000) });
      unit.tp = Math.min(100, unit.tp + (action.tpGain ?? 0));
      log(`${t.name} の ${action.stat.toUpperCase()} 上昇`);
    });
  }
}

function effective(unit, stat) {
  let v = unit[stat] ?? 0;
  unit.buffs = unit.buffs.filter(b => battle.now < b.end);
  unit.buffs.filter(b => b.stat === stat).forEach(b => v *= (1 + b.value));
  return Math.floor(v);
}

function damage(a, d, power) {
  const raw = Math.max(1, effective(a,"atk") * power - effective(d,"def") * .38);
  const crit = Math.random() < Math.min(.5, .05 + effective(a,"luck") / 3000);
  return Math.floor(raw * (.9 + Math.random() * .2) * (crit ? 1.8 : 1));
}

function checkEnd() {
  if (!battle.enemies.some(e => e.alive)) {
    log("勝利！ 報酬：💎50 🪙500");
    save.gems += 50; save.coins += 500; saveGame(); renderHeader();
    stopBattle();
    document.getElementById("battleStateText").textContent = "勝利";
    toast("勝利！");
  }
  if (!battle.allies.some(a => a.alive)) {
    log("敗北……");
    stopBattle();
    document.getElementById("battleStateText").textContent = "敗北";
  }
}

function renderAll() {
  renderField();
  renderUltimate();
  renderCards();
}

function getUnitPosition(unit, index, side) {
  const field = document.getElementById("battleField");
  const width = field ? field.clientWidth : 800;
  const height = field ? field.clientHeight : 420;

  const pos = unit.card.position || "middle";

  // 位置が重ならないように、前衛・中衛・後衛ごとに基準点を分ける
  // さらに同じ列のキャラは上下方向にもずらす。
  const allySlots = [
    { x: 0.34, y: 0.66 }, // 前衛1
    { x: 0.28, y: 0.55 }, // 中衛1
    { x: 0.19, y: 0.44 }, // 中衛/後衛1
    { x: 0.12, y: 0.32 }, // 後衛1
    { x: 0.22, y: 0.73 }  // 前衛/補助
  ];

  const enemySlots = [
    { x: 0.66, y: 0.66 }, // 前衛
    { x: 0.77, y: 0.50 }, // 中衛
    { x: 0.88, y: 0.35 }  // 後衛
  ];

  const preferredByPosition = {
    ally: {
      front: [{ x: 0.34, y: 0.66 }, { x: 0.25, y: 0.74 }],
      middle: [{ x: 0.25, y: 0.54 }, { x: 0.18, y: 0.63 }],
      back: [{ x: 0.13, y: 0.38 }, { x: 0.20, y: 0.28 }]
    },
    enemy: {
      front: [{ x: 0.66, y: 0.66 }],
      middle: [{ x: 0.77, y: 0.51 }],
      back: [{ x: 0.88, y: 0.36 }]
    }
  };

  const sameSideUnits = side === "ally" ? battle.allies : battle.enemies;
  const samePositionIndex = sameSideUnits
    .slice(0, index + 1)
    .filter(u => (u.card.position || "middle") === pos).length - 1;

  const table = preferredByPosition[side][pos] || [];
  const fallback = side === "ally" ? allySlots[index % allySlots.length] : enemySlots[index % enemySlots.length];
  const slot = table[samePositionIndex] || fallback;

  return {
    x: width * slot.x,
    y: height * slot.y
  };
}

function renderField() {
  const field = document.getElementById("battleField");
  const oldUnits = field.querySelectorAll(".unit");
  oldUnits.forEach(el => el.remove());

  battle.allies.forEach((u, i) => field.appendChild(createUnitEl(u, i, "ally")));
  battle.enemies.forEach((u, i) => field.appendChild(createUnitEl(u, i, "enemy")));
}

function createUnitEl(u, i, side) {
  const pos = getUnitPosition(u, i, side);
  const hp = Math.max(0, Math.floor(u.hp / u.maxHp * 100));
  const tp = Math.max(0, Math.floor(u.tp));

  const div = document.createElement("div");
  div.className = `unit ${side} ${u.alive ? "" : "dead"} ${u.state === "ultimate" ? "ultimate" : ""}`;
  if (u.state === "attack") div.classList.add("attack");
  div.id = u.uid;
  div.style.left = `${pos.x - 42}px`;
  div.style.top = `${pos.y - 60}px`;
  div.innerHTML = `
    <div class="unitName">${u.name}</div>
    <div class="sprite">${u.name.slice(0,1)}</div>
    <div class="shadow"></div>
    <div class="hpBar"><div class="hpFill" style="width:${hp}%"></div></div>
    <div class="tpBarMini"><div class="tpFillMini" style="width:${tp}%"></div></div>
  `;
  return div;
}

function renderUltimate() {
  const box = document.getElementById("ultimateIcons");
  box.innerHTML = "";
  battle.allies.forEach(u => {
    const btn = document.createElement("button");
    btn.className = `ultIcon ${u.tp >= 100 && u.alive ? "ready" : ""}`;
    btn.innerHTML = `
      <div class="iconFace">${u.name.slice(0,1)}</div>
      <div class="iconName">${u.name}</div>
      <div class="tpOuter"><div class="tpInner" style="width:${u.tp}%"></div></div>
    `;
    btn.onclick = () => activateUltimate(u.uid);
    box.appendChild(btn);
  });
}

function renderCards() {
  const box = document.getElementById("cardList");
  if (!box) return;
  box.innerHTML = "";
  cards.forEach(c => {
    const owned = save.ownedCards[c.id];
    const s = owned ? calcStats(c, owned) : null;
    const row = document.createElement("div");
    row.className = "cardRow";
    row.innerHTML = `<b>[${c.rarity}] ${c.name}</b><br><small>${c.position || "-"} / ${owned ? `Lv.${s.level} +${s.limitBreak}凸 / HP ${s.maxHp} ATK ${s.atk}` : "未所持"}</small>`;
    box.appendChild(row);
  });
}

function center(uid) {
  const unit = document.getElementById(uid);
  const field = document.getElementById("battleField");
  if (!unit || !field) return { x: field.clientWidth / 2, y: field.clientHeight / 2 };
  const ur = unit.getBoundingClientRect();
  const fr = field.getBoundingClientRect();
  return { x: ur.left - fr.left + ur.width / 2, y: ur.top - fr.top + ur.height / 2 };
}

function showDamage(uid, value, heal=false, sourceSide="ally") {
  const layer = document.getElementById("damageLayer");
  const p = center(uid);
  const el = document.createElement("div");

  // allyが敵に与えたダメージ = 与ダメ、enemyが味方に与えたダメージ = 被ダメ
  const target = allUnits().find(u => u.uid === uid);
  const isTargetEnemy = target?.side === "enemy";
  const isTargetAlly = target?.side === "ally";

  let label = "";
  let kind = "";
  if (heal) {
    label = "回復";
    kind = "heal";
  } else if (sourceSide === "ally" && isTargetEnemy) {
    label = "与ダメ";
    kind = "given";
  } else if (sourceSide === "enemy" && isTargetAlly) {
    label = "被ダメ";
    kind = "taken";
  }

  el.className = `dmg ${kind}`;
  el.style.left = `${p.x - 34}px`;
  el.style.top = `${p.y - 58}px`;
  el.innerHTML = `${label ? `<span>${label}</span>` : ""}<b>${heal ? "+" : ""}${value}</b>`;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 1050);
}

function showSlash(uid) {
  const layer = document.getElementById("damageLayer");
  const p = center(uid);
  const el = document.createElement("div");
  el.className = "slash";
  el.style.left = `${p.x - 52}px`;
  el.style.top = `${p.y - 12}px`;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 420);
}

function showCutin(unit, action) {
  const layer = document.getElementById("damageLayer");
  const el = document.createElement("div");
  el.className = "cutin";
  el.innerHTML = `<b>${unit.card.rarity ?? "ULTIMATE"}</b><h2>${action.name}</h2><p>${unit.name}</p>`;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function flash(uid, cls) {
  const el = document.getElementById(uid);
  if (!el) return;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), cls === "ultimate" ? 800 : 320);
}

function log(msg) {
  if (!battle) return;
  battle.logs.unshift(msg);
  battle.logs = battle.logs.slice(0, 50);
  const box = document.getElementById("battleLog");
  if (box) box.innerHTML = battle.logs.map(x => "・" + x).join("<br>");
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => t.classList.remove("show"), 2000);
}

window.addEventListener("resize", () => {
  if (document.getElementById("battleScreen").classList.contains("active")) renderAll();
});

init();
