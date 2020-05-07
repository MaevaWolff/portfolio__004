const $projects = document.querySelector(".worksWrapper");
const $buttonNext = document.querySelector(".next");
const $buttonPrev = document.querySelector(".prev");
let position = 0;
let numberMax = 0;

let NextWorks = () => {
  if (numberMax < 2) {
    console.log(numberMax);
    numberMax++;
    position -= 800;
    $projects.style.transform = `translateX(${position}px)`;
    $buttonPrev.classList.add("isVisible");
  }
  if (numberMax == 1) {
    $buttonNext.classList.add("isVisible");
  }
  if (numberMax === 3) {
    console.log(numberMax);
    $buttonNext.classList.add("isInvisible");
  }
};

let PrevWorks = () => {
  if (numberMax == 1) {
    console.log(numberMax);
    numberMax--;
    position += 800;
    $projects.style.transform = `translateX(${position}px)`;
    $buttonNext.classList.add("isVisible");
    $buttonPrev.classList.add("isInvisible");
  }
  if (numberMax == 2) {
    console.log(numberMax);
    numberMax--;
    position += 800;
    $projects.style.transform = `translateX(${position}px)`;
    $buttonPrev.classList.add("isVisible");
    $buttonNext.classList.add("isVisible");
  }
};

$buttonNext.addEventListener("click", () => {
  NextWorks();
});

$buttonPrev.addEventListener("click", () => {
  PrevWorks();
});
