const secHand  = document.querySelector('.second-hand');
const minHand  = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hour    = now.getHours();

  const secondsDegree = ((seconds / 60) * 360) + 90;
  const minuteDegree = ((minutes / 60) * 360) + 90;
  const hourDegree = ((hour / 24) * 360) + 90;

  secHand.style.transform = `rotate(${secondsDegree}deg)`;
  minHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hour + " " + minutes + " " + seconds);
}

setInterval(setTime, 1000);

