const navToogle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToogle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
