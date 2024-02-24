let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
    document.getElementById('startStop').textContent = 'Detener';
  } else {
    isRunning = false;
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Iniciar';
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Iniciar';
  seconds = 0;
  minutes = 0;
  hours = 0;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const display = document.getElementById('display');
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
  return value < 10 ? '0' + value : value;
}

document.getElementById('startStop').addEventListener('click', startStopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);





 


