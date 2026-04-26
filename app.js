const EMBEDDED_CARDS = [
  {
    "id": "yuki_lr_001",
    "name": "水上 由岐",
    "nameEn": "Minakami Yuki",
    "series": "素晴らしき日々",
    "rarity": "LR",
    "rarityLabel": "LEGEND RARE",
    "attribute": "記憶",
    "position": "front",
    "cardImage": "",
    "iconImage": "",
    "battleImage": "",
    "baseHp": 5200,
    "baseAtk": 980,
    "baseDef": 420,
    "baseSpd": 720,
    "baseLuck": 430,
    "growHp": 280,
    "growAtk": 64,
    "growDef": 28,
    "growSpd": 34,
    "growLuck": 20,
    "dupeBonusRate": 0.035,
    "normalAttack": {
      "name": "通常攻撃",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.0,
      "tpGain": 12,
      "duration": 950,
      "motion": "punch"
    },
    "skill1": {
      "name": "踏み込み掌打",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.65,
      "tpGain": 18,
      "duration": 1350,
      "motion": "dashPunch",
      "effects": [
        {
          "type": "stun",
          "chance": 0.25,
          "duration": 1000
        }
      ]
    },
    "skill2": {
      "name": "旋風蹴り",
      "type": "attack",
      "target": "enemy_area",
      "power": 1.25,
      "tpGain": 20,
      "duration": 1550,
      "motion": "kick",
      "effects": [
        {
          "type": "def_down",
          "value": 0.15,
          "duration": 6000
        }
      ]
    },
    "ultimate": {
      "name": "終ノ空・崩拳連撃",
      "type": "attack",
      "target": "enemy_all",
      "power": 2.8,
      "tpCost": 100,
      "duration": 2600,
      "motion": "ultimate",
      "effects": [
        {
          "type": "atk_up",
          "target": "self",
          "value": 0.2,
          "duration": 8000
        }
      ]
    },
    "actionLoop": [
      "normalAttack",
      "skill1",
      "normalAttack",
      "skill2",
      "normalAttack"
    ]
  },
  {
    "id": "kamome_ur_001",
    "name": "久島 鴎",
    "nameEn": "Kushima Kamome",
    "series": "Summer Pockets",
    "rarity": "UR",
    "rarityLabel": "ULTIMATE RARE",
    "attribute": "空",
    "position": "middle",
    "cardImage": "",
    "iconImage": "",
    "battleImage": "",
    "baseHp": 4300,
    "baseAtk": 820,
    "baseDef": 380,
    "baseSpd": 760,
    "baseLuck": 620,
    "growHp": 230,
    "growAtk": 52,
    "growDef": 24,
    "growSpd": 38,
    "growLuck": 30,
    "dupeBonusRate": 0.03,
    "normalAttack": {
      "name": "通常攻撃",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.0,
      "tpGain": 12,
      "duration": 950,
      "motion": "shoot"
    },
    "skill1": {
      "name": "リーフストーン",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.45,
      "tpGain": 18,
      "duration": 1300,
      "motion": "cast"
    },
    "skill2": {
      "name": "夏風の加護",
      "type": "buff",
      "target": "ally_all",
      "stat": "spd",
      "value": 0.18,
      "duration": 1350,
      "tpGain": 20,
      "motion": "buff"
    },
    "ultimate": {
      "name": "静寂の羽ばたき・極",
      "type": "attack",
      "target": "enemy_all",
      "power": 2.35,
      "tpCost": 100,
      "duration": 2500,
      "motion": "ultimate"
    },
    "actionLoop": [
      "normalAttack",
      "skill1",
      "normalAttack",
      "skill2",
      "normalAttack"
    ]
  },
  {
    "id": "front_r_001",
    "name": "前衛アタッカー",
    "nameEn": "Front Attacker",
    "series": "Original",
    "rarity": "SR",
    "rarityLabel": "SUPER RARE",
    "attribute": "火",
    "position": "front",
    "cardImage": "",
    "iconImage": "",
    "battleImage": "",
    "baseHp": 3900,
    "baseAtk": 720,
    "baseDef": 360,
    "baseSpd": 640,
    "baseLuck": 300,
    "growHp": 200,
    "growAtk": 42,
    "growDef": 20,
    "growSpd": 26,
    "growLuck": 14,
    "dupeBonusRate": 0.025,
    "normalAttack": {
      "name": "通常攻撃",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.0,
      "tpGain": 12,
      "duration": 950,
      "motion": "punch"
    },
    "skill1": {
      "name": "強打",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.35,
      "tpGain": 16,
      "duration": 1250,
      "motion": "dashPunch"
    },
    "skill2": {
      "name": "気合",
      "type": "buff",
      "target": "self",
      "stat": "atk",
      "value": 0.18,
      "duration": 1200,
      "tpGain": 18,
      "motion": "buff"
    },
    "ultimate": {
      "name": "渾身連打",
      "type": "attack",
      "target": "front_enemy",
      "power": 3.1,
      "tpCost": 100,
      "duration": 2400,
      "motion": "ultimate"
    },
    "actionLoop": [
      "normalAttack",
      "skill1",
      "normalAttack",
      "skill2",
      "normalAttack"
    ]
  },
  {
    "id": "healer_sr_001",
    "name": "支援ヒーラー",
    "nameEn": "Support Healer",
    "series": "Original",
    "rarity": "SR",
    "rarityLabel": "SUPER RARE",
    "attribute": "水",
    "position": "back",
    "cardImage": "",
    "iconImage": "",
    "battleImage": "",
    "baseHp": 3400,
    "baseAtk": 520,
    "baseDef": 300,
    "baseSpd": 600,
    "baseLuck": 410,
    "growHp": 170,
    "growAtk": 28,
    "growDef": 18,
    "growSpd": 24,
    "growLuck": 20,
    "dupeBonusRate": 0.025,
    "normalAttack": {
      "name": "通常攻撃",
      "type": "attack",
      "target": "front_enemy",
      "power": 0.85,
      "tpGain": 12,
      "duration": 950,
      "motion": "shoot"
    },
    "skill1": {
      "name": "応急手当",
      "type": "heal",
      "target": "lowest_ally",
      "power": 1.3,
      "tpGain": 18,
      "duration": 1250,
      "motion": "heal"
    },
    "skill2": {
      "name": "防御支援",
      "type": "buff",
      "target": "ally_all",
      "stat": "def",
      "value": 0.16,
      "duration": 1300,
      "tpGain": 18,
      "motion": "buff"
    },
    "ultimate": {
      "name": "全体回復",
      "type": "heal",
      "target": "ally_all",
      "power": 1.8,
      "tpCost": 100,
      "duration": 2400,
      "motion": "ultimate"
    },
    "actionLoop": [
      "normalAttack",
      "skill1",
      "normalAttack",
      "skill2",
      "normalAttack"
    ]
  },
  {
    "id": "mage_sr_001",
    "name": "後衛メイジ",
    "nameEn": "Back Mage",
    "series": "Original",
    "rarity": "SR",
    "rarityLabel": "SUPER RARE",
    "attribute": "星",
    "position": "back",
    "cardImage": "",
    "iconImage": "",
    "battleImage": "",
    "baseHp": 3100,
    "baseAtk": 840,
    "baseDef": 260,
    "baseSpd": 580,
    "baseLuck": 520,
    "growHp": 150,
    "growAtk": 50,
    "growDef": 14,
    "growSpd": 22,
    "growLuck": 24,
    "dupeBonusRate": 0.025,
    "normalAttack": {
      "name": "通常攻撃",
      "type": "attack",
      "target": "front_enemy",
      "power": 0.95,
      "tpGain": 12,
      "duration": 950,
      "motion": "shoot"
    },
    "skill1": {
      "name": "星弾",
      "type": "attack",
      "target": "front_enemy",
      "power": 1.55,
      "tpGain": 18,
      "duration": 1300,
      "motion": "cast"
    },
    "skill2": {
      "name": "小爆発",
      "type": "attack",
      "target": "enemy_area",
      "power": 1.15,
      "tpGain": 20,
      "duration": 1500,
      "motion": "cast"
    },
    "ultimate": {
      "name": "星降る夜",
      "type": "attack",
      "target": "enemy_all",
      "power": 2.45,
      "tpCost": 100,
      "duration": 2600,
      "motion": "ultimate"
    },
    "actionLoop": [
      "normalAttack",
      "skill1",
      "normalAttack",
      "skill2",
      "normalAttack"
    ]
  }
];

