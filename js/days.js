const day = document.getElementById("day");

const date = new Date();
const daysArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

day.innerText = daysArray[date.getDay()];
