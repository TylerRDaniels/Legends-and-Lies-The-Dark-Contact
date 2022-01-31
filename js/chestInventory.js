export class ChestInv {
    constructor(img, alt, item1, item2) {
        this.img = img;
        this.alt = alt;
        this.item1 = item1;
        this.item2 = item2;

    }
};

export class BossChest {
    constructor(img, alt, item1, item2, bossKey) {
        this.img = img;
        this.alt = alt;
        this.item1 = item1;
        this.item2 = item2;
        this.bossKey = bossKey;
    }
}