const SAVE_KEY = "summer_card_battle_save_v1";
const TICK_MS = 100;
const FALLBACK_IMAGE = "images/card_back.svg";

let cards = [];
let save = null;
let battle = null;
let battleTimer = null;

function defaultSave() {
  return {
    playerLevel: 1,
    stamina: 100,
    gems: 3000,
    coins: 10000,
    deck: ["yuki_lr_001", "kamome_ur_001", "front_r_001", "healer_sr_001", "mage_sr_001"],
    ownedCards: {
      "yuki_lr_001": { count: 1, level: 1, exp: 0, limitBreak: 0, favorite: true },
      "kamome_ur_001": { count: 1, level: 1, exp: 0, limitBreak: 0, favorite: false },
      "front_r_001": { count: 1, level: 1, exp: 0, limitBreak: 0, favorite: false },
      "healer_sr_001": { count: 1, level: 1, exp: 0, limitBreak: 0, favorite: false },
      "mage_sr_001": { count: 1, level: 1, exp: 0, limitBreak: 0, favorite: false }
    }
  };
}

async function init() {
  try {
    const res = await fetch("cards.json", { cache: "no-store" });
    if (!res.ok) throw new Error("cards.json load failed: " + res.status);
    cards = await res.json();
  } catch (error) {
    console.warn("cards.jsonを読み込めなかったため、内蔵カードデータで起動します。", error);
    cards = EMBEDDED_CARDS;
  }

  loadSave();
  bindEvents();
  renderHeader();
  renderCards();
  initBattle();
  navigate("homeScreen");
  logBattle("準備完了。「開始」を押すと戦闘が始まります。");
}

