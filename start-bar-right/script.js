"use strict";

function displayCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let am_pm = hours < 12 ? "AM" : "PM";

  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  let timeStr = `${hours}:${minutes} ${am_pm}`;
  document.querySelector(".sb-time").textContent = timeStr;
  let timer = setTimeout(displayCurrentTime, 1000);
}

function addZero(sN) {
  return sN < 10 ? "0" + sN : sN;
}

displayCurrentTime();

// // // // // // // // // // // // // // // // // //

const sbLoudspeaker = document.querySelector(".sb-loudspeaker");
const loudPanel = document.querySelector(".loud-panel");
const overlay = document.querySelector(".overlay");
const muteBtn = document.querySelector("#example1");
const volumeSlider = document.querySelector(".has-box-indicator");
const ding = document.querySelector(".myAudio");

//
sbLoudspeaker.addEventListener("click", function () {
  loudPanel.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
//
overlay.addEventListener("click", function () {
  loudPanel.classList.add("hidden");
  overlay.classList.add("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !loudPanel.classList.contains("hidden"))
    loudPanel.classList.add("hidden");
  overlay.classList.add("hidden");
});

// When muted checkbox was clicked
let muted = false;
muteBtn.addEventListener("click", function () {
  if (muted === false) {
    sbLoudspeaker.src = "./Icons/loudspeaker_muted-mini-icon.png";
    muted = true;
  } else {
    sbLoudspeaker.src = "./Icons/loudspeaker-mini-icon.png";
    muted = false;
  }
});
volumeSlider.addEventListener("mouseup", function () {
  if (muted === false) {
    ding.play();
  }
});

/////////////////////////////////////////////////////
const windowCalendar = document.querySelector(".window-calendar");
const sbCalendar = document.querySelector(".sb-calendar");

sbCalendar.addEventListener("click", function () {
  windowCalendar.classList.toggle("hidden");
  overlay.classList.remove("hidden");
});
overlay.addEventListener("click", function () {
  windowCalendar.classList.add("hidden");
  overlay.classList.add("hidden");
});