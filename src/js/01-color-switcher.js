

const body = document.body;
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intId = null;
let isActive = false;


btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);
    

function onStartClick() {
    if (isActive) {
        return
    }
    isActive = true;
    intId = setInterval(() => { body.style.backgroundColor = getRandomHexColor(); }, 1000 )
}

function onStopClick() {
    clearInterval(intId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}