function loadSave() {
  const raw = localStorage.getItem(SAVE_KEY);
  save = raw ? JSON.parse(raw) : defaultSave();

  // 古いセーブやカード追加時の補正
  save.deck ??= defaultSave().deck;
  save.ownedCards ??= defaultSave().ownedCards;
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(save));
}

function bindEvents() {
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => navigate(btn.dataset.nav));
  });

  document.getElementById("startBattleBtn").addEventListener("click", startBattle);
  document.getElementById("resetBattleBtn").addEventListener("click", () => {
    stopBattle();
    initBattle();
    renderBattle();
    logBattle("バトルをリセットしました。");
  });
}

function navigate(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".bottomNav button").forEach(b => {
    b.classList.toggle("active", b.dataset.nav === id);
  });

  if (id === "battleScreen") renderBattle();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderHeader() {
  document.getElementById("playerLevel").textContent = save.playerLevel;
  document.getElementById("stamina").textContent = save.stamina;
  document.getElementById("gems").textContent = save.gems;
  document.getElementById("coins").textContent = save.coins;
}

function renderCards() {
  const list = document.getElementById("cardList");
  list.innerHTML = "";
  cards.forEach(card => {
    const owned = save.ownedCards[card.id];
    const stats = owned ? calcStats(card, owned) : null;
    const row = document.createElement("div");
    row.className = "cardRow";
    row.innerHTML = `
      <div class="cardIcon">${imageOrInitial(card, "iconImage")}</div>
      <div>
        <h3>[${card.rarity}] ${card.name}</h3>
        <p>${card.series} / ${card.attribute} / ${owned ? `Lv.${owned.level} +${stats.limitBreak}凸 ATK ${stats.atk}` : "未所持"}</p>
      </div>
    `;
    list.appendChild(row);
  });
}

function getCard(id) {
  return cards.find(c => c.id === id);
}

function imageOrInitial(card, key) {
  const url = card[key] || card.iconImage || card.cardImage || "";
  if (url) return `<img src="${url}" alt="${card.name}" onerror="this.remove()">`;
  return `<span>${card.name.slice(0, 1)}</span>`;
}

function calcLimitBreak(count) {
  return Math.max(0, (count ?? 1) - 1);
}

