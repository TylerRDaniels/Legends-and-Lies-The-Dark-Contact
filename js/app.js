/**
 * today get chests and inventory X
 * friday get chest and inventory X
 * monday get battle X
 * tuseday get enemy spawnins X
 * wenessday get story progression X
 * thursday work on bugs else ware!!!
 * friday work on buggs 
 * final week button up final additions and write note cards for final checkin
 */


//dice imporing
import { D10, D20 } from './dice.js'

//character importing
import { Player, NplayerChar } from './character.js'

//item importing
import { Sword, Pot, Key } from './items.js'

import { environ } from './environments.js'


// dice being defined
/*let rollValue;*/
let pd10 = new D10(10, ``, ``);
let pd20 = new D20(20, ``, ``);
let ed10 = new D10(10, ``, ``);
let ed20 = new D20(20, ``, ``);


// defining items 
//let mPot = new Pot(``, ` Mana Potion`, 0, 20, 10, ``);
let hPot = new Pot(``, ` Health Potion`, 20, 0, 10, `` );
//let swordBroken = new Sword(``, `Broken Sword`, ``, 5, 5, 10);
let swordBetter = new Sword(``, ` Knights Sword`, ``, 10, 7, 15);
let bKey = new Key(``, ` Boss Key`, true, false, ``)
//let cKey = new Key (``, `Chest Key`, false, true, ``)

// item arr for chest randomizer
// this functionality will be added later
let itemArr = [bKey, hPot, swordBetter];


//Character deffinition
let pm1 = new Player(100, 50, 0, 5, 5, ``, ``, true);
// let pm2 = new Player(100, 50, 0, 5, 5, ``, ``, true);
// let pf1 = new Player(100, 50, 0, 5, 5, ``, ``, true);
// let pf2 = new Player(100, 50, 0, 5, 5, ``, ``, true);

//Non player Chararcter
let zombie = new NplayerChar(50, 0, 10, 5, 5, ``, `zombie`, false);
let zombieKing = new NplayerChar(10, 0, 15, 5, 10, ``, `Zombie King`, false)

// inventory deffinition
let playerInventory = [hPot];

//environment deffinition
let beginning = new environ(``, ``, ` beginning`, true, 0, false, false, true);
let entrance = new environ(``, ``, ` entrance`, true, 0, true, false, true);
let hallway = new environ(``, `hallway`, ``, true, 0, true, false, false);
let hallwayNoE = new environ(``,`hallwayNoE`,``, true, 0, false, false, true);
let room = new environ(``, `room`, ``, true, 0, true, false, false);
let roomNoE = new environ(``, `roomNoE`,``, true, 0, false, false, true)
let bossDoor = new environ(``, `bossDoor`, ` bossDoor`, false, 0, true, true, false);
let bossRoom = new environ(``, ``, ` bossRoom`, false, 0, true, false, false);

// *end defining section*

// messages that will apear when exploring

let beginningMsg = `Our story begins with you, oh chosen one of the darkness. This is no mear, tail not some quaint legend. No this is the Legend of the Dark Contact. Hundreds of years ago, after the final fires of Rome flickered out and the world was gearing up for a new age of darkness. You a small farmer would wander into the forest surrounding your small homestead. But for you my lord this would be no normal outing. Trudging trough the darkest part of that cursed wood you found a castle. One that had not been there before. The once great stonework glinted with a dark misty halo at once you felt that cursed keep beckoning you deeper. to venture deeper type explore in the text box`;
let entranceMsg = `Finding the doors of that old palace open you ventured inside to find a once great hall now reduced to a shadow of its glory. The great red tapestry still on display but tattered with time and washed pale in the sun light. And yet you feel something dark beckoning to you from deep within the castle you will need to search for items as you dig around this castle to search for a chest type search in the text box.`;
let bossDoorMsg = `Yes here it is, what ever it is calling me is behind that door but it is locked. I need to find a key to open the door.`;
let endgameText = `As the undead king falls at your feet the crown on his head beacons to you. You place it on your head. In an instant you can see hundreds of years of history flash before your eyes. The knowledge of those who themselves have put the crown on their heads wells from within you rotting out your mind as hundreds of voices enter your head. All your darkest desires are lade to bare in front of you the door that had once disappeared is brought up once more and in an instant the castle that you have explored disappears in front of you and drags you into the crown. Until you reappear once more yourself king of the undead.`;

entrance.msg = entranceMsg;
beginning.msg = beginningMsg;
bossDoor.msg = bossDoorMsg;


