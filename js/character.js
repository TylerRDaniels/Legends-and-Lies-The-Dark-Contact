export class Player {
    constructor (health, mana, xp, attackBase, defence, img, alt, canInteract) {
        this.health = health;
        this.mana = mana;
        this.xp = xp;
        this.attackBase = attackBase;
        this.defence = defence;
        this.img = img;
        this.alt = alt;
        this.canInteract = canInteract; 
    }
};

export class NplayerChar {
    constructor (health, mana, xpgiven, attackBase, defence, img, alt, canInteract) {
        this.health = health;
        this.mana = mana;
        this.xpgiven = xpgiven;
        this.attackBase = attackBase;
        this.defence = defence;
        this.img = img;
        this.alt = alt;
        this.canInteract = canInteract; 
    }
}