function calcStats(card, owned) {
  const level = owned.level ?? 1;
  const limitBreak = owned.limitBreak ?? calcLimitBreak(owned.count ?? 1);
  const rate = card.dupeBonusRate ?? 0.03;
  const multiplier = 1 + rate * Math.sqrt(limitBreak);

  return {
    level,
    limitBreak,
    dupeBonusPercent: (multiplier - 1) * 100,
    maxHp: Math.floor((card.baseHp + card.growHp * (level - 1)) * multiplier),
    atk: Math.floor((card.baseAtk + card.growAtk * (level - 1)) * multiplier),
    def: Math.floor((card.baseDef + card.growDef * (level - 1)) * multiplier),
    spd: Math.floor((card.baseSpd + card.growSpd * (level - 1)) * multiplier),
    luck: Math.floor((card.baseLuck + card.growLuck * (level - 1)) * multiplier)
  };
}

function makeAllyUnit(cardId, index) {
  const card = getCard(cardId);
  const owned = save.ownedCards[cardId] ?? { count: 1, level: 1, limitBreak: 0 };
  const stats = calcStats(card, owned);

  return {
    uid: `ally_${index}`,
    side: "ally",
    card,
    name: card.name,
    hp: stats.maxHp,
    maxHp: stats.maxHp,
    atk: stats.atk,
    def: stats.def,
    spd: stats.spd,
    luck: stats.luck,
    tp: 0,
    loopIndex: 0,
    currentAction: null,
    actionEndAt: 0,
    impactAt: 0,
    didImpact: false,
    state: "idle",
    statusEffects: [],
    buffs: [],
    isAlive: true
  };
}

function makeEnemyUnit(index, wave = 1) {
  const baseHp = 2600 + wave * 650 + index * 420;
  const baseAtk = 380 + wave * 90 + index * 40;
  const names = ["シャドウA", "シャドウB", "シャドウC"];
  return {
    uid: `enemy_${index}`,
    side: "enemy",
    name: names[index] ?? `敵${index + 1}`,
    hp: baseHp,
    maxHp: baseHp,
    atk: baseAtk,
    def: 220 + wave * 45,
    spd: 460 + index * 40,
    luck: 150,
    tp: 0,
    loopIndex: 0,
    currentAction: null,
    actionEndAt: 0,
    impactAt: 0,
    didImpact: false,
    state: "idle",
    statusEffects: [],
    buffs: [],
    isAlive: true,
    card: {
      name: names[index] ?? `敵${index + 1}`,
      iconImage: "",
      normalAttack: {
        name: "攻撃",
        type: "attack",
        target: "front_enemy",
        power: 0.82,
        tpGain: 0,
        duration: 1100,
        motion: "punch"
      },
      skill1: {
        name: "強攻撃",
        type: "attack",
        target: "front_enemy",
        power: 1.1,
        tpGain: 0,
        duration: 1350,
        motion: "dashPunch"
      },
      skill2: {
        name: "威嚇",
        type: "buff",
        target: "self",
        stat: "atk",
        value: 0.1,
        duration: 5000,
        tpGain: 0,
        duration: 1200,
        motion: "buff"
      },
      actionLoop: ["normalAttack", "normalAttack", "skill1", "normalAttack", "skill2"]
    }
  };
}

function initBattle() {
  battle = {
    running: false,
    now: 0,
    wave: 1,
    maxWave: 1,
    allies: save.deck.map(makeAllyUnit),
    enemies: [makeEnemyUnit(0), makeEnemyUnit(1), makeEnemyUnit(2)],
    logs: []
  };
}

function startBattle() {
  if (!battle) {
    initBattle();
  }
  if (battle.running) {
    toast("すでに戦闘中です");
    return;
  }

  battle.running = true;
  battle.now = 0;
  document.getElementById("battleStateText").textContent = "戦闘中";
  logBattle("戦闘開始！");
  renderBattle();

  if (battleTimer) clearInterval(battleTimer);
  battleTimer = setInterval(tickBattle, TICK_MS);
}

function stopBattle() {
  battle.running = false;
  if (battleTimer) clearInterval(battleTimer);
  battleTimer = null;
  document.getElementById("battleStateText").textContent = "停止中";
}

