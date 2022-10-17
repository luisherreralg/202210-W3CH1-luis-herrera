import { cardTemplate } from './cardTemplate';
import { characters } from './characters';
const main = () => {
    const data = characters;
    const card1 = cardTemplate(data[0]);
    const card2 = cardTemplate(data[1]);
    const eDiv = document.querySelector('.character.col');
    eDiv.outerHTML = card1;
};
console.log('Loaded Index.js');
document.addEventListener('DOMContentLoaded', main);
