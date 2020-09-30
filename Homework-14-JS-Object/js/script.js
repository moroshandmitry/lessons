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

// Array objects
var anotherDinosaurs = [
  { name: "Тираннозавр рекс", period: "Верхнемеловой" },
  { name: "Стегозавр", period: "Верхнеюрский" },
  { name: "Платеозавр", period: "Триасовый" },
];
console.log(anotherDinosaurs[0]); // { name: "Тираннозавррекс", period: "Верхнемеловой" }
console.log(anotherDinosaurs[0]["name"]); // Тираннозавр рекс
console.log(anotherDinosaurs[1].period); // Верхнеюрский

const anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
const dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
const kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

const friends = [anna, dave, kate];
console.log(friends[1]); // Object { name: "Dave", age: 5, luckyNumbers: (3) […] }
console.log(friends[0].name); // Anna
console.log(`${friends[2].name} ${friends[2].luckyNumbers[2]}`); // Kate 3

// owedMoney
const owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;

owedMoney["Jimmy"]; // 5
owedMoney["Alice"]; // undefined

owedMoney["Jimmy"] += 3;
console.log(`Jimmy owes ${owedMoney["Jimmy"]}$`); // 8

console.log(owedMoney); // Object { Jimmy: 8, Anna: 7 }

// movies
const movies = {
  "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD",
  },
  "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["МаркХэмилл", "ХаррисонФорд", "КэрриФишер"],
    format: "DVD",
  },
  "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["ДэниелРэдклифф", "ЭммаУотсон", "РупертГринт"],
    format: "Blu-ray",
  },
};

console.log(movies["В поисках Немо"]); // Object { releaseDate: 2003, duration: 100, actors: (3) […], format: "DVD" }
const findingNemo = movies["В поисках Немо"];
console.log(findingNemo); // Object { releaseDate: 2003, duration: 100, actors: (3) […], format: "DVD" }
console.log(findingNemo.actors); // [ "Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд" ]

// add movie cars in object movies
const cars = {
  releaseDate: 2006,
  duration: 117,
  actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
  format: "Blu-ray",
};
movies["Тачки"] = cars;
console.log(Object.keys(movies));

// scores
const scores = {
  maxim: 0,
  dmitry: 0,
};
scores.maxim += 3;
scores.dmitry += 7;

scores.maxim += 4;
scores.dmitry += 3;

console.log(scores);

// How to extract the number 123 from this object with one line of JavaScript code? Test your solution by running it in the console.
const myCrazyObject = {
  name: "Нелепый объект", 
  "some array": [7,  9,  {  purpose: "путаница",      number: 123, },  3.3, ],
  "random animal": "Банановая акула",
};
console.log(myCrazyObject["some array"][2].number); // 123
console.log(myCrazyObject["some array"][2]["number"]); // 123

// terms
const name = "Николай";
console.log("Привет, " + name);
if (name.length > 6) {
  console.log("Ну и длиннющее же у Вас имя!");
} else {
  console.log("Имя у Вас не из длинных.");
}

const lemonChicken = false;
const beefWithBlackBean = true;
const sweetAndSourPork = true;
if (lemonChicken) {
  console.log("Отлично! Я буду курицу с лимоном!");
} else if (beefWithBlackBean) {
  console.log("Заказываю говядину."); // Until the first true
} else if (sweetAndSourPork) {
  console.log("Ладно, закажу свинину.");
} else {
  console.log("Чтож, остаетсяриссяйцом.");
}

const anotherName = "Dmitry";
if (anotherName === anotherName) {
  console.log("Привет мне!");
} else if (anotherName === "Nikolay") {
  console.log("Привет незнакомец!");
}

// While
let sheepCountedWhile = 10;
while (sheepCountedWhile <= 10) {
  console.log(
    `Посчитано овец циклом While: ${sheepCountedWhile} из ${sheepCountedWhile} все на месте!`
  );
  sheepCountedWhile++;
}

// for
const sheepCountedFor = 10;
for (let i = 0; i < sheepCountedFor; i++) {
  console.log(
    `Посчитано овец циклом for: ${sheepCountedFor} из ${sheepCountedFor} все на месте!`
  );
}

// String + animals[i]
const animals = ["лев", "фламинго", "белый медведь", "удав"];
for (let i = 0; i < animals.length; i++) {
  console.log(`В этом зоопарке есть ${animals[i]}.`);
}

// String + named[i]
const named = "Dmitry!";
for (let i = 0; i < named.length - 1; i++) {
  console.log(`My name consist character ${named[i]}`);
}

// 2 4 8 16...
for (let x = 2; x < 1000; x *= 2) {
  console.log(x);
}

// 3 9 27...
for (let y = 3; y < 1000; y *= 3) {
  console.log(y);
}

// 3 9 27...
let z = 3;
while (z < 1000) {
  console.log(z);
  z *= 3;
}

// String + anotherAnimals[i]
const anotherAnimals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
for (let i = 0; i < anotherAnimals.length; i++) {
  anotherAnimals[i] = `${anotherAnimals[i]} - прекрасное животное`;
}
console.log(anotherAnimals);

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const randomSimbol = Math.floor(Math.random() * alphabet.length);
console.log(alphabet.charAt(randomSimbol));

// h4ck3r sp34k
const input = "javascript is awesome";
let output = "";

