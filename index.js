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
for (let i = 0; i < field.length; i++) {
  //cyklus
  field[i].addEventListener('click', game); // na kliknuti zavolej f-ci game
}

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.fieldButton');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => fields[row * boardSize + column];

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Podivej se doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Podivej se doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Podivej se nahoru
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Podivej se dolu
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

//Funkci isWinningMove pusť s každým nově přidaným symbolem.

for (let i = 0; i < field.length; i++) {
  field[i].addEventListener('click', (event) => {
    const isWinner = isWinningMove(event.target);

    
  });
}

//Pokud vrátí true, zobraz alert s hláškou, který hráč vyhrál.

const vyhra = (event) => {
  if (isWinningMove === true) {
    alert('vyhral krizek');
  } else {
    alert('vyhralo kolecko');
  }
};
