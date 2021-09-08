'use strict';

const randomNumber = getRandomNumber(100);
const tryButton = document.querySelector('.js_button');
const userNumber = document.querySelector('.js_userNumber');
const track = document.querySelector('.js_track');
const attempt = document.querySelector('.js_attempt');
let tryNumber = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('Mi número aleatorio es ' + randomNumber);

function writeMessage(sms) {
  track.innerHTML = sms;
}

function takeNumber() {
  const number = parseInt(userNumber.value);

  if (number > 0 && number <= 100) {
    if (number === randomNumber) {
      writeMessage('Has ganado campeona!!!');
    } else if (number < randomNumber) {
      writeMessage('Demasiado bajo.');
    } else if (number > randomNumber) {
      writeMessage('Demasiado alto.');
    }
  } else {
    writeMessage('El número debe estar entre 1 y 100.');
  }
}

function takeCounter(ev) {
  tryNumber += +1;
  attempt.innerHTML = 'Número de intentos ' + tryNumber;
}

function handleClick() {
  takeNumber();
  takeCounter();
}
tryButton.addEventListener('click', handleClick);

userNumber.addEventListener('submit', (ev) => {
  ev.prevertDefault();
  console.log(userNumber);
});