for (let i = 0; i < input.length; i++) {
  output += hackLang(input[i]);
}

function hackLang(input) {
  switch (input) {
    case "a":
      return "4";
    case "e":
      return "3";
    case "i":
      return "1";
    case "o":
      return "0";
    default:
      return input;
  }
}
console.log(input); // javascript is awesome
console.log(output); // j4v4scr1pt 1s 4w3s0m3

// // game
// const firstName = prompt("Как Вас зовут?");

// if (firstName === null) {
//   console.log("Вы отменили");
// }
// else if (firstName === "") {
//   console.log("Вы не ввели имя");
// }
// else {
//   console.log("Привет, "+ firstName);
// }

// const likesCats = confirm("Тебе нравятся кошки?");
// if (likesCats) {
//   console.log("Ты классная кошка!");
// } else {
//   console.log("Чтож, не проблема. Все равно ты молодец!");
// }

// guess the word
let curentQuestion;
const askInput = document.querySelector(".answer");
const tries = document.querySelector(".game-try");
const letters = [];
let counter = 10;

const questions = [
  {
    question: "Человеческие способности довольно велики. Например, мы можем собственными силами разогнать воздушный поток до 150–170 км/ч. В процессе чего человек способен произвести такой воздушный поток?",
    answer: "Чихание",
  },
  {
    question: "Как называется остров где располагается статуя Свободы? Подсказка - \"США\"",
    answer: "Свободы",
  },
  {
    question: "Где находится пирамида Хеопса и большой Сфинкс? Подсказка - \"Египед\"",
    answer: "Гиза",
  },
  {
    question: "Где находится колицей? Подсказка - \"Италия\"",
    answer: "Рим",
  },
  {
    question: "Где находится Тадж-Махал? Подсказка - \"Индия\"",
    answer: "Агра",
  },
  {
    question: "Как называется королевство где находится Стоунхендж? Подсказка - \"Великобритания\"",
    answer: "Уилтшир",
  },
  {
    question: "Где находятся висячие сады Семирамиды?",
    answer: "Вавилон",
  },
  {
    question: "Где находится статуя Зевса? Подсказка - \"Греция\"",
    answer: "Олимпия",
  },
  {
    question: "Где находится храм Артемиды? Подсказка - \"Турция\"",
    answer: "Эфес",
  },



];

function startTheGame() {
  curentQuestion = questions[Math.floor(Math.random() * questions.length)];
  document.querySelector(".question").innerHTML = curentQuestion["question"];
  findTheWord();
  askInput.addEventListener("input", typeLetter);
}

function typeLetter(e) {
  if (e.data) {
    calcCounter(e.data)
    letters.push(e.data);
  }
  findTheWord();
}

function findTheWord() {
  const wordArray = curentQuestion["answer"].split("").map((item) => {
    const newItem = letters.find(
      (ltr) => ltr.toLowerCase() === item.toLowerCase()
    );
    return newItem || "__";
  }).join(" ");
  watchWord(wordArray);
  document.querySelector(".letters").innerHTML = wordArray;
}

function calcCounter(val) {
  if (!curentQuestion["answer"].includes(val)) {
    --counter;
    tries.innerHTML = `У Вас осталось ${counter} попыток!`;
  } else if (letters.find(item => item === val)) {
    tries.innerHTML = `Вы уже писали эту букву! У Вас осталось "${counter}" попыток!`;
  }
}

function watchWord(myWord) {
  if (!myWord.includes("_")) {
    document.querySelector(".game-result").innerHTML = `Отлично было загаданно слово ${curentQuestion["answer"]}!`;
    askInput.parentNode.removeChild(askInput);
  }
  if (counter === 0) {
    document.querySelector(".game-result").innerHTML = "Вы проиграли";
    askInput.parentNode.removeChild(askInput);
  }
}
startTheGame();
// guess the word

// Draw cats
const printMultipleTimes = function (howManyTimes, whatToDraw) { 
  for (var i = 0; i < howManyTimes; i++) { 
    console.log(i + " " + whatToDraw);  
  }
 };
 printMultipleTimes(5, "=^.^=");

 // objects transmitted by links
 const human = {
  firstName: 'DMITRY',
  lastName: 'MOROSHAN',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
 }

console.log(human.age || human.getFullName()); // // DMITRY MOROSHAN (property age isn't exist)
// create property in human
human.age = "26 years";
// rename property in human
human.firstName = "Dmitry";
// rename property in human
human.lastName = "Moroshan";
// give method getFullName() + property age
console.log(`${human.getFullName()} ${human.age}`); // Dmitry Moroshan 26 years
// create link for human
const xHuman = human;
// delete human.age
delete xHuman.age;
console.log(`value of age is "undefined" because it was deleted  - ${xHuman.age}`); // undefined
// check property in object
console.log("firstName" in human); // true
console.log("age" in human); // false because it was deleted

// removeLastChild
function removeLastChild() {
  const list = document.querySelector(".list-remove-last");
  list.removeChild(list.lastChild);
}
// removeLastChild

// removeFirstChild
function removeFirstChild() {
  const list = document.querySelector(".list-remove-first");
  // list.removeChild(list.firstChild); // worked
  list.removeChild(list.childNodes[0]);
}
// removeFirstChild