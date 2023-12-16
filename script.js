let clock = document.getElementById("clock");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

function clocks() {
  let currentHour = new Date().getHours();
  let currentMinutes = new Date().getMinutes();
  let currentSeconds = new Date().getSeconds();

  if (currentHour > 12) {
    currentHour = currentHour - 12;
    ampm.innerHTML = "<div>PM</div>";
  } else {
    ampm.innerHTML = "<div>AM</div>";
  }

  if (currentHour < 10) {
    hours.innerHTML = "<span>0</span>" + currentHour;
  } else {
    hours.innerHTML = currentHour;
  }

  if (currentMinutes < 10) {
    minutes.innerHTML = "<span>0</span>" + currentMinutes;
  } else {
    minutes.innerHTML = currentMinutes;
  }

  if (currentSeconds < 10) {
    seconds.innerHTML = "<span>0</span>" + currentSeconds;
  } else {
    seconds.innerHTML = currentSeconds;
  }
}
setInterval(clocks, 1000);
