export class Sword {
    constructor(img, alt, itemText, attPlus, deffPlus, xpGain,) {
        this.img = img;
        this.alt = alt;
        this.itemText = itemText;
        this.attPlus = attPlus;
        this.deffPlus = deffPlus;
        this.xpGain = xpGain;

    }
}

export class Pot {
    constructor(img, alt, hRestore, mRestore, xpGain, itmDes) {
        this.img = img;
        this.alt = alt;
        this.hRestore = hRestore;
        this.mRestore = mRestore;
        this.xpGain = xpGain;
        this.itmDes = itmDes;
    }
}


export class Key {
    constructor(img, alt, uLockBossDoor, uLockChest, itmDes) {
        this.img = img;
        this.alt = alt;
        this.uLockBossDoor = uLockBossDoor;
        this.uLockChest = uLockChest;
        this.itmDes = itmDes;
    }
}

