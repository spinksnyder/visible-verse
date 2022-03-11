// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const copyrightDate = document.getElementById("date");
copyrightDate.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // container will have height 0 as it is set in css
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  // links will have actual height of all the links so that it can be set on container
  const linksHeight = links.getBoundingClientRect().height;
  if (linksContainerHeight == 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************
const nav = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = nav.getBoundingClientRect().height;

  // scroll height cross navbar height then add fix nav class
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else nav.classList.remove("fixed-nav");

  // enable button to auto-scroll to top of the page
  let headerHeight = document
    .getElementById("home")
    .getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    topLink.classList.add("show-link");
  } else topLink.classList.remove("show-link");
});
// ********** smooth scroll ************

// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // first of all, prevent default behaviour
    event.preventDefault();
    // get the elements id as it is used in that section
    const id = event.currentTarget.getAttribute("href").slice(1);

    // so as link is clicked in navbar, the heading of the section is hidden behind nav bar so we have to calculate height of nav bar and sub it from position to display it properly
    const navHeight = nav.getBoundingClientRect().height;
    let position = document.getElementById(id).offsetTop;
    // substract navbar height to get actual position
    position = position - navHeight;
    // once we scroll the page, nav is fixed so we have to check that again and substract it again
    if (!nav.classList.contains("fixed-nav")) {
      position = position - navHeight;
    }
    // on small screen, links container height is also added so we will see some additional spaces before each section so to remove it, have to add container height to position
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    if (navHeight > 82) position = position + linksContainerHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
    // for samller screen, nav bar is always opened, so close it as one of the link
    // is clicked
    linksContainer.style.height = 0;
  });
});
