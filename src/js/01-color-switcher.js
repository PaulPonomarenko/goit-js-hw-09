const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorSwap = null;
btnStart.addEventListener('click', event => {
  colorSwap = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    btnStart.disabled = true;
  }, 1000);
});
btnStop.addEventListener('click', event => {
  clearInterval(colorSwap);
  btnStart.disabled = false;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
