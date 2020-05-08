const $choiceType = document.querySelectorAll(".works__choice li");
const dataSelector = "";

let choiceSelected = () => {
  for (let i = 0; i < $choiceType.length; i++) {
    $choiceType[i].addEventListener("click", () => {
      $choiceType.forEach($choiceType => {
        $choiceType.classList.remove("isSelected");
      });
      $choiceType[i].classList.add("isSelected");
    });
  }
};

choiceSelected();

// filter data

$($choiceType).click(function () {
  value = $(this).data("filter");
  $($choiceType).removeClass("active"), $(this).addClass("active");

  $(".work").each(function () {
    el = $(this);

    el.show();
    if (!el.hasClass(value) && value != "all") el.hide();
  });
});
