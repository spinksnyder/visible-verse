function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

function Gallary(element) {
  // passing parent element so that image can be found on which click event is fired
  this.container = element;
  this.imgList = [...element.querySelectorAll(".img")];
  this.modal = getElement(".modal");
  this.imageName = getElement(".image-name");
  this.modalImg = getElement(".main-img");
  this.modalImages = getElement(".modal-images");
  this.closeBtn = getElement(".close-btn");
  this.prevBtn = getElement(".prev-btn");
  this.nextBtn = getElement(".next-btn");

  // bind function
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  this.chooseImage = this.chooseImage.bind(this);
  /*
  this.container.addEventListener("click", function (e) {
    // this points to container as it is on left side of the call
    console.log(this);
    this.openModal();
  });
  */
  // binding function will point back to the gallary object
  this.container.addEventListener(
    "click",
    function (e) {
      // this points to container as it is on left side of the call
      if (e.target.classList.contains("img")) {
        this.openModal(e.target, this.imgList);
      }
    }.bind(this)
  );

  /*
  // use another variable to reference gallary
  let self = this;
  this.container.addEventListener("click", function (e) {
    // this points to container as it is on left side of the call
    console.log(this);
    self.openModal();
  });
  */
}

Gallary.prototype.openModal = function (selectedImage, images) {
  this.setMainImage(selectedImage);
  // iterate over all images and create image list as html
  this.modalImages.innerHTML = images
    .map(function (image) {
      let classes = "modal-img";
      if (image.src == selectedImage.src) {
        classes += " selected";
      }
      return `<img
            src="${image.src}"
            title="${image.title}"
            data-id="${image.dataset.id}"
            class="${classes}"
          />`;
    })
    .join("");
  this.modal.classList.add("open");
  // as modal is opened, we have to add event listeners to close, next and prev button
  this.closeBtn.addEventListener("click", this.closeModal);
  this.nextBtn.addEventListener("click", this.nextImage);
  this.prevBtn.addEventListener("click", this.prevImage);
  // add event listener to list of images so that it can be targeted
  this.modalImages.addEventListener("click", this.chooseImage);
};

/* when model is closed, have to remove all the event listeners from all the 
buttons else event listeners will keep pilling up and that is not a good practice
*/
Gallary.prototype.closeModal = function () {
  this.modal.classList.remove("open");
  this.closeBtn.removeEventListener("click", this.closeModal);
  this.nextBtn.removeEventListener("click", this.nextImage);
  this.prevBtn.removeEventListener("click", this.prevImage);
  this.modalImages.removeEventListener("click", this.chooseImage);
};

Gallary.prototype.nextImage = function () {
  // get the selected image and then go to next image or if last image then choose first image
  const selected = this.modalImages.querySelector(".selected");
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove("selected");
  next.classList.add("selected");
  this.setMainImage(next);
};

Gallary.prototype.prevImage = function () {
  // get the selected image and then go to next image or if last image then choose first image
  const selected = this.modalImages.querySelector(".selected");
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove("selected");
  prev.classList.add("selected");
  this.setMainImage(prev);
};

Gallary.prototype.chooseImage = function (event) {
  if (event.target.classList.contains("modal-img")) {
    const selected = this.modalImages.querySelector(".selected");
    selected.classList.remove("selected");
    this.setMainImage(event.target);
    event.target.classList.add("selected");
  }
};

Gallary.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};

const nature = new Gallary(getElement(".nature"));
const city = new Gallary(getElement(".city"));
