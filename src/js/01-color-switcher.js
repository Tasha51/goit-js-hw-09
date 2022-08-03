const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId = null;

startBtn.addEventListener('click', startChangeColor);

stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor() {
    timerId = setInterval(() => {
        document.body.style.background = getRandomHexColor();
    }, 1000);
    // this.removeEventListener('click', startChangeColor);

    this.disabled = true;
};

function stopChangeColor() {
    clearInterval(timerId);
    // startBtn.addEventListener('click', startChangeColor);

    startBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};