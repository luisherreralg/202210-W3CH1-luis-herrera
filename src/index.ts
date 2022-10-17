import { characters } from './characters.js';

const main = () => {
  const data = characters;

  let templateCard = '';

  data.forEach((element) => {
    // const weapon = element.weapon;

    templateCard = `
          <ul class="characters-list row list-unstyled">
          <li class="character col">
            <div class="card character__card">
              <img
                src="../img/no-one.jpg"
                alt="${element.name}, ${element.family}"
                class="character__picture card-img-top"
              />
              <div class="card-body">
                <h2 class="character__name card-title h4">Nombre y familia</h2>
                <div class="character__info">
                  <ul class="list-unstyled">
                    <li>Edad: ${element.age} años</li>
                    <li>
                      Estado:
                      <i class="fas fa-thumbs-down"></i>
                      <i class="fas fa-thumbs-up"></i>
                    </li>
                  </ul>
                </div>
                <div class="character__overlay">
                  <ul class="list-unstyled">
                    <li>Años de reinado: X</li>
                    <li>Arma: XXX</li>
                    <li>Destreza: X</li>
                    <li>Peloteo: X</li>
                    <li>Asesora a: X</li>
                    <li>Sirve a: X</li>
                  </ul>
                  <div class="character__actions">
                    <button class="character__action btn">habla</button>
                    <button class="character__action btn">muere</button>
                  </div>
                </div>
              </div>
              <i class="emoji"></i>
            </div>
          </li>
        </ul>
    `;
  });

  const eLi = document.querySelector('.character.col');
  (eLi as HTMLLIElement).outerHTML = templateCard;
};

console.log('Loaded Index.js');
document.addEventListener('DOMContentLoaded', main);