//hallway msg with enemies
let hw1 = `A long hallway sits before you and inside it a silhouette of a mobile rotting corpse the stench of years fills the air and the must of decay dances in your airways. Its hard to breath here part of you wants to run, but something is calling for you to go deeper within the annals of this forsaken keep.`;
let hw2 = `Halls the veins of a buildings in this case what used to be the veins of buildings. The cracking stonework and destroyed portraits of an era long gone and lost to time. yet you forward into one hall after the next not knowing what you are looking for but knowing that you are looking for something. In the distance is another walking corpse. Can you survive this place?`;
let hw3 = `The hallway before you is like the ones before. But this one has a window overlooking a courtyard. Staring outside of it for just one second you no longer feel the pull from deep within the Keep. However as fast as it went it came back the figure before you what could be causing them to come forth out of eternal slumber.`;
// hallway msg without enemies
let hw4 = `Another hallway hasn/'t that been what you have seen the most of. This hall has no aroma to it could that mean no zombie as well you look around nothing has shambled or tried to attack you. You walk slower through this hall taking in the ripped portraits, and for a moment you see this hall in all its former grandeur people walking about joyously. A festivity of some kind? Then quick as the vision came it was gone. You feel the calling to the deep grow only stronger as you wonder what this place was.`;
let hw5 = `A hall, this one stripped bare nothing and no one to occupy it a broken table cracked in half sits against the side wall. Letters or runes carved deep into it surface in a language lost to you. Knowing not what is says you go deeper into the hall. The further you go the barer it gets until the stonework only remains. Cuts deep into the stone not by masons but by soldiers the clatter of swords and the flash of steel fill your eyes and ears. That feeling what could it be.`;
let hw6 = `This hall looks to be that of the servants' quarters beds fill rooms on either side of the hall nothing much to see in this hall. Empty as it was the day it was built. Hold on how do you know that how do you remember that. A rush of visions and a multitude of voices all crying at once saying nothing speaking over one another in a rumbling voice with no direction. The darkness inside the building grows and a sinister feeling fills your heart what happened here.`;

//room msg with enemies
let room1 = `You enter a cylindrical room. In the center of the room sits a figure cloaked in black ready to attack. Around the room is many suits of armor. An armory for the garrison that once inhabited this place.`;
let room2 = `The room small and cramped like a large box made of wood and stone. A figure in the corner lashes at you.`;
//room msg without enemies
let room3 = `The room is small and lit poorly what little light you see comes from a break in the stone were the mortar that once held the building together has worn away with time. On the far wall covered in a thick layer of dust. a portrait that sat enough in the light for all its defining features to have been wiped away by the sun. what has not been taken by time is the head of a man with a crown on his head, and the to part of his torso covered in a red cape. As you studied this picture for some time. That feeling the draw deeper grows itself deeper. `;
let room4 = `A cylindrical room filled with the neglect of time surrounds you. With its once former glory the floor above having unceremoniously fallen into this one. The stench of rotting wood and the warm glow of the sun gives way to a melancholy happy aura that this room gives off. The darkness seemingly having not penetrated this room gives off an almost holy air. The calling deeper grows smaller yet is still present within your soul.`;

// an array for exploring messages to go into 
let ehallMsgArr = [hw1, hw2, hw3];
let hallMsgArr = [hw4, hw5, hw6];
let eroomMsgArr = [room1, room2];
let roomMsgArr = [room3, room4];


//msg randomiser
function hallMsgE () {
    let rand = Math.floor(Math.random() * ehallMsgArr.length);
    console.log(rand)
    let henvTxt = ehallMsgArr[rand];
    console.log(henvTxt)
    hallway.msg = henvTxt; 
}

function hallMsg () {
    let rand = Math.floor(Math.random() * hallMsgArr.length);
    console.log(rand)
    let henvTxt = hallMsgArr[rand];
    console.log(henvTxt)
    hallwayNoE.msg = henvTxt; 
}

function roomMsg () {
    let rand = Math.floor(Math.random() * roomMsgArr.length);
    console.log(rand)
    let renvTxt = roomMsgArr[rand]
    console.log(renvTxt)
    roomNoE.msg = renvTxt;
}


function roomMsgE () {
    let rand = Math.floor(Math.random() * eroomMsgArr.length);
    console.log(rand)
    let renvTxt = eroomMsgArr[rand]
    console.log(renvTxt)
    room.msg = renvTxt;

    
}