function tickBattle() {
  if (!battle.running) return;
  battle.now += TICK_MS;

  const units = [...battle.allies, ...battle.enemies].filter(u => u.isAlive);
  units.forEach(unit => updateStatuses(unit));

  // 行動完了処理
  units.forEach(unit => {
    if (unit.currentAction && battle.now >= unit.impactAt && !unit.didImpact) {
      unit.didImpact = true;
      resolveActionImpact(unit);
    }

    if (unit.currentAction && battle.now >= unit.actionEndAt) {
      finishAction(unit);
    }
  });

  // 次行動開始
  const actingUnits = [...battle.allies, ...battle.enemies].filter(u => u.isAlive);
  actingUnits
    .filter(u => !u.currentAction && u.state !== "stunned")
    .sort((a, b) => b.spd - a.spd)
    .forEach(unit => startNextLoopAction(unit));

  checkBattleEnd();
  renderBattle();
}

function updateStatuses(unit) {
  unit.statusEffects = unit.statusEffects.filter(s => battle.now < s.endAt);
  unit.buffs = unit.buffs.filter(b => battle.now < b.endAt);
  if (unit.statusEffects.some(s => s.type === "stun")) {
    unit.state = "stunned";
  } else if (!unit.currentAction && unit.state === "stunned") {
    unit.state = "idle";
  }
}

function getEffectiveStat(unit, stat) {
  let value = unit[stat] ?? 0;
  const buffs = unit.buffs.filter(b => b.stat === stat);
  buffs.forEach(b => value *= (1 + b.value));
  return Math.floor(value);
}

function startNextLoopAction(unit) {
  if (!unit.isAlive) return;
  const loop = unit.card.actionLoop;
  const actionKey = loop[unit.loopIndex];

  // 行動開始時点で次へ進める。これでUB割り込み後に次の行動から再開できる。
  unit.loopIndex = (unit.loopIndex + 1) % loop.length;

  const action = unit.card[actionKey];
  startAction(unit, actionKey, action, false);
}

function startAction(unit, actionKey, action, isUltimate) {
  if (!action) return;
  unit.currentAction = {
    key: actionKey,
    data: action,
    isUltimate
  };
  unit.didImpact = false;
  unit.state = isUltimate ? "ultimate" : (action.motion ?? "attack");
  unit.actionEndAt = battle.now + (action.duration ?? 1000);
  unit.impactAt = battle.now + Math.floor((action.duration ?? 1000) * 0.55);

  flashUnit(unit.uid, isUltimate ? "ultimate" : "attack");

  if (isUltimate) {
    showCutIn(unit, action);
    logBattle(`${unit.name} の必殺技！ ${action.name}`);
  } else {
    logBattle(`${unit.name}：${action.name}`);
  }
}

function finishAction(unit) {
  const action = unit.currentAction;
  unit.currentAction = null;
  unit.state = "idle";
  unit.actionEndAt = 0;
  unit.impactAt = 0;
  unit.didImpact = false;

  if (action?.isUltimate) {
    setTimeout(() => {
      if (battle?.running && unit.isAlive && !unit.currentAction) {
        startNextLoopAction(unit);
      }
    }, 300);
  }
}

function cancelCurrentAction(unit) {
  unit.currentAction = null;
  unit.state = "idle";
  unit.actionEndAt = 0;
  unit.impactAt = 0;
  unit.didImpact = false;
}

function activateUltimate(unitUid) {
  const unit = battle.allies.find(u => u.uid === unitUid);
  if (!unit || !unit.isAlive) return;
  if (unit.tp < 100) {
    toast("TPがまだ足りません");
    return;
  }
  if (unit.state === "ultimate" || unit.state === "stunned") return;

  const ultimate = unit.card.ultimate;
  if (!ultimate) return;

  // 行動中のループ行動をキャンセル。loopIndexは行動開始時に進んでいるので、UB後は次の行動から再開。
  cancelCurrentAction(unit);
  unit.tp = Math.max(0, unit.tp - (ultimate.tpCost ?? 100));
  startAction(unit, "ultimate", ultimate, true);
  renderBattle();
}

