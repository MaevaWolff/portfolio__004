const myName = document.getElementById("me");
const mePicture = document.querySelector(".me");
console.log(mePicture);

myName.addEventListener("mouseover", function () {
  mePicture.classList.add("opacity");
  setTimeout(() => {
    mePicture.classList.remove("opacity");
  }, 5000);
});
