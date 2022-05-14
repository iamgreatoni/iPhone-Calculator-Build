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


let valueStringInMemory = null;
let operatorInMemory = null;



//hourVar.textContent = '20';

/*const number = document.getElementsByClassName("number")
const numberVar = [].slice.call(number);*/

/*const getDisplay = () => {
   const currentDisplay = displayVar.innerHTML;
    return currentDisplay.split(',').join('');
};*/

const getDisplay = () => displayVar.innerHTML.split(',').join('');

const getDisplayNum = () => {
    return parseFloat(getDisplay());
};

const setDisplay = (DisplayString) => {
    if (DisplayString[DisplayString.length - 1] === '.') {
        displayVar.innerHTML += '.';
        return;
    }

    const [wholeNumString, decimalString] = DisplayString.split('.');
    if (decimalString) {
    displayVar.innerHTML = 
        parseFloat(wholeNumString).toLocaleString() + '.' + decimalString;
    } else {
    displayVar.innerHTML = 
        parseFloat(wholeNumString).toLocaleString();
    };
};


const handleNumberClick = (e)=> {
    const currentDisplay = getDisplay();
    if (currentDisplay === '0'){
        setDisplay(e.innerHTML);
    } else {
        setDisplay(currentDisplay + e.innerHTML);
    }
}; 

const performOperations = ()=> {
    const valueNumInMemory = parseFloat(valueStringInMemory);
    const value = getDisplayNum();
    let newValueNum; 
    if (operatorInMemory === 'addition'){
    newValueNum = valueNumInMemory + value 
    } else if (operatorInMemory === 'subtraction'){
    newValueNum = valueNumInMemory - value 
    } else if (operatorInMemory === 'multiplication'){
    newValueNum = valueNumInMemory * value 
    } else if (operatorInMemory === 'division'){
    newValueNum = valueNumInMemory / value 
    }

    return newValueNum.toString();
}


const handleOperatorClick = (o)=> {
    const currentDisplay = getDisplay();
    if (!valueStringInMemory){
        valueStringInMemory = currentDisplay;
        operatorInMemory = o;
        setDisplay('0');
        return;
    }
    valueStringInMemory = performOperations();
    operatorInMemory = o;
    setDisplay('0');
};





acVar.addEventListener('click', ()=>{
    setDisplay('0');
    valueStringInMemory = null;
     operatorInMemory = null;
});

pmVar.addEventListener('click', ()=>{
    const value = getDisplayNum();
    const currentDisplay = getDisplay();
    if (value >= 0){
        setDisplay('-' + currentDisplay.toString());
    } else {
        setDisplay(currentDisplay.substring(1));
    }
});

percentVar.addEventListener('click', ()=>{
    const value = getDisplayNum();
    const newValue = value / 100;
    setDisplay(newValue.toString());
});


numberArray.forEach( (i)=>{ 
    i.addEventListener('click', ()=>{
        handleNumberClick(i);
    });
    
});


decimalVar.addEventListener('click', function(){
    const currentDisplay = getDisplay();
    if(!currentDisplay.includes('.')){
        setDisplay(currentDisplay + '.');
    }
});





divisionVar.addEventListener('click', ()=> {
    handleOperatorClick('division');
});

additionVar.addEventListener('click', ()=> {
    handleOperatorClick('addition');
});

subtractionVar.addEventListener('click', ()=> {
    handleOperatorClick('subtraction');
});

multiplicationVar.addEventListener('click', ()=> {
    handleOperatorClick('multiplication');
});

equalVar.addEventListener('click', ()=> {
    if (valueStringInMemory){
       setDisplay(performOperations());
       valueStringInMemory = null;
       operatorInMemory = null;
    }

});




/*for (let i=0; i < numberArray.length; i++ ){
    const numberVar = numberArray[i];
    numberVar.addEventListener('click', ()=> {
        handleNumberClick(i.toString());
    });
}*/



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

