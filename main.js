"use strict";
let openAlert = true;

// * Alert Box
//////////////////////////////////////////////////////////////////////////////////////////////
setTimeout(() => {
  document.querySelector(".open-alert").style.display = "inline-block";
}, 1000);

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
    openImg = !openImg;
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

document.querySelectorAll(".dragable").forEach((el) => {
  $(el).draggable();
});

$(function () {
  $(".open-img").resizable({
    minWidth: 500,
    minHeight: 300,
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector(".secretfile").addEventListener("dblclick", () => {
  if (isClose) {
    document.querySelector(".open-img").style.opacity = "1";
    document.querySelector(".open-img").style.display = "block";
    document.querySelector(".open-img").style.width = "1366px";
    document.querySelector(".open-img").style.overflowY = "auto";
    document.querySelector(".open-img").style.overflowX = "hidden";
    (document.querySelector(".open-img").style.height =
      document.querySelector(".start-bar").left + window.scrollX) + "px",
      (document.querySelector(".open-img").style.top = "0");
    document.querySelector(".open-img").style.left = "0";
    document.querySelector(".open-img").style.position = "fixed";
    document.querySelector(".img-bar-window").style.display = "inline-block";

    isClose = !isClose;
  }
});

let rightMenu = false;

window.oncontextmenu = function (event) {
  document.querySelector(".rightMenu").style.display = "block";
  document.querySelector(".rightMenu").style.left =
    String(event.clientX) + "px";
  document.querySelector(".rightMenu").style.top = String(event.clientY) + "px";
  rightMenu = !rightMenu;
  event.preventDefault();
  event.stopPropagation();
};

document.querySelector(".top-window").addEventListener("click", () => {
  if (document.querySelector(".rightMenu").style.display === "block") {
    document.querySelector(".rightMenu").style.display = "none";
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////
function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}
const y = getOffset(document.querySelector(".winBtn")).top;
document.querySelector(".start-menu").style.top = y - 488 + "px";

let startMenu = false;

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (startMenu) {
    if (event.key === "Escape") {
      document.querySelector(".start-menu").style.display = "none";
    }
    startMenu = !startMenu;
  } else {
    if (event.key.toLocaleLowerCase() === "m") {
      document.querySelector(".start-menu").style.display = "flex";
    }
    startMenu = !startMenu;
  }
});

document.querySelector(".winBtn").addEventListener("click", () => {
  if (startMenu) {
    document.querySelector(".start-menu").style.display = "none";
    startMenu = !startMenu;
  } else {
    document.querySelector(".start-menu").style.display = "flex";
    startMenu = !startMenu;
  }
});

document.querySelector("section").addEventListener("click", () => {
  if (startMenu) {
    document.querySelector(".start-menu").style.display = "none";
    startMenu = !startMenu;
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(".line-up-icons").addEventListener("click", () => {
  document.querySelectorAll(".apps span").forEach((el) => {
    el.style.top = 0;
    el.style.left = 0;
    el.style.bottom = 0;
    el.style.right = 0;
  });
});
