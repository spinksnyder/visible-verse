const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function (){
 // generate the random number from 0 - 3
 const randomNumber = getRandomNumber();
 let hexColor = "#";

 for(let i=0; i<6; i++){
  hexColor = hexColor + colors[getRandomNumber()];
 }
 document.body.style.backgroundColor = hexColor;
 color.textContent = hexColor;
})

function getRandomNumber(){
 return Math.floor(Math.random() * colors.length);
}