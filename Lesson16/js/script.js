// function declaration (Можно в любом порядке)
console.log(getValue(777, 333));
console.log(getValue("777", "333"));

function getValue(agr1, arg2) {
  return agr1 + arg2;
}

// function expression (Сначала декларация, потом вызов)
const sum = function (agrOne, argTwo) {
  return agrOne + argTwo;
};
console.log(sum(3, 7));

// arrow function (Работает как function expression)
const getSum = (a, b) => a + b;
console.log(getSum(3, 4));

// Math.PI
const numPi = Math.PI.toFixed(2);
console.log(numPi);

// Math.random
const rand = Math.random();
console.log(rand);

// getRandom
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const val = getRandom(1, 10);

const identVal = function (val) {
  if (val % 2 === 0) {
    console.log(`even number ${val}`);
  } else {
    console.log(`odd number ${val}`);
  }
};
identVal(val);

// Date
let now = new Date();
console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);

// new  Date(Year, month, date, hours, minutes, seconds, ms)
// new dete(2011, 0, 1, 0, 0, 0, 0);

let x = 10;
let str = new String(x);
console.log(str);
console.log(str[0]); // 1
console.log(str[1]); // 0

const name = "Mariam";
console.log(name.length);
console.log(name.toUpperCase());
