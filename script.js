const hourVar = document.querySelector('.hour');
const minuteVar = document.querySelector('.minute');
const displayVar= document.querySelector('.display');

const acVar = document.querySelector('.ac');
const pmVar = document.querySelector('.pm');
const percentVar = document.querySelector('.percent');

const divisionVar = document.querySelector('.division');
const multiplicationVar = document.querySelector('.multiplication');
const subtractionVar = document.querySelector('.subtraction');
const additionVar = document.querySelector('.addition');
const equalVar = document.querySelector('.equal');

const decimalVar = document.querySelector('.decimal');

const number0  = document.querySelector('.number-0');
const number1 = document.querySelector('.number-1');
const number2 = document.querySelector('.number-2');
const number3 = document.querySelector('.number-3');
const number4 = document.querySelector('.number-4');
const number5 = document.querySelector('.number-5');
const number6 = document.querySelector('.number-6');
const number7 = document.querySelector('.number-7');
const number8 = document.querySelector('.number-8');
const number9 = document.querySelector('.number-9');

const numberArray = [
    number0, 
    number1, 
    number2, 
    number3, 
    number4, 
    number5, 
    number6, 
    number7, 
    number8, 
    number9
];

//hourVar.textContent = '20';




numberArray.forEach( (i) => {
    i.addEventListener("click", () => {
        const currentDisplay = displayVar.innerHTML;
        displayVar.innerHTML = currentDisplay + i;
    })
});

const timeUpdate = (() => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    
    if(currentHour > 12) {
        currentHour -= 12;
    };

    hourVar.textContent = currentHour.toString();
    minuteVar.textContent = currentMinute.toString().padStart(2, '0');
}); 


setInterval(timeUpdate, 1000);
timeUpdate();