export default class Enemy {
  constructor(data) {
    this.x = 400;
    this.y = 100;
    this.w = 32;
    this.h = 32;
    this.id = data.id;
    this.name = data.name;
    this.HP = data.HP;
    this.maxHP = data.maxHP
    this.damage = data.damage;
    this.armor = data.armor;
    this.resists = data.resists;
    this.evasion = data.evasion;
    this.behavior = data.behavior; // например: "melee", "ranged", "boss"
  }
    draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}