let envArr = [hallway, hallwayNoE, room, roomNoE, bossDoor, bossRoom, entrance, beginning];

// display text for story and instructions
let textBox = document.getElementById('textOtp');



let txtInpt = document.getElementById('player-interface');
let formUI = document.getElementById('Ui')
//let submit = document.getElementById('sub')
let rolld10 = document.getElementById('roll-D10');
let rolld20 = document.getElementById('roll-D20');
//let diplayInv = document.getElementById('playerInv');
let startinpt, exploreinpt, attackinpt, searchinpt, invinpt, useKeyinpt, usePotioninpt;
startinpt = document.getElementById('start');
exploreinpt = document.getElementById('explore');
attackinpt = document.getElementById('attack');
searchinpt = document.getElementById('search');
invinpt = document.getElementById('INV');
useKeyinpt = document.getElementById('useKey');
usePotioninpt = document.getElementById('usePotion');

startinpt.addEventListener('click', ()=> {
    txtInpt.value = `start`;
});
exploreinpt.addEventListener('click', ()=> {
    txtInpt.value = `explore`;
});
attackinpt.addEventListener('click', ()=> {
    txtInpt.value = `attack`;
});
searchinpt.addEventListener('click', ()=> {
    txtInpt.value = `search`;
});
invinpt.addEventListener('click', ()=> {
    txtInpt.value = `inv`;
});
useKeyinpt.addEventListener('click', ()=> {
    txtInpt.value = 'use key';
});
usePotioninpt.addEventListener('click', ()=> {
    txtInpt.value = `use potion`
});


let roll10;
let roll20;

let eRoll10;
let eRoll20;

//console.log(roll)

//this is the dice roller 

//d10
rolld10.addEventListener('click', ()=> {
    let pD10otp = document.getElementById('d10otp');
    //console.log(pd10.sides);
    let die10 = pd10.sides;
    //console.log(dienumb)
    roll10 = Math.floor(Math.random() * die10) + 1;
    pD10otp.innerText = `d10, ${roll10}`;
    
});

// d20
rolld20.addEventListener('click', ()=> {
    let pD20otp = document.getElementById('d20otp')
    //console.log(pd20.sides);
    let die20 = pd20.sides;
    //console.log(dienumb)
    roll20 = Math.floor(Math.random() * die20) + 1;
    pD20otp.innerText = `d20, ${roll20}`;
    
});

function enemyRoll () {
    let eD10otp = document.getElementById(`ed10otp`)
    let eD20otp = document.getElementById(`ed20otp`)

    let edie10 = ed10.sides;
    eRoll10 = Math.floor(Math.random() * edie10) + 1;
    eD10otp.innerText = `d10 ${eRoll10}`;

    let edie20 = ed20.sides;
    eRoll20 = Math.floor(Math.random() * edie20) + 1;
    eD20otp.innerText = `d20 ${eRoll20}`;
}

// defining varables for playstates 
// these will be redefined inside the formUI/Game Logic function

let isExplorable = true;
let searchable = true;
let attackable;
//let i = 0
let textBoxItems = [];
let keyUsable = true;
let canStart = true;
let zombieKingPre = false;


