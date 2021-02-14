const countdown = setInterval(() => {
  const today = new Date().getTime();
  const birthday = new Date("Dec 4, 2021 00:00:00").getTime();
  let diff = birthday - today;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  if (days < 10) {
    document.getElementById("days").innerHTML = `<h1>0${days}</h1>
  <p>DAYS</p`;
  } else {
    document.getElementById("days").innerHTML = `<h1>${days}</h1>
  <p>DAYS</p`;
  }
  if (hours < 10) {
    document.getElementById("hours").innerHTML = `<h1>0${hours}</h1>
  <p>HOURS</p`;
  } else {
    document.getElementById("hours").innerHTML = `<h1>${hours}</h1>
  <p>HOURS</p`;
  }
  if (minutes < 10) {
    document.getElementById("minutes").innerHTML = `<h1>0${minutes}</h1>
  <p>MINUTES</p`;
  } else {
    document.getElementById("minutes").innerHTML = `<h1>${minutes}</h1>
  <p>MINUTES</p`;
  }
  if (seconds < 10) {
    document.getElementById("seconds").innerHTML = `<h1>0${seconds}</h1>
  <p>SECONDS</p`;
  } else {
    document.getElementById("seconds").innerHTML = `<h1>${seconds}</h1>
  <p>SECONDS</p`;
  }
  if (countdown < 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = `<h1>HAPPY BIRTHDAY</h1>`;
  }
}, 1000);
