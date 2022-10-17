import { Character } from './character.js';
export class Fighter extends Character {
    constructor(name, family, age, weapon, dexterity) {
        super(name, family, age);
        this.weapon = weapon;
        this.dexterity = dexterity;
        this.message = 'Primero pego y luego pregunto';
    }
}
