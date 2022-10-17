export const cardTemplate = (element) => {
  const card = `<div class="card character__card">
            <img
              src="../img/no-one.jpg"
              alt=" ${element.name} ${element.age} "
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
                  <li>Arma: ${
                    element.weapon ? element.weapon : 'Sin epecificar'
                  }</li>
                  <li>Destreza: ${
                    element.dexterity ? element.dexterity : 'Sin especificar'
                  } </li>
                  <li>Peloteo: ${
                    element.brownNoseLevel
                      ? element.brownNoseLevel
                      : 'Sin especificar'
                  } </li>
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
          </div>`;

  return card;
};