function resolveActionImpact(unit) {
  const action = unit.currentAction?.data;
  if (!action || !unit.isAlive) return;

  if (action.type === "attack") {
    const targets = selectTargets(unit, action.target);
    targets.forEach(target => {
      if (!target?.isAlive) return;
      const damage = calcDamage(unit, target, action.power ?? 1);
      target.hp = Math.max(0, target.hp - damage);
      gainTp(unit, action.tpGain ?? 0);
      gainTp(target, Math.min(18, Math.floor(damage / Math.max(1, target.maxHp) * 70)));

      showDamage(target.uid, damage, false);
      showSlash(target.uid);
      flashUnit(target.uid, "hit");

      if (target.hp <= 0) {
        target.isAlive = false;
        target.state = "dead";
        target.currentAction = null;
        logBattle(`${target.name} は倒れた。`);
        gainTp(unit, 10);
      }

      applyEffects(unit, target, action.effects ?? []);
    });
  }

  if (action.type === "heal") {
    const targets = selectTargets(unit, action.target);
    targets.forEach(target => {
      if (!target?.isAlive) return;
      const amount = Math.floor(getEffectiveStat(unit, "atk") * (action.power ?? 1));
      target.hp = Math.min(target.maxHp, target.hp + amount);
      gainTp(unit, action.tpGain ?? 0);
      showDamage(target.uid, amount, true);
    });
  }

  if (action.type === "buff") {
    const targets = selectTargets(unit, action.target);
    targets.forEach(target => {
      if (!target?.isAlive) return;
      target.buffs.push({
        type: "buff",
        stat: action.stat,
        value: action.value ?? 0.1,
        endAt: battle.now + (action.duration ?? 5000)
      });
      gainTp(unit, action.tpGain ?? 0);
      logBattle(`${target.name} の ${action.stat.toUpperCase()} が上昇！`);
    });
  }
}

function selectTargets(unit, targetType) {
  const enemies = unit.side === "ally" ? battle.enemies : battle.allies;
  const allies = unit.side === "ally" ? battle.allies : battle.enemies;

  const aliveEnemies = enemies.filter(u => u.isAlive);
  const aliveAllies = allies.filter(u => u.isAlive);

  if (targetType === "front_enemy") return aliveEnemies.slice(0, 1);
  if (targetType === "enemy_all") return aliveEnemies;
  if (targetType === "enemy_area") return aliveEnemies.slice(0, 2);
  if (targetType === "ally_all") return aliveAllies;
  if (targetType === "self") return [unit];
  if (targetType === "lowest_ally") {
    return aliveAllies.sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp)).slice(0, 1);
  }
  return aliveEnemies.slice(0, 1);
}

function calcDamage(attacker, defender, power) {
  const atk = getEffectiveStat(attacker, "atk");
  const def = getEffectiveStat(defender, "def");
  const critRate = Math.min(0.5, 0.05 + (getEffectiveStat(attacker, "luck") / 3000));
  const crit = Math.random() < critRate;
  const raw = Math.max(1, atk * power - def * 0.38);
  const variance = 0.9 + Math.random() * 0.2;
  const damage = Math.floor(raw * variance * (crit ? 1.8 : 1));
  return Math.max(1, damage);
}

function gainTp(unit, amount) {
  if (!unit.isAlive) return;
  unit.tp = Math.min(100, unit.tp + amount);
}

function applyEffects(source, target, effects) {
  effects.forEach(effect => {
    if (effect.type === "stun") {
      const chance = effect.chance ?? 0;
      if (Math.random() < chance) {
        target.statusEffects.push({
          type: "stun",
          endAt: battle.now + (effect.duration ?? 1000)
        });
        logBattle(`${target.name} はスタンした！`);
      }
    }

    if (effect.type === "def_down") {
      target.buffs.push({
        type: "buff",
        stat: "def",
        value: -(effect.value ?? 0.1),
        endAt: battle.now + (effect.duration ?? 5000)
      });
      logBattle(`${target.name} のDEFが低下！`);
    }

    if (effect.type === "atk_up" && effect.target === "self") {
      source.buffs.push({
        type: "buff",
        stat: "atk",
        value: effect.value ?? 0.1,
        endAt: battle.now + (effect.duration ?? 5000)
      });
      logBattle(`${source.name} のATKが上昇！`);
    }
  });
}

function checkBattleEnd() {
  if (!battle.enemies.some(e => e.isAlive)) {
    logBattle("勝利！ 報酬：💎50 🪙500");
    save.gems += 50;
    save.coins += 500;
    saveGame();
    renderHeader();
    stopBattle();
    document.getElementById("battleStateText").textContent = "勝利";
    toast("クエストクリア！");
  }

  if (!battle.allies.some(a => a.isAlive)) {
    logBattle("敗北……");
    stopBattle();
    document.getElementById("battleStateText").textContent = "敗北";
  }
}

