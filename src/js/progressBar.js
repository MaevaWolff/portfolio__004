const progressBar = document.querySelector(".progressBar");
const projects = document.querySelector(".projects");
const totalHeight = projects.offsetHeight;
const positionScroll = window.innerHeight;
let position = totalHeight / positionScroll;

const doc = document.innerHeight;

console.log(doc);
console.log(position);

window.addEventListener("scroll", () => {
  if (position != totalHeight) {
    position += 20;
    progressBar.style.height = `${position}px`;
  } else {
    position -= 30;
    progressBar.style.height = `${position}px`;
  }
});
