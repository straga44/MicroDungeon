import Player from "./entities/player.js";
import Enemy from "./entities/enemy.js";

const player = new Player();

async function loadData(path) {
  const res = await fetch(path);
  return res.json();
}

async function initGame() {
  const enemiesData = await loadData("./src/data/enemies.json");
  const itemsData   = await loadData("./src/items/items.json");
  const spellsData  = await loadData("./src/spells/spells.json");
  const levelsData  = await loadData("./src/levels/levels.json");

  console.log("Player:", player);
  console.log("Enemies:", enemiesData);
  console.log("Items:", itemsData);
  console.log("Spells:", spellsData);
  console.log("Levels:", levelsData);
}

initGame();
