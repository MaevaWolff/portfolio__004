const myName = document.getElementById("me");
const mePicture = document.querySelector(".me");
console.log(mePicture);

myName.addEventListener("mouseover", function () {
  mePicture.classList.add("opacity");
  setTimeout(() => {
    mePicture.classList.remove("opacity");
  }, 5000);
});

const body = document.querySelector("body");
const click = document.querySelector(".click");

console.log(body);

click.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});
