'use strict';

//Vytvoř si proměnnou, ve které bude uloženo kdo je na tahu. Začíná vždy kolečko, tak rovnou do proměnné přiřaď řetězec 'circle'.

let praveHraje = 'circle';

// Pomocí posluchače událostí po kliknutí na políčko:

// i. Přidej políčku příslušnout třídu podle toho, kdo je zrovna na tahu. Například board__field--circle, resp. board__field--cross.

const addClass = (event) => {
  event.target.classList.add('board__field--circle');
  event.target.classList.add('board__field--cross');
};

document.querySelector('button').addEventListener('click', addClass);

fieldElement.addEventListener('click', () => {
  addSymbol(praveHraje);
  togglePlayer(praveHraje);
});

// Změň hodnotu proměnné z 'circle' na 'cross', případně z 'cross' na 'circle'.

document.querySelector('circle').classList.toggle('cross');
document.querySelector('cross').classList.toggle('circle');

// Uprav v levém horním rohu výpis, kdo je na tahu.

document.querySelector('.hraje').classList.toggle('circle');
