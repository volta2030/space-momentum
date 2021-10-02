const clock = document.querySelector("#clock");

function displayTime() {
  const date = new Date();
  const hour = date.getHours().toString();
  const min = date.getMinutes().toString();
  const sec = date.getSeconds().toString();
  clock.innerText = `${hour.padStart(2, "0")}:${min.padStart(
    2,
    "0"
  )}:${sec.padStart(2, "0")}`;
}
displayTime();
setInterval(displayTime, 1000);
