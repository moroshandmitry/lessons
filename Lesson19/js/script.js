// Even letters
const strEven = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quisquam?";
let newStrEven = [];
for (let i = 0; i < strEven.length; i += 2) {
  newStrEven += strEven[i];
}
console.log(newStrEven);

// Odd letters
const strOdd = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quisquam?";
let newStrOdd = [];
for (let i = 1; i < strOdd.length; i += 2) {
  newStrOdd += strOdd[i];
}
console.log(newStrOdd);

const a = 7;
if (a > 0 && a < 8) {
  console.log(`a = ${a}; (a > 0 && a < 8) - ${true}`);
} else {
  console.log(false);
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 0, -7, -6, -5, -4, -3, -2, -1];
const newArray = myArray.filter(positiveNeutralNegative);
function positiveNeutralNegative(number) {
  if (number >= 1) {
    console.log(`Positive ${number}`);
  }
  else if (number === 0) {
    console.log(`Neutral ${number}`);
  }
  else {
    console.log(`Negative ${number}`);
  }
}

const string = "I learn HTML!";
console.log(string.indexOf("learn")); // 2
console.log(string.replace("HTML", "JavaScript")); // I learn JavaScript!

const str = "http://google.com";
console.log(str.startsWith("http://")); // true

// Who online
function User(name, online) {
  this.name = name;
  this.online = online;
}
let user1 = new User("Alan", false);
let user2 = new User("Jeff", true);
let user3 = new User("Sarah", false);

let arr = [user1, user2, user3];
for (const user of arr) {
  if (user.online == true)
    console.log(user.name);
}
// Who online

// getDay
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
// getDay


const getRandom = () => { return Math.floor(Math.random() * 10); };

for (let i = 0; i < 10; i++) {
  console.log(getRandom(i))
}


function getWord() {
  let arr = ["Angular", "React", "Vue"];
  let last = arr[arr.length - 1];
  return last;
}
console.log(getWord());

const array = new Array();
const image = new Image();
image.src = "https://vuejs.org/images/logo.png"; // картинка закэширована, но ещё не в dom'е
array.push(image);
console.log(image);

const arra = [1, 2, 3, 4, 5];
const newArra = arra.slice(0, 3);
console.log(newArra);

for (let i = 1; i < 10; i++) {
  let str = '';
  for (let j = 0; j <= i; j++) {
    str += i;
  }
  console.log(str);
}