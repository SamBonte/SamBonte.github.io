let timerId=0;

const initialize = () => {
    let btnStop=document.getElementById("btnStop");
    btnStop.addEventListener("click", stopTimer);
    timerId=setTimeout(timerTick, 1000);
}

const timerTick = () => {
    //aantonen ook met setTimeout herhaling kan doen MAAR van meeneer moet eig. setInterval voor herhaling !
    let output=document.getElementById("output");
    output.innerHTML+=" tick";
    timerId=setTimeout(timerTick, 1000);
}

const stopTimer = () => {
    clearTimeout(timerId);
}

window.addEventListener("load", initialize);