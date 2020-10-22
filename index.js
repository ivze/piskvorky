'use strict';

let praveHraje = 'circle';

const fieldButton = document.querySelector('.fieldButton');

const game = (event) => {
    if (praveHraje === 'circle') {
    event.target.classList.add('board__field--circle'); // prirad tridu
    event.target.disabled = true; // zakaz tlacitko
    document.querySelector('.hrac').src = 'images/cross.svg'; //zmen obrazek na tride hrac
    praveHraje = 'cross'; //hraje druhy hrac

  } else if (praveHraje === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    document.querySelector('.hrac').src = 'images/circle.svg';
    praveHraje = 'circle';
  }
};

const field = document.querySelectorAll('.fieldButton'); //vyber tlacitko do promenne field
for (let i = 0; i < field.length; i++) { //cyklus
  field[i].addEventListener('click', game); // na kliknuti zavolej f-ci game
}
