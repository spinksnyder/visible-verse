const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveAwayDate = document.querySelector(".giveaway");
const remainedTime = document.querySelectorAll(".deadline-format h4");
const deadline = document.querySelector(".deadline");

Date.prototype.addDays = function (days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const futureDate = new Date().addDays(5);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDay();
const date = futureDate.getDate();
let hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let meridiem = "am";
if (hours >= 12) {
  meridiem = "pm";
  hours = hours - 12;
  if (hours <= 10) {
    hours = "0" + hours;
  }
}

const giveawayMessage = `giveaway ends on ${weekdays[day - 1]}, ${date} ${
  months[month]
} ${year}, ${hours}:${minutes}${meridiem} `;

giveAwayDate.textContent = giveawayMessage;

function getRemainingTime() {
  const currentDate = new Date();
  const remainingTime = futureDate - currentDate;

  const oneMinute = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  const daysLeft = Math.floor(remainingTime / oneDay);
  const hoursLeft = Math.floor((remainingTime % oneDay) / oneHour);
  const minutesLeft = Math.floor((remainingTime % oneHour) / oneMinute);
  const secondsLeft = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  remainedTime.forEach(function (item, index) {
    item.innerHTML = prependZero(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry, giveaway has expired</h4>`;
  }
}

// adds 0 in beginning for ex 3 will be 03
function prependZero(timeValue) {
  if (timeValue < 10) {
    return `0${timeValue}`;
  } else return timeValue;
}

const countdown = setInterval(getRemainingTime, 1000);

// call it after interval so that countdown can be initialized and used inside the method
getRemainingTime();