// game logic current state: search(working), attack(working), explore(working), inv(working), use key(working), use potion(working)
formUI.addEventListener('submit', (e)=> {
    e.preventDefault();
    let playerTxt = txtInpt.value
    let chestPresent;
    let battle = attackable;
    let canBeSearched = searchable;
    let infotxt;
    let canUseKey = keyUsable;
    let canExpl = isExplorable 

    let msgArr = []

    // this is the display text mechanism
    function displayText () {
            textBoxItems.push(infotxt)
            textBox.innerText = textBoxItems; 
         if(textBoxItems.length === 1) {
            textBoxItems.shift()
        }
    }

    /**
     * this switch case hanndles player inputs like attack search use of keys ect. 
     * search = look for chest
     * attack = attack zombie
     * explore = move to next aria if constraints are met not working
     * use key = use key for the boss room
     * inv = inventory sight and managment
     * use potion = allows you to use a health potion to heal
     */
    switch (playerTxt.toLowerCase()) {
        case ('search'):
            infotxt = `please roll a d10 to see if you find a chest`;
            search();
            break;
        case ('attack'):
            infotxt = `roll a d20 to see if your attack connects, and a d10 for dammage`;
            attack();
            break;
        case (`explore`):
            explore();
            //infotxt = `you have explored`;
            break;
        case (`use key`):
            useKey();
           // infotxt = 'you used key';
            break;
        case (`use potion`):
            usePot();
            break;
        case (`inv`):
            infotxt = `you look into you inventory:`;
            inv();
            break;
        case (`start`):
            infotxt = `game is starting`
            start();
            break;
        default: 
            infotxt = 'please input a comand';
            break;
    };

    function start () {
        if (canStart == true) {
            let gmStart = envArr[7];
            infotxt = gmStart.msg;
            attackable = false;
            searchable = gmStart.canbesearched;
            keyUsable = gmStart.canUseKey;
            isExplorable = gmStart.canExplore;
            //canStart = false;
        } else if (canStart == false) {
            infotxt = `game has already started`
        }

        
        
    }
    
    
    console.log(textBoxItems)
    // explore to find more rooms/story
    function explore () {
        if (playerTxt == 'explore' && canExpl == true && canStart == false) {
            let envIdx = Math.floor(Math.random() * 5);
            console.log(envIdx)
            let envChange = envArr[envIdx];
            //console.log(envChange)
 
            if (envChange.alt == `hallway`) {
                hallMsgE();
                infotxt = envChange.msg
            } else if (envChange.alt == `hallwayNoE`) {
                hallMsg();
                infotxt = envChange.msg
            } else if (envChange.alt == `room`) {
                roomMsgE();
                infotxt = envChange.msg
            } else if (envChange.alt == `roomNoE`) {
                roomMsg();
                infotxt = envChange.msg
            }
            attackable = envChange.canAttack;
            searchable = envChange.canbesearched;
            keyUsable = envChange.canUseKey;
            isExplorable = envChange.canExplore;
        }else if (playerTxt == 'explore' && canExpl == false && canStart == false) {
            infotxt = `i cannot go further with this zombie attacking me`
        }else if (playerTxt == 'explore' && canExpl == true && canStart == true) {
            let entChange = envArr[6];
            infotxt = entChange.msg;
            attackable = entChange.canAttack
            searchable = entChange.canbesearched;
            keyUsable = entChange.canUseKey;
            isExplorable = entChange.canExplore
            canStart = false
            
        }
    }
    console.log(canStart)

    function useKey () { 
        if (playerInventory.includes(bKey) == true && keyUsable == true) {
            infotxt += `slowly you inset the key into the lock. By its self as if by magic the key turns, and the door in some dark ara fades into a shadow and disapears into a haze of black smoke. Cautiously you etner the unlit room a putrid smell entering your nose. standing before you a rottin corps with a tarnished gold crown on its head lashes at you. The dark ara that you have felt this entire time has lead to this, the king of zombies is in front of you! Will you Prevale?`;
            //infotxt = bossRoom.msg;
            attackable = bossRoom.canAttack
            searchable = bossRoom.canbesearched;
            keyUsable = bossRoom.canUseKey;
            isExplorable = bossRoom.canExplore
            playerInventory.splice(bKey);
            zombieKingPre = true;
        } else if (playerInventory.includes(bKey) == true && keyUsable == false) {
            infotxt = `i see no door here`;
        } else if (playerInventory.includes(bKey) == false && keyUsable == true) {
            infotxt = `i think i need a key to get in there`;
        } else {
            infotxt = `i see no door here`
        }
        
    }


    // d10 roll to find the chest
    function search () {
        if (playerTxt == 'search' && canBeSearched === true) {
            //console.log(`please roll a d10 to see if you find a chest`);
    
            if (roll10 >= 5) {
                chestPresent = true;
                infotxt =`you found a chest containing: `;
                giveChestItem();
                searchable = false;
        
            }else if (roll10 === 0, roll20 === 0) {
                infotxt = `please roll your dice`

            }else if (roll10 <= 4 && roll10 != 0) {
                chestPresent = false;
                infotxt =`you found nothing please proceade to the next aria`;
                searchable = false;
            }


        } else if (playerTxt == 'search' && canBeSearched === false){
            infotxt = `you have searched this aria before nothing new will be found`;
        }
    };
    // giving the player the chest item

    function giveChestItem () {
        if (chestPresent === true) {
        
            // item randomizer for chests
    
            let itemIdx = Math.floor(Math.random() * itemArr.length);
            let getItem = itemArr[itemIdx];
            console.log(getItem);
            if (getItem.alt == swordBetter || getItem.alt == bKey) {
                itemArr.splice(getItem)
                console.log(itemArr)
            }
            if (getItem.alt == swordBetter) {
                let newatbase = pm1.attackBase + swordBetter.attPlus;
                pm1.attackBase = newatbase;
            }
            playerInventory.push(getItem);
            console.log(playerInventory);

            infotxt += `${getItem.alt}`
        
            if (playerInventory.length === 8) {
                infotxt = `your inventory is full you can only carry ${playerInventory.length} items`;
                playerInventory.pop()
            }
        } else if (chestPresent === false ){
            infotxt = `no chest to unlock`
        }
    }

    function inv () {
        console.log(`hello`)
        let index = 0;
        while (index < playerInventory.length) {
            infotxt += `${playerInventory[index].alt}`;
            index++;}
        if (playerInventory >= 0) {
            infotxt = `you found nothing in you inventory`;
        }

    }

    function usePot () {
        if (playerInventory.includes(hPot) && pm1.health < 100) {
            infotxt = `Choking down the disgusting red drink you begin to wonder what it is that you have consumed. On a simple lable worn with time taterd and fraying reads: to the heath of the living you regain 20 hit points. but a feeling of dread washes over you this is not of your world and was never meant to exist within it you cant help but feel yet more conected to the darkness that you have come to defeate.`;
            healthRe();


        } else if (playerInventory.includes(hPot) == true && pm1.health >= 100) {
            infotxt = `you have no need to use a potion`

        } else if(playerInventory.includes(hPot) == false) {
            infotxt = `you did not find a health potion in your bag`
        };

        
    }

    function healthRe () {
        if (pm1.health > 80) {
            let pothealth = 100;
            pm1.health = pothealth;
            console.log(pm1.health)
        } else if (pm1.health < 80) {
            let pothealth = hPot.hRestore + pm1.health;
            pm1.health = pothealth
            console.log(pm1.health)
        };
        
        playerInventory.shift(hPot)
        
    }

    //console.log(zombie.health);
    // reset di value to 0 for player turn detection
    function pdiReset() { 
        roll20 = 0;
        roll10 = 0;
        
    }

    // resets di value to 0 for the zombie hit detection
    function ediReset() {
        eRoll20 = 0;
        eRoll10 = 0;
        
    }

    // this is the function for damage done to the player

    function  playerDamage () { 
        enemyRoll(); 
        if (eRoll20 >= pm1.defence && pm1.health >= 1) {
            let pHealth = pm1.health - (roll10 + zombie.attackBase)
            pm1.health = pHealth
            infotxt += ` this is player health: ${pHealth} `
            ediReset();
        } else if (eRoll20 >= pm1.defence && pm1.health <= 0) {
            infotxt = ` game over`;
            attackable = false;
        } else if (eRoll20 <= pm1.defence && pm1.health >= 1) {
            infotxt = ` enemy attack missed`;
            ediReset();
        }
    }

    // this is the function for damage done to the npc
    function attack() {
        let enemie;
        if (zombieKingPre == false) {
            enemie = zombie
        } else if (zombieKingPre == true) {
            enemie = zombieKing
        }
        if (battle == true && playerTxt == 'attack') {
            function roll() {
                if (roll20 >= enemie.defence && enemie.health >= 1) {
                    let cHealth = enemie.health - (roll10 + pm1.attackBase)
                    enemie.health = cHealth
                    infotxt += ` this is enemy health: ${enemie.health} `;
                    pdiReset();
                    console.log(roll10, roll20)
                    if (enemie.health >= 1) {
                        playerDamage();
                   }
                } else if (roll20 >= enemie.defence && enemie.health <= 0) {
                    infotxt = ` battle ended`;
                    pdiReset();
                    attackable = false;
                    isExplorable = true;
                    infotxt =` now that the enemie is dead i may be able to go forward`
                }  else if (roll10 === 0 && roll20 === 0) {
                    infotxt = ' please roll your dice';
                } else if  (roll20 <= enemie.defence && enemie.health >= 1) {
                    infotxt = ` attack missed`; 
                    pdiReset()
                    if (enemie.health >= 1) {
                        playerDamage();
                    }
                }
            } 

            roll()
            console.log(battle)

        } else if (battle == false && playerTxt == 'attack') {
                pdiReset()
                enemie.health = 50;
                console.log(enemie.health)
                infotxt = ' nothing to attack here';
        }

        if (zombieKingPre == true && zombieKing.health <= 0) {
            infotxt = endgameText;

        }
    }

   displayText();





    
});



