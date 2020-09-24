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

// Life in seconds
const secondsInAMinute = 60;
const minutesInAnHour = 60;
const hoursInADay = 24;
const daysInAYear = 365;
const age = 27;

const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour); // 3600

const secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay); // 86400

const secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear); // 31536000

const lifeInSec = age * secondsInAYear; // 851472000
console.log(lifeInSec);

console.log("Суперпупердлиннаястрока".length); // 23

// Run
const codeWord1 = "обернись";
const codeWord2 = "неужели";
const codeWord3 = "огурцы";
const codeWord4 = "липкие";
const codeWord5 = "?!";
console.log(`${codeWord1[1]}${codeWord2[1]}${codeWord3[1]}${codeWord4[1]}${codeWord5[1]}`);

// slice()
const longString = "Эта длинная строка такая длинная";
longString.slice(4, 18); // "длинная строка"

// toUpperCase(), toLowerCase()
const myStr = "эЙ, Как дела?";
console.log(myStr.toUpperCase());
console.log(myStr[0].toUpperCase() + myStr.toLowerCase().slice(1));

// compares with||out type
const a = "10"
const b = 10;
if (a === b) {
  console.log('compares with type');
} else if (a == b) {
  console.log('compares without type');
}
console.log(a === b); // false
console.log(a == b); // true

// compare of age to go cinema
const newAge = 11;
const accompanied = true;
if (newAge > 12) {
    console.log('Go!');
} else if (newAge < 12 || accompanied) {
    console.log('Go with parents!');
} else {
    console.log('Sorry no!');
}

// show that it's empty
const myNullVariable = null;
myNullVariable;

// I can change values in const, but I can't overwrite dinosaurs because is a - const = ['new', 'array'];
const dinosaurs = ["Тираннозавр",  "Велоцираптор",  "Стегозавр",  "Трицератопс",  "Брахиозавр",  "Птеранодон",  "Апатозавр",  "Диплодок"];
dinosaurs[0] = "Тираннозавр Рекс";
dinosaurs.pop(); // delete Диплодок in last element
dinosaurs.push("Компсогнат"); // add Компсогнат in last element
dinosaurs[33] = "Филосораптор"; // 8 - 32 is undefined
console.log(dinosaurs);

// Array in array
const dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10];
console.log(dinosaursAndNumbers[2][1]);
console.log(dinosaursAndNumbers.length); // length doesn't count from zero, count from 1
console.log(dinosaursAndNumbers.length - 1); // index of array

// Array push()
var animals = [];
animals.push("Кот");
animals.push("Пес");
animals.push("Лама");
console.log(animals); // ["Кот", "Пес", "Лама"]
console.log(animals.length - 1);

// pop(), unshift()
const animalsAnother = ["Белыймедведь", "Мартышка", "Кот", "Пес", "Лама"];

const lastAnimal = animalsAnother.pop();
console.log(lastAnimal); // "Лама"
console.log(animalsAnother); // ["Белый медведь", "Мартышка", "Кот", "Пес"];

animalsAnother.pop(); // "Пес"
console.log(animalsAnother); // ["Белый медведь", "Мартышка", "Кот"];

animalsAnother.unshift(lastAnimal);
console.log(animalsAnother); // ["Лама", "Белый медведь", "Мартышка", "Кот"];

// concat() more arrays in one
const furryAnimals = ["Альпака", "Кольцехвостыйлемур", "Йети"];
const scalyAnimals = ["Удав", "Годзилла"];
const featheredAnimals = ["Ара", "Додо"];
const allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
// indexOf()
console.log(allAnimals[6]); // Додо
console.log(allAnimals.indexOf("Додо")); // 6
console.log(allAnimals.indexOf("Лев")); // -1
console.log(allAnimals); // ["Альпака", "Кольцехвостыйлемур", "Йети", "Удав", "Годзилла", "Ара", "Додо"];

// join() - return as string
const boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
console.log(boringAnimals.join(', ')); // Мартышка, Кот, Рыба, Ящерица

// Math.floor() and Math.random()
const getRandoms = (num) => {
  const randomIndex = Math.floor(Math.random() * num);
};
console.log(getRandoms(10));

// random words
const randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
const randomIndex = Math.floor(Math.random() * 4);
console.log(randomWords[randomIndex]);

// sorry for teasing (textbook = JavaScript for Kids - Nick Morgan)
const randomBodyParts = ["глаз", "нос", "череп"];
const randomAdjectives = ["вонючая", "унылая", "дурацкая"];
const randomsWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
const randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
const randomWord = randomsWords[Math.floor(Math.random() * randomWords.length)];
const randomInsult = `У тебя ${randomBodyPart} словно ${randomAdjective} ${randomWord}!!!`;
console.log(randomInsult);
// result as array + join in string
const anotherRandomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
console.log(anotherRandomInsult);

// join() - Number more than
const numArr = [3,2,1];
console.log(numArr.join(" больше, чем "));

// SIMPLE OBJECTS
// The cat
const cat = {
  legs: 4,
  name: "Гармония",
  color: "Черепаховый",
};

console.log(cat.name); // Гармония
console.log(cat["name"]); // Гармония

// The dog
const dog = {};
dog["legs"] = 4;
dog["age"] = 1;
dog["name"] = "Оладушек";
dog["color"] = "белый";
console.log(dog); // { legs: 4, age: 1, name: "Оладушек", color: "белый" }

// Array objects
var anotherDinosaurs = [  
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" }
];
console.log(anotherDinosaurs[0]); // { name: "Тираннозавррекс", period: "Верхнемеловой" }
console.log(anotherDinosaurs[0]["name"]); // Тираннозавр рекс
console.log(anotherDinosaurs[1].period); // Верхнеюрский
