function updateClock() {

const clockTime = new Date();
let hours = clockTime.getHours();
const meridiem = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
hours = hours.toString().padStart(2,0)
const minutes = clockTime.getMinutes().toString().padStart(2,0);
const seconds = clockTime.getSeconds().toString().padStart(2,0);

const timeDisplay = `${hours} : ${minutes} : ${seconds} ${meridiem}`;


const date = clockTime.getDate().toString().padStart(2,0);
const month = (clockTime.getMonth() + 1).toString().padStart(2,0);
const year = clockTime.getFullYear();

const dateDisplay = `${date}-${month}-${year}`;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayDisplay = days[clockTime.getDay()];

document.getElementById("clock").textContent = timeDisplay;
document.getElementById("day").textContent = dayDisplay
document.getElementById("date").textContent = dateDisplay;

}

setInterval(updateClock, 1000);

updateClock();