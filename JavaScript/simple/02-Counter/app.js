// setting initial value to 0
let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else count = 0;
    value.textContent = count;

    let color = "black";
    if (count < 0) {
      color = "red";
    } else if (count > 0) {
      color = "green";
    } else color = "black";
    value.style.color = color;
  });
});
