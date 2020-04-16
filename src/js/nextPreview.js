const projects = document.querySelector(".projectsWrapper");
const buttonNext = document.querySelector(".next");

let position = 0;

buttonNext.addEventListener("click", () => {
  position -= 800;
  projects.style.transform = `translateX(${position}px)`;
});
