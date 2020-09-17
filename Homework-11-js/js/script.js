// squareOfNumber
const squareOfNumber = {
  square: (count) => {
    for (let i = 1; i <= count; i++) {
      console.log(i ** 2);
    }
  },
};

squareOfNumber.square(9);

// prompt
let getA = prompt("Input you number or string", "");
if (getA > 0) {
  console.log(true);
} else if (getA < 0) {
  console.log(true);
} else if (Number(getA) === 0) {
  console.log(false);
} else {
  console.log(`${String(getA)} - is string`);
}

const z = 1;
let n;
console.log(z > 0 ? (n = true) : (n = false));

// Logical operators
const a = 5;
const b = 3;
console.log(a > b && a === b ? true : false);
console.log(true && 0 && "a" < "Z" ? true : false);
console.log(a > b || true || "2" == 2 || false == "" ? true : false);
console.log(a < b && 0 == false ? true : false);
console.log(!(2 == 2) || (true && "") ? true : false);

// switch case with date getDay
switch (new Date().getDay()) {
  case 0:
    console.log((day = "Sunday"));
    break;
  case 1:
    console.log((day = "Monday"));
    break;
  case 2:
    console.log((day = "Tuesday"));
    break;
  case 3:
    console.log((day = "Wednesday"));
    break;
  case 4:
    console.log((day = "Thursday"));
    break;
  case 5:
    console.log((day = "Friday"));
    break;
  case 6:
    console.log((day = "Saturday"));
}

// continue iteration after number 3
for (let iter = 1; iter <= 7; iter++) {
  if (iter === 3) {
    continue;
  } else {
    console.log(iter);
  }
}

// function getBigNum param
const getBigNum = (item1, item2) => {
  if (item1 > item2) {
    console.log(item1);
  } else {
    console.log(item2);
  }
};

getBigNum(333, 777);

// CreateObjectHuman
const human = {
  firstName: "Dmitry",
  lastName: "Moroshan",
  yearOfBirth: 1993,
  married: true,

  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  getAge: function () {
    return new Date().getFullYear() - this.yearOfBirth;
  },

  getMarried: function () {
    if (this.married) {
      return `Married: ${true}`;
    } else {
      return `Married: ${false}`;
    }
  },
};

console.log(human.getFullName());
console.log(human.getAge());
console.log(human.getMarried());

// Get Time1
setInterval(function () {
  (date = new Date()),
    (h = date.getHours()),
    (m = date.getMinutes()),
    (s = date.getSeconds()),
    (h = h < 10 ? "0" + h : h),
    (m = m < 10 ? "0" + m : m),
    (s = s < 10 ? "0" + s : s),
    (document.querySelector(".time").innerHTML = h + ":" + m + ":" + s);
}, 1000);

// My slider
const images = [
  "./img/planet0.jpg",
  "./img/planet1.jpg",
  "./img/planet2.jpg",
  "./img/planet3.jpg",
  "./img/planet4.jpg",
  "./img/planet5.jpg",
];
let num = 0;
function next() {
  const slider = document.querySelector(".my-slider-img");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  const slider = document.querySelector(".my-slider-img");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
}

setInterval(function () {
  const slider = document.querySelector(".my-slider-img");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}, 3000);

// Calculator
const operationButtons = document.getElementsByClassName("operation-button");

function onOperationButtonClick(eventObject) {
  const clickedElement = eventObject.currentTarget;
  const operation = clickedElement.innerHTML;
  makeOperation(operation);
}

for (let i = 0; i < operationButtons.length; i++) {
  let button = operationButtons[i];
  button.addEventListener("click", onOperationButtonClick);
}

const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");

function makeOperation(operationCode) {
  let number1 = Number(input1.value);
  let number2 = Number(input2.value);
  let result;

  if (operationCode === "+") {
    result = number1 + number2;
  } else if (operationCode === "-") {
    result = number1 - number2;
  } else if (operationCode === "*") {
    result = number1 * number2;
  } else if (operationCode === "/") {
    result = number1 / number2;
  } else {
    window.alert("Operation is unknown");
  }
  window.alert(result);
}

// Color text
function changeColor(newColor) {
  var elem = document.getElementById("text");
  elem.style.color = newColor;
}

// addEventListener
document.querySelector(".btn-event").addEventListener("click", function () {
  document.querySelector(".event").innerHTML =
    "<h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>";
});
