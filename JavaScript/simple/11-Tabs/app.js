const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");
const tabButtons = document.querySelectorAll(".tab-btn");

about.addEventListener("click", function (event) {
  const id = event.target.dataset.id;
  if (id) {
    // remove active from all buttons and add to selected one only
    tabButtons.forEach(function (btn) {
      btn.classList.remove("active");
      //   add active to targeted button
      event.target.classList.add("active");
    });

    content.forEach(function (article) {
      article.classList.remove("active");
    });
    const activeContentArticle = document.getElementById(id);

    activeContentArticle.classList.add("active");
  }
});
