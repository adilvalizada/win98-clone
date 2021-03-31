let openAlert = true;

// * Alert Box
//////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".close-btn").addEventListener("click", () => {
  document.querySelector(".open-alert").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".open-alert").style.display = "none";
    document.querySelector(".alert-bar-window").remove();
  }, 300);
});

document.querySelector(".okBtn").addEventListener("click", () => {
  document.querySelector(".open-alert").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".alert-bar-window").remove();
  }, 300);
});

document.querySelector(".minimize-btn").addEventListener("click", () => {
  document.querySelector(".open-alert").style.display = "none";
  openAlert = false;
});

document.querySelector(".alert-bar-window").addEventListener("click", () => {
  if (!openAlert) {
    document.querySelector(".open-alert").style.display = "inline-block";
    openAlert = true;
  } else {
    document.querySelector(".open-alert").style.display = "none";
    openAlert = !openAlert;
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////
// * Img Box
//////////////////////////////////////////////////////////////////////////////////////////////
let openImg = false;
let minimizeImg = true;
let isClose = true;

document.querySelector(".close-btn-img").addEventListener("click", () => {
  document.querySelector(".open-img").style.opacity = "0";
  isClose = !isClose;
  setTimeout(() => {
    document.querySelector(".open-img").style.display = "none";
    document.querySelector(".img-bar-window").style.display = "none";
  }, 300);
});

document.querySelector(".minimize-btn-img").addEventListener("click", () => {
  document.querySelector(".open-img").style.display = "none";
  minimizeImg = !minimizeImg;
});

document.querySelector(".maximize-btn-img").addEventListener("click", () => {
  if (openImg) {
    document.querySelector(".open-img").style.width = "1366px";
    document.querySelector(".open-img").style.overflow = "auto";
    document.querySelector(".open-img").style.height = "605px";
    document.querySelector(".open-img").style.top = "0";
    document.querySelector(".open-img").style.left = "0";
    document.querySelector(".open-img").style.position = "fixed";

    openImg = !openImg;
  } else {
    document.querySelector(".open-img").style.width = "800px";
    document.querySelector(".open-img").style.overflow = "none";
    document.querySelector(".open-img").style.height = "auto";
    document.querySelector(".open-img").style.top = "15%";
    document.querySelector(".open-img").style.left = "15%";
    document.querySelector(".open-img").style.position = "absolute";
    openImg = !openImg;
  }
});

document.querySelector(".img-bar-window").addEventListener("click", () => {
  if (!minimizeImg) {
    document.querySelector(".open-img").style.display = "block";
    minimizeImg = !minimizeImg;
  } else {
    document.querySelector(".open-img").style.display = "none";
    minimizeImg = !minimizeImg;
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll(".apps span").forEach((el) => {
  $(el).draggable();
});

document.querySelectorAll(".window").forEach((el) => {
  // Assign Draggable
  $(el).draggable();
});

$(function () {
  $(".open-img").resizable({
    minWidth: 500,
    minHeight: 500,
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".secretfile").addEventListener("dblclick", () => {
  if (isClose) {
    document.querySelector(".open-img").style.opacity = "1";
    document.querySelector(".open-img").style.display = "block";
    document.querySelector(".open-img").style.width = "1366px";
    document.querySelector(".open-img").style.overflow = "auto";
    document.querySelector(".open-img").style.height = "605px";
    document.querySelector(".open-img").style.top = "0";
    document.querySelector(".open-img").style.left = "0";
    document.querySelector(".open-img").style.position = "fixed";
    document.querySelector(".img-bar-window").style.display = "inline-block";

    isClose = !isClose;
  }
});
