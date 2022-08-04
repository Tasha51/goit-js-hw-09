import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker')
const refs = {
    daysSpan: document.querySelector('[data-days]'),
    hoursSpan: document.querySelector('[data-hours]'),
    minutesSpan: document.querySelector('[data-minutes]'),
    secondsSpan: document.querySelector('[data-seconds]'),
};

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const deadline = new Date();
        console.log(selectedDates[0]);
        if (selectedDates[0] <= deadline) {
            return window.alert("Please choose a date in the future");
        } 
        startBtn.addEventListener('click', startCountdown)
        startBtn.disabled = false;  

        function startCountdown() {
            timerId = setInterval(() => {
                const diff = selectedDates[0] - deadline;
                if (diff <= 0)
                {
                   return
                }
                convertMs(diff);
                changeDateOnClock(diff);
                console.log(diff);
            }, 1000);
            if (Date.parse(inputEl.value) <= 0)
                {
                    clearInterval(timerId);
                }
        }  
        
    },
}

flatpickr(inputEl, options); 

function changeDateOnClock(time) {
    refs.daysSpan.textContent = addLeadingZero(convertMs(time).days);
    refs.hoursSpan.textContent = addLeadingZero(convertMs(time).hours);
    refs.minutesSpan.textContent = addLeadingZero(convertMs(time).minutes);
    refs.secondsSpan.textContent = addLeadingZero(convertMs(time).seconds);
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
 
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}