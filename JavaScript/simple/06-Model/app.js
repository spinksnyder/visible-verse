const modelButton = document.querySelector(".modal-btn");
const closeButton = document.querySelector(".close-btn");
const modelOverlay = document.querySelector(".modal-overlay");

modelButton.addEventListener("click", function () {
  modelOverlay.classList.add("open-modal");
});

closeButton.addEventListener("click", function () {
  modelOverlay.classList.remove("open-modal");
});
