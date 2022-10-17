import { Counselor } from './counselor.js';
import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Squire } from './squire.js';
export const characters = [
    new King('Joffrey', 'Baratheon', 40, 1),
    new Fighter('Jaime', 'Lanister', 20, 'Destornillador', 5),
    new Fighter('Daenerys', 'Targaryen', 16, 'Mechero', 10),
    new Counselor('Tyrion', 'Lannister', 35),
    new Squire('Bronn', '', 25, 50),
];
// characters[0].ally = characters[1];
