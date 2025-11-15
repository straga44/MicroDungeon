export default class Player {
    constructor(){
        this.name = "Hero";
        this.x = 100;
        this.y = 100;
        this.hp = 100;
        this.maxHP = 100;
        this.regeneration = 1;
        this.lifesteal = 0;
        this.healing = 0;
        this.mana = 50;
        this.maxMana = 50;
        this.manaReg = 1;
        this.str = 1;
        this.damage = 10;
        this.armor = 5;
        this.critical_damage = 200;
        this.thorns = 0;
        this.piercing = 0;
        this.dex = 1;
        this.critical_chance = 10;
        this.dodge = 5;
        this.extra_turn = 1;
        this.int = 1;
        this.abilityPower = 1;
        this.talents = []; // список id заклинаний
        this.abilites = []; // список id заклинаний
        this.inventory = [];   // список id предметов
    }
}