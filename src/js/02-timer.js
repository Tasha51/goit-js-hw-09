import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker')
const refs = {
    daysSpan: document.querySelector('[data-days]'),
    hoursSpan: document.querySelector('[data-hours]'),
    minutesSpan: document.querySelector('[data-minutes]'),
    secondsSpan: document.querySelector('[data-seconds]'),
};


let today = new Date();
// console.log(today);
let intervalId = null;

startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: today,
    minuteIncrement: 1,
    onClose(selectedDates) {
        const deadline = selectedDates[0]
        console.log(deadline);
        if (deadline <= today) {
            return Notiflix.Notify.info("Please choose a date in the future");
        } 
        startBtn.addEventListener('click', startCountdown)
        startBtn.disabled = false;  

        function startCountdown() {
            intervalId = setInterval(() => {
                const diff = deadline - new Date();
                if (diff <= 0) {
                    console.log("Stop timer");
                    clearInterval(intervalId);
                } else {
                const time = convertMs(diff);
                console.log(time);
                refs.daysSpan.textContent = addLeadingZero(time.days);
                refs.hoursSpan.textContent = addLeadingZero(time.hours);
                refs.minutesSpan.textContent = addLeadingZero(time.minutes);
                refs.secondsSpan.textContent = addLeadingZero(time.seconds);
                };
            }, 1000);
        }  
        
    },
}


flatpickr(inputEl, options); 


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
  
    // console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
    // refs.daysSpan.textContent = days;

}
 
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}