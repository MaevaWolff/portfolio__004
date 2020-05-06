const $homepage = document.getElementById("home");
const $loader = document.querySelector(".loader");
const $containerTyping = document.querySelector(".loader__typing");
const text = "Maëva WOLFF - Portfolio 2020";
let i = 0;
let letter = "";

function typing() {
  $containerTyping.style.opacity = "1";
  letter = text.slice(0, ++i);
  $containerTyping.textContent = letter;
  setTimeout(typing, 70);
}

function showHome() {
  $loader.style.display = "none";
  $homepage.style.display = "block";
}

typing();
setTimeout(showHome, 3000);
