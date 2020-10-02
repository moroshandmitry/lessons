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
const cutStr = "aaa bbb ccc";
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
console.log(lastElArray.length - 1); // 2
console.log(lastElArray[lastElArray.length - 1]); // jq

Array.prototype.last = function () {
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
const sumArr = [1, 2, 3, 4, 5];
for (let i = 0; i < sumArr.length; i++) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const fullSum = sumArr.reduce(reducer);
  if (fullSum === 10) {
    console.log(`Сумма ${sumArr.length} элементов массива равна ${fullSum}`);
  }
  else if (fullSum === 15) {
    console.log(`Сумма ${sumArr.length} элементов массива равна ${fullSum}`);
  }
  else {
    console.log(`${sumArr.length} элементов содержит массив`);
  }
}

// Task 17
const lastElemArray = [1, 2, 3, 4, 'n'];
let lastEl = lastElemArray[lastElemArray.length - 1];  // n
lastEl = Math.floor(Math.random() * 10); // random in last elem
console.log(`${lastEl} - LAST ELEMENT RANDOM`);

// Task 18
for (let i=1; i<10; i++) {
  for (let j=1; j<10; j++) {
    console.log(i*j);
  }
}

// Task 19
let simpleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reverseArr = [];

for (let i = 0; i < simpleArr.length - 1; i++) {
  reverseArr[i] = simpleArr[simpleArr.length - i];
  // reverseArr.push(simpleArr[simpleArr.length - 1 - i]);
}
/*
for (let i = 0; i < 9 - 1; i++) {
  reverseArr[0] = simpleArr[8 - 0]) // 8; i = 0;
  reverseArr[1] = simpleArr[8 - 1]) // 7; i = 1;
  reverseArr[2] = simpleArr[8 - 2]) // 6; i = 2;
  reverseArr[3] = simpleArr[8 - 3]) // 5; i = 3;
  reverseArr[4] = simpleArr[8 - 4]) // 4; i = 4;
  reverseArr[5] = simpleArr[8 - 5]) // 3; i = 5;
  reverseArr[6] = simpleArr[8 - 6]) // 2; i = 6;
  reverseArr[7] = simpleArr[8 - 7]) // 1; i = 7;
  reverseArr[8] = simpleArr[8 - 8]) // 0; i = 8;
*/
console.log(reverseArr);
console.log(simpleArr.reverse());

// Task 20
const sumNeastedArr = [
  [2, 4, 7],
  [3, 2, 6],
  [8, 5, 1]
];
const sumFlat = sumNeastedArr.flat();
const sumReducer = (accumulator, currentValue) => accumulator + currentValue;
const resultSum = sumFlat.reduce(sumReducer);
console.log(`${resultSum} - result of neasted array`);



// Task 22
let numArray = [1, 2, 3, 4, 5, 6, 7, 0, -7, -6, -5, -4, -3, -2, -1];
let posNeuNeg = numArray.filter(positiveNeutralNegative);

function positiveNeutralNegative(number) {
  if (number >= 1) {
    console.log(`Number ${number} is posivive`);
  }
  else if (number === 0) {
    console.log(`Number ${number} is neutral`);
  }
  else {
    console.log(`Number ${number} is negative`);
  }
}

// Task 24
const whoOnline = {
  Alan: { online: false },
  Jeff: { online: true },
  Sarah: { online: false },
}
console.log(whoOnline.Alan);
console.log(whoOnline.Jeff);
console.log(whoOnline.Sarah);
console.log(whoOnline.Alan.online);
console.log(whoOnline.Jeff.online);
console.log(whoOnline.Sarah.online);


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

// Task 21
//let one = digit.toString().match(/.{1,1}/g)

const getDigitsSum = (digit) => { 
  let one = digit.toString().split(""); // в строке нет пробела поэтому разделит посимвольно
  console.log(one); // [ "1", "0" ]

  const red = (accumulator, currentValue) => accumulator + currentValue;
  console.log(one.reduce(red)); // 10

}
getDigitsSum(10);


