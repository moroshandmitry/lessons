// Time
setInterval(function(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10) ? `0${hours}` : `${hours}`;
  minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`;  
}, 1000);

// Elements of array
const array = ['html', 'css', 'javascript'];

// Add element in array
array[3] = 'jquery';
console.log(array);

// Create array with lenght 5
const arrayNew = new Array(5);
console.log(arrayNew[0]); // undefined

// Shorten array
const arr = [1, 2, 3, 4, 5];
arr.length = 2; // shorten to 2 elements
console.log(arr); // [1, 2]

// Create or delete element of array
const myArr = ['html', 'css', 'javascript'];
myArr.pop(); // delete last element - javascript
console.log(myArr); // ['html', 'css']

myArr.push('jquery'); // add last element - jquery
console.log(myArr); // ['html', 'css', 'jquery']

myArr.shift(); // delete first element html
console.log(myArr); // ['css', 'jquery']

myArr.unshift('bootstrap'); // add first element - bootstrap
console.log(myArr); // ['bootstrap', 'css', 'jquery']

// Multidimensional arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
  ];
console.log(matrix[1][1]); //5
console.log(matrix[2][0]); //7

// Create array with cycle for
const count = 3;
const createElemArray = new Array();
for(let i = 0; i < count; i++) {
  createElemArray.push(i);
}
console.log(createElemArray);

// Sum of matrixAray
const  matrixAray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Option one of sum
let sum = 0;
for (let i = 0; i < matrixAray.length; i++) {
  for (let j = 0; j < matrixAray[i].length; j++) {
    // console.log(matrixAray[i][j]);
    sum += matrixAray[i][j];
  }
}
console.log(sum); // 45

// Option two of sum - flat() concat array in one
const result = matrixAray.flat().reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(result); // 45

// concat() arrays
const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const children = hege.concat(stale);
console.log(children);

// most populars methods - map(), filter(), sort()

// map()
const numbers = [4, 9, 16, 25];

console.log(numbers.map(Math.sqrt)); // [2, 3, 4, 5];

const multiplyTo = (num) => num * 10;
console.log(numbers.map(multiplyTo)); // [40, 90, 160, 250];

const arrPow = (numArray) => numArray ** 2;
console.log(numbers.map(arrPow)); // [16, 81, 256, 625];

const names = ['HTML', 'CSS', 'JavaScript'];
const nameLengths = (name) => name.length;
console.log(names.map(nameLengths)); // 4,3,10

// for method filter(), find()
const ages = [32, 33, 16, 40];
const checkAdult = (age) => age >= 18;

// filter()
console.log(ages.filter(checkAdult)); // [32, 33, 40];

// find()
console.log(ages.find(checkAdult)); // 32

// findIndex()
console.log(ages.findIndex(checkAdult)); // 0

// sort() - lowest to highest 'a-z'
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort()); // ["Apple", "Banana", "Mango", "Orange"];

// split() - 'separator' string to array
const strNames = 'html, css, javascript';
const strArr = strNames.split(', ');
console.log(strArr); // ['html', 'css', 'javascript'];

// reverse() // join() - 'unite' array to string
const myString = ['html', 'css', 'javascript'];
console.log(myString.reverse().join()); // javascript,css,html

// forEach()
const newArray = ['html', 'css', 'javascript'];
newArray.forEach(function(item, i, newArray) {
  console.log(`${i}: ${item} (массив: ${newArray})`);
  console.log(`${i}: ${item}`);
  console.log(`${item}`);
});

// positive numbers of array
const newArr = [1, -1, 2, -2, 3];
const positiveArr = newArr.filter((number) => number > 0);
console.log(positiveArr); // 1,2,3