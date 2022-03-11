const sideBarToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeButton = document.querySelector(".close-btn");

sideBarToggle.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeButton.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