function renderBattle() {
  if (!battle) return;
  renderUnitLine("allyLine", battle.allies);
  renderUnitLine("enemyLine", battle.enemies);
  renderUltimateIcons();
}

function renderUnitLine(id, units) {
  const line = document.getElementById(id);
  const oldFocus = document.activeElement;
  line.innerHTML = "";

  units.forEach(unit => {
    const div = document.createElement("div");
    div.className = `unit ${unit.side} ${unit.isAlive ? "" : "dead"} ${unit.state === "ultimate" ? "ultimate" : ""}`;
    div.id = unit.uid;

    const hpPct = Math.max(0, Math.floor(unit.hp / unit.maxHp * 100));
    const tpPct = Math.max(0, Math.floor(unit.tp));
    div.innerHTML = `
      <div class="namePlate">${unit.name}</div>
      <div class="unitSprite">${unit.card ? imageOrInitial(unit.card, "battleImage") : unit.name.slice(0, 1)}</div>
      <div class="shadow"></div>
      <div class="hpBar"><div class="hpFill" style="width:${hpPct}%"></div></div>
      <div class="tpMiniBar"><div class="tpMiniFill" style="width:${tpPct}%"></div></div>
    `;
    line.appendChild(div);
  });
}

function renderUltimateIcons() {
  const box = document.getElementById("ultimateIcons");
  box.innerHTML = "";
  battle.allies.forEach(unit => {
    const div = document.createElement("button");
    div.className = `ultimateIcon ${unit.tp >= 100 && unit.isAlive ? "ready" : ""}`;
    div.disabled = !unit.isAlive;
    div.innerHTML = `
      <div class="iconFace">${imageOrInitial(unit.card, "iconImage")}</div>
      <div class="iconName">${unit.name}</div>
      <div class="tpBar"><div class="tpFill" style="width:${unit.tp}%"></div></div>
    `;
    div.addEventListener("click", () => activateUltimate(unit.uid));
    box.appendChild(div);
  });
}

function flashUnit(uid, className) {
  const el = document.getElementById(uid);
  if (!el) return;
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), className === "ultimate" ? 800 : 320);
}

function getUnitCenter(uid) {
  const unit = document.getElementById(uid);
  const field = document.getElementById("battleField");
  if (!unit || !field) return { x: 250, y: 250 };
  const ur = unit.getBoundingClientRect();
  const fr = field.getBoundingClientRect();
  return {
    x: ur.left - fr.left + ur.width / 2,
    y: ur.top - fr.top + ur.height / 2
  };
}

function showDamage(uid, amount, heal) {
  const layer = document.getElementById("effectLayer");
  const pos = getUnitCenter(uid);
  const el = document.createElement("div");
  el.className = `damageText ${heal ? "healText" : ""}`;
  el.style.left = `${pos.x - 24}px`;
  el.style.top = `${pos.y - 52}px`;
  el.textContent = heal ? `+${amount}` : amount;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 850);
}

function showSlash(uid) {
  const layer = document.getElementById("effectLayer");
  const pos = getUnitCenter(uid);
  const el = document.createElement("div");
  el.className = "slash";
  el.style.left = `${pos.x - 54}px`;
  el.style.top = `${pos.y - 18}px`;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 420);
}

function showCutIn(unit, action) {
  const layer = document.getElementById("effectLayer");
  const el = document.createElement("div");
  el.className = "cutIn";
  el.innerHTML = `
    <div class="rarity">${unit.card.rarityLabel ?? unit.card.rarity ?? "ULTIMATE"}</div>
    <h2>${action.name}</h2>
    <p>${unit.name}</p>
  `;
  layer.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

function logBattle(message) {
  if (!battle) return;
  battle.logs.unshift(message);
  battle.logs = battle.logs.slice(0, 40);
  const log = document.getElementById("battleLog");
  if (log) log.innerHTML = battle.logs.map(m => `・${m}`).join("<br>");
}

function toast(message) {
  const el = document.getElementById("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove("show"), 2100);
}

init();
