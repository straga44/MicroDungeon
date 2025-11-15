export default class Enemy {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.hp = data.hp;
    this.damage = data.damage;
    this.armor = data.armor;
    this.resists = data.resists;
    this.evasion = data.evasion;
    this.behavior = data.behavior; // например: "melee", "ranged", "boss"
  }
}