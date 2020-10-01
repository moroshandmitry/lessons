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
const myStr = "I learn html!";
console.log(myStr.indexOf("learn")); // find learn
console.log(myStr.replace("html", "javascript"));  // replace javascript

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
let numInStr = "-";
for (let i = 1; i < 10; i++) {
  //numStr = `${numStr}${i}-`;
  numInStr += `${i}-`
}
console.log(numInStr);

// Task 8
const numRandom = () => { return Math.floor(Math.random() * 10); }
for (let i = 0; i < 10; i++) {
  console.log(numRandom(i));
}

// Task 9
const pushArray = ["a", "b", "c"];
pushArray.push("1", "2", "3");
console.log(pushArray);

// Task 10
const unshiftArray = [1, 2, 3];
unshiftArray.unshift(4, 5, 6);
console.log(unshiftArray);

// Task 11
const lastElArray = ["js", "css", "jq"];
console.log(lastElArray.length -1); // 2
console.log(lastElArray[lastElArray.length -1]); // jq

Array.prototype.last = function() {
  return this[this.length - 1];
 }
 console.log(lastElArray.last()); // jq

 // Task 12
 const myArray = [1, 2, 3, 4, 5];
 console.log(myArray.slice(0, 3));

 // Task 13
 const newArr = [1, 2, 3, 4, 5];
 newArr.splice(2, 2, 10, 11);
 console.log(newArr); // [ 1, 2, 10, 11, 5 ]

 // Task 14
const newArray = [];
for (let i = 1; i < 10; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += i;
  }
  newArray.push(str);
}
console.log(newArray);

// Task 15
const arrayFill = (whatToDraw, howManyTimes) => { 
  const arr = [];
  for (let i = 0; i < howManyTimes; i++) {
    arr.push(whatToDraw);
  }
  return arr;
};
console.log(arrayFill("x", 5));

// Task 16
// Как решить 16. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// Task 17
// а можно сделать, чтоб рандом был в последнем элементе самого масиива?
const lastElemArray = [1, 2, 3, 4, 5];
let lastEl = lastElemArray[lastElemArray.length -1];  // 5
lastEl = Math.floor(Math.random() * 10); // random in 5
console.log(lastEl);


// const sumArr = [1, 2, 3, 4, 5];
// for (let i = 0; i < sumArr.length; i++) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   console.log(sumArr.reduce(reducer));
// }


// const aStr = "AAaBbbbBBCaaDD"; // need 2AaB3b2BC2a2D
// if (aStr.charAt(0) === aStr.charAt(1)) {
//   let a = aStr.charAt(0) + aStr.charAt(1);
//   let x = a.length + a;
//   if (aStr.charAt(1) === aStr.charAt(2)) {
//     console.log("No")
//   } else {
//     console.log(x + aStr.charAt(2));
//   }
// }
