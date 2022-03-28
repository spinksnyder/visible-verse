function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.increaseBtn = this.counter.querySelector(".increase");
  this.decreaseBtn = this.counter.querySelector(".decrease");
  this.resetBtn = this.counter.querySelector(".reset");
  this.valueDOM = this.counter.querySelector(".value");
  this.valueDOM.textContent = this.value;
  // console.log(this);

  // this.increase points to button, not counter as listener is called on button
  // this.increaseBtn.addEventListener("click", this.increase);
  // below wil run but will be problematic when event listener is removed
  // this.increaseBtn.addEventListener("click", this.increase.bind(this));

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  // now adding event listener to btn and referencing variables
  this.increaseBtn.addEventListener("click", this.increase);
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

function getElementByClass(selection) {
  const element = document.querySelector("." + selection);
  if (element) {
    return element;
  }
  throw Error(`Please check ".${selection}" selector, element does not exists`);
}

Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
  console.log(this);
  this.value--;
  this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
  console.log(this);
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
const firstCounter = new Counter(getElementByClass("first-counter"), 100);

const secondCounter = new Counter(getElementByClass("second-counter"), 200);
