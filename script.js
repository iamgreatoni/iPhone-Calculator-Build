const hourVar = document.querySelector('.hour');
const minuteVar = document.querySelector('.minute');
const displayVar= document.querySelector('.display');


//hourVar.textContent = '20';



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