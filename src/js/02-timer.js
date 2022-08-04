import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker')
const refs = {
    daysSpan: clock.querySelector('[data-days]'),
    hoursSpan: clock.querySelector('[data-hours]'),
    minutesSpan: clock.querySelector('[data-minutes]'),
    secondsSpan: clock.querySelector('[data-seconds]'),
};

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        if (selectedDates[0] <= defaultDate) {
            return window.alert("Please choose a date in the future");
        } else {
            startBtn.addEventListener('click', startCountdownTime(() => { timerId = setInterval(() => {
                const diff = selectedDates[0] - defaultDate;
                console.log(diff);
                const time = convertMs(diff);
                changeDateOnClock(time);
            }, 1000);
        startBtn.disabled = false;    
        }))
      }
    },
}

flatpickr(inputEl, options); 

function changeDateOnClock({ days, hours, minutes, seconds }) {
    refs.daysSpan.textContent = `${days}`;
    refs.hoursSpan.textContent = `${hours}`;
    refs.minutesSpan.textContent = `${minutes}`;
    refs.secondsSpan.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
    // refs.daysSpan.textContent = days;

 }