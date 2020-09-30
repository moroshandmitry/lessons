// Time
setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Task 1
const a = 3;
console.log((a > 0 && a < 5) ? true : false);
console.log((a > 0 && a < 5) || false);

// Task 2
let month;
switch (new Date().getDay()) {
  case 0:
    month = "Winter";
    break;
  case 1:
    month = "Spring";
    break;
  case 2:
    month = "Summer";
    break;
  case 3:
    month = "Autumn";
    break;
}
console.log(month);

// Task 3
const  cutStr = "aaa bbb ccc";
console.log(cutStr.substr(4, 3)); // starting from 4 element cut 3 elements
console.log(cutStr.substring(4, 7)); // starting from 4 element and end 7 element
console.log(cutStr.slice(4, 7)); // starting from 4 element and end 7 element

// Task 4
const myStr = "I learn javascript!";
console.log(myStr.indexOf("learn")); // find learn
console.log(myStr.replace("javascript", "html"));  // replace javascript

// Task 5
const websiteStr = "https://www.google.com/";
console.log(websiteStr.startsWith("https://")) // true

// Task 6
function getDay() {
  const date = new Date();
  const nummerDays = date.getDay()
  switch (nummerDays) {
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
  }
}
getDay();

// Task 7 (-1-2-3-4-5-6-7-8-9-)
let numStr = "-";
for (let i = 1; i < 10; i++) {
  //numStr = `${numStr}${i}-`;
  numStr += `${i}-`
}
console.log(numStr);

