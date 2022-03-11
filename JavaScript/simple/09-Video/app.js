// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector(".video-container");
const videoButton = document.querySelector(".switch-btn");

videoButton.addEventListener("click", function () {
  if (!videoButton.classList.contains("slide")) {
    videoButton.classList.add("slide");
    video.pause();
  } else {
    videoButton.classList.remove("slide");
    video.play();
  }
});

// adding preloader to let load the video and then start playing it
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
