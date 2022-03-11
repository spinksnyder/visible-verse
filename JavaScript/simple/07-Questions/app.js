//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (eachQuestion) {
  const questionButton = eachQuestion.querySelector(".question-btn");
  questionButton.addEventListener("click", function () {
    eachQuestion.classList.toggle("show-text");

    //   iterate over each question and removing class by comparing current selected question with other questions
    questions.forEach(function (questionItem) {
      if (questionItem != eachQuestion) {
        questionItem.classList.remove("show-text");
      }
    });
  });
});

// traversing the dom
/*
const questionButton = document.querySelectorAll(".question-btn");

// iterate over each button and add show-text class to article so that child class is affected by that
questionButton.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const question = event.currentTarget.parentElement.parentElement;
    //   all the descendent elements will be affected that are given in
    question.classList.toggle("show-text");
  });
});
*/
