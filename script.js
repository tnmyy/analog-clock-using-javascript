setInterval(() => {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  hoursrotation = 30 * hours + minutes / 2;
  minutesrotation = 6 * minutes;
  secondsrotation = 6 * seconds;

  hour.style.transform = `rotate(${hoursrotation}deg)`;
  minute.style.transform = `rotate(${minutesrotation}deg)`;
  second.style.transform = `rotate(${secondsrotation}deg)`;
}, 1000);
