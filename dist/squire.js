import { Character } from './character.js';
export class Squire extends Character {
    constructor(name, family, age, brownNoseLevel) {
        super(name, family, age);
        this.brownNoseLevel = brownNoseLevel;
        this.message = 'Soy un loser';
    }
}
