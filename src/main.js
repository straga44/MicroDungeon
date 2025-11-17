import Player from "./entities/player.js";
import Enemy from "./entities/enemy.js";

const player = new Player();
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let heroImg = new Image();
let enemyImg = new Image();
heroImg.src = "./assets/char/hero.png";
enemyImg.src = "./assets/char/goblin.png";


// Загружаем данные JSON
async function loadData(path) {
  const res = await fetch(path);
  return res.json();
}

// Обновляем HUD в HTML. Как определить что он лезет в html? 
document.getElementById("player-HP").textContent = `HP: ${player.HP}`;
document.getElementById("player-MP").textContent = `MP: ${player.MP}`;

let firstEnemy = null;

async function initGame() {
  const enemiesData = await loadData("./src/data/enemies.json");

  // Создаём первого врага из JSON
  firstEnemy = new Enemy(enemiesData[0]);

  // Позиции для отрисовки
  player.x = 150; player.y = 300;
  firstEnemy.x = 550; firstEnemy.y = 300;

  render();
}

// 🎨 Отрисовка полоски здоровья
function drawBar(x, y, width, height, value, max, color) {
 
  ctx.fillRect(x, y, width, height);

  const fill = (value / max) * width;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, fill, height);

  ctx.strokeStyle = "black";
  ctx.strokeRect(x, y, width, height);
}

// 🎮 Основной рендер
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // ===== Игрок =====
  // Рисуем героя 
  ctx.drawImage(heroImg, player.x, player.y, 64, 64);

  // Полоска HP игрока
  drawBar(player.x, player.y - 35, 100, 10, player.HP, player.maxHP, "green");
  // Полоска MP игрока
  drawBar(player.x, player.y - 55, 100, 8, player.MP, player.maxMP, "red");

  // ===== Враг =====
  if (firstEnemy) {

    ctx.drawImage(enemyImg, firstEnemy.x, firstEnemy.y, 64, 64);
    
    drawBar(firstEnemy.x, firstEnemy.y - 20, 80, 10, 
      firstEnemy.HP, firstEnemy.maxHP, "yellow");
  }
}

initGame();
