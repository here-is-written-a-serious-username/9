import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const todayDate = new Date();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        selectedDatechecker(selectedDates);
    },
    
};
let selectedDate = 0;

const btnStart = document.querySelector("[data-start]")
const day = document.querySelector("[data-days]")
const hour = document.querySelector("[data-hours]")
const minute = document.querySelector("[data-minutes]")
const second = document.querySelector("[data-seconds]")

flatpickr("#datetime-picker", options);


btnStart.addEventListener('click', onStartClick);


function onStartClick() {
    let dayToEnd = 0;
    const IdInt = setInterval(
        () => {
            dayToEnd = selectedDate - Date.now();
            
            const { days, hours, minutes, seconds } = convertMs(dayToEnd);

            day.textContent = addLeadingZero(days);
            hour.textContent = addLeadingZero(hours);
            minute.textContent = addLeadingZero(minutes);
            second.textContent = addLeadingZero(seconds);

        }, 1000); 
    
           
}

function selectedDatechecker(selectedDates) {
    if ((selectedDates[0].getTime() - todayDate.getTime()) < 0) {
        alert("Please choose a date in the future");
        return;
    }
    btnStart.disabled = false;
    selectedDate = selectedDates[0].getTime();
};

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
}

function addLeadingZero(value) {
    return `${value}`.padStart(2, '0');
}