import Character from "./character.js"
import { classes } from "./classes.js"
import { weapons } from "./weapons.js"
import { armors } from "./armors.js"

export class Enemy {
  constructor(lvl, hp, atk, dmg, xp, con) {
    this.lvl = lvl;
    this.hp = hp;
    this.atk = atk;
    this.dmg = dmg;
    this.xp = xp
    this.con = con
  }
}

export class Combat {
  constructor(playerHpRemain, enemyHpRemain, enemyCon, playerWeap) {
    this.turns = 0;
    this.roll = 0;
    this.dmgDeal = 0;
    this.playerHpRemain = playerHpRemain;
    this.enemyHpRemain = enemyHpRemain;
    this.enemyCon = enemyCon
    this.playerWeap = playerWeap
  }
  playerTurn() {
    this.turns += 1;
    // this.roll = 3
    this.roll = Math.floor(Math.random() * Math.floor(6)) + 1
    if (this.roll > this.enemyCon) {
      // return true;
      this.enemyHpRemain -= this.playerWeap
    } else {
      this.enemyHpRemain
    }
  }
}
//combat constructor
  //turns taken
  //damage dealt
  //rolls?
  //hp remaining

// Combat functionality
// prototype functions
  // attack - roll to check against CON
  // damage - subtracts from HP if successful
  // turn(player>enemy>player>enemy)