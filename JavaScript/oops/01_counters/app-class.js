// example for class
function getElementByClass(selection) {
  const element = document.querySelector("." + selection);
  if (element) {
    return element;
  }
  throw Error(`Please check ".${selection}" selector, element does not exists`);
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.increaseBtn = this.counter.querySelector(".increase");
    this.decreaseBtn = this.counter.querySelector(".decrease");
    this.resetBtn = this.counter.querySelector(".reset");
    this.valueDOM = this.counter.querySelector(".value");
    this.valueDOM.textContent = this.value;

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // now adding event listener to btn and referencing variables
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);
  }

  increase() {
    this.value++;
    this.valueDOM.textContent = this.value;
  }

  decrease() {
    this.value--;
    this.valueDOM.textContent = this.value;
  }

  reset() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

const firstCounter = new Counter(getElementByClass("first-counter"), 100);

const secondCounter = new Counter(getElementByClass("second-counter"), 200);
