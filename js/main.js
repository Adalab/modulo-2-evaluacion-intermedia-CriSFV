'use strict';

const randomNumber = getRandomNumber(100);
const tryButton = document.querySelector('.js_button');
const inputNumber = document.querySelector('.js_userNumber');
const userHintContainer = document.querySelector('.js_track');
const attemptContainer = document.querySelector('.js_attempt');
const form = document.querySelector('.js-form');
const attemptNumbers = document.querySelector('.js_attemptNumbers');
let tryNumber = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log('Mi número aleatorio es ' + randomNumber);

function writeMessage(sms) {
  userHintContainer.innerHTML = sms;
}

function takeNumber() {
  const number = parseInt(inputNumber.value);

  if (number > 0 && number <= 100) {
    if (number === randomNumber) {
      writeMessage('¡¡¡Has ganado!!!');
    } else if (number < randomNumber) {
      writeMessage('Demasiado bajo <i class="far fa-sad-tear"></i>');
    } else if (number > randomNumber) {
      writeMessage('Demasiado alto <i class="far fa-sad-tear"></i>');
    }
  } else {
    writeMessage('El número debe estar entre 1 y 100.');
  }
}

function takeCounter(ev) {
  tryNumber += +1;

  attemptContainer.innerHTML = 'Número de intentos: ' + tryNumber;
  attemptNumbers.innerHTML += inputNumber.value + ', ';
}

function handleClick() {
  takeNumber();
  takeCounter();
}
tryButton.addEventListener('click', handleClick);

form.addEventListener('submit', (ev) => {
  ev.prevertDefault();
});
