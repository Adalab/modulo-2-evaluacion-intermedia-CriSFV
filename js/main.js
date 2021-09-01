'use strict';

const randomNumber = getRandomNumber();
const tryButton = document.querySelector('.js_button');
const userNumber = document.querySelector('.js_userNumber');
const track = document.querySelector('.js_track');
const attempt = document.querySelector('.js_attempt');
let tryNumber = 0;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);
    }

console.log('Mi número aleatorio es ' + randomNumber);


function takeNumber(){

   const number = parseInt(userNumber.value);

   if(number >0 && number <= 100){

        if (number === randomNumber){
           track.innerHTML = 'Has ganado campeona!!!'
       }
       else if (number < randomNumber){
           track.innerHTML = 'Demasiado bajo.'
       }
       else if(number > randomNumber){
           track.innerHTML = 'Demasiado alto.'
       }
    }
    else{
        track.innerHTML = 'El número debe estar entre 1 y 100.'
}
}



function takeCounter(){
   tryNumber += +1;
  attempt.innerHTML= 'Número de intentos ' + tryNumber; 
}

function handleClick(){
  takeNumber();
 takeCounter();
}
tryButton.addEventListener('click' , handleClick);




