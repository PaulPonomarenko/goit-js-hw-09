import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const myInput = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

let countTime = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = true;
      return;
    }
    btnStart.disabled = false;
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr(myInput, options);

btnStart.addEventListener('click', onClick);
function onClick() {
  countTime = setInterval(setTime, 1000);
  btnStart.disabled = true;
}

function setTime() {
  const now = new Date();
  const deff = fp.selectedDates[0] - now;
  let timer = convertMs(deff);
  if (deff < 1000) {
    clearInterval(countTime);
    return;
  }
  days.textContent = addLeadingZero(timer.days);
  hours.textContent = addLeadingZero(timer.hours);
  minutes.textContent = addLeadingZero(timer.minutes);
  seconds.textContent = addLeadingZero(timer.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
