var root = document.querySelector(":root");
var toggle_btn = document.querySelector(".theme-toggle");
var clicks = 0;

toggle_btn.addEventListener("click", () => {
  clicks++;
  if (clicks % 2 === 0) {
    root.style.setProperty("--main-bg", "#1A1A40");
    root.style.setProperty("--header-bg", "url(../media/bg-desktop-dark.jpg)");
    root.style.setProperty("--toggle-icon", "url(../media/icon-sun.svg)");
    root.style.setProperty("--input-bg", "#2e2e5c");
    root.style.setProperty("--input-color", "#fff");
  } else {
    root.style.setProperty("--main-bg", "white");
    root.style.setProperty("--header-bg", "url(../media/bg-desktop-light.jpg)");
    root.style.setProperty("--toggle-icon", "url(../media/icon-moon.svg)");
    root.style.setProperty("--input-bg", "white");
    root.style.setProperty("--input-color", "#000");
  }
});
