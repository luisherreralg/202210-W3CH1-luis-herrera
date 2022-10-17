import { Character } from './character.js';
export class King extends Character {
  constructor(name, family, age, kingdomYears) {
    super(name, family, age);
    this.kingdomYears = kingdomYears;
    this.message = 'Vais a morir todos';
  }
}
