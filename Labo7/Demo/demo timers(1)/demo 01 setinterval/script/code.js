//globale variabele
let timerId=0;

const initialize = () => {
    let btnStop=document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);
    timerId=setInterval(timerTick, 1000);
}

const timerTick = () => {
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
}

const stopTimer = () => {
    //anders loopt setInterval in achtergrond door !!!
    clearInterval(timerId);
}

window.addEventListener("load", initialize);