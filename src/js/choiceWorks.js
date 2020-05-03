const choiceType = document.querySelectorAll(".works__choice li");

let choiceSelected = () => {
  for (let i = 0; i < choiceType.length; i++) {
    choiceType[i].addEventListener("click", () => {
      choiceType.forEach(choiceType => {
        choiceType.classList.remove("isSelected");
      });
      console.log(this);
      choiceType[i].classList.add("isSelected");
    });
  }
};

choiceSelected();
