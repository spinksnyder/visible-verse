class Gallary {
  constructor(element) {
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
    this.loadModal = this.loadModal.bind(this);

    this.container.addEventListener("click", this.loadModal);
  }

  loadModal(event) {
    if (event.target.classList.contains("img")) {
      this.openModal(event.target, this.imgList);
    }
  }

  openModal(selectedImage, images) {
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
  }

  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", this.nextImage);
    this.prevBtn.removeEventListener("click", this.prevImage);
    this.modalImages.removeEventListener("click", this.chooseImage);
  }

  nextImage() {
    const selected = this.modalImages.querySelector(".selected");
    const next =
      selected.nextElementSibling || this.modalImages.firstElementChild;
    selected.classList.remove("selected");
    next.classList.add("selected");
    this.setMainImage(next);
  }

  prevImage() {
    const selected = this.modalImages.querySelector(".selected");
    const prev =
      selected.previousElementSibling || this.modalImages.lastElementChild;
    selected.classList.remove("selected");
    prev.classList.add("selected");
    this.setMainImage(prev);
  }

  chooseImage(event) {
    if (event.target.classList.contains("modal-img")) {
      const selected = this.modalImages.querySelector(".selected");
      selected.classList.remove("selected");
      this.setMainImage(event.target);
      event.target.classList.add("selected");
    }
  }

  setMainImage(selectedImage) {
    this.modalImg.src = selectedImage.src;
    this.imageName.textContent = selectedImage.title;
  }
}

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const nature = new Gallary(getElement(".nature"));
const city = new Gallary(getElement(".city"));
