import { cardTemplate } from './cardTemplate.js';
import { characters } from './characters.js';
export const generateCard = () => {
    const data = characters;
    const card1 = cardTemplate(data[0]);
    const card1 = cardTemplate(data[1]);
    const eDiv = document.querySelectorAll('.character.col');
    eDiv.outerHTML = card1;
    //   data.forEach((element) => {
    //     const eDiv = document.querySelectorAll('.character__card');
    //     (eDiv as HTMLDivElement).outerHTML = cardTemplate(element);
    //   });
};
