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

document.body.style.background = "lightblue"; // сделать фон красным
setTimeout(() => document.body.style.background = "", 1000); // вернуть назад

console.log(navigator.platform);
console.log(navigator.userAgent);
console.log(navigator.product);
console.log(location.href);

console.log(document.getElementsByTagName('a')) // HTMLCollection { 0: a, 1: a, length: 2 }

const getTagA = document.getElementsByTagName('a')[0] // <a href="https://google.github.io/styleguide/jsguide.html" target="_blank">
const getAttrA = getTagA.getAttribute('href') // https://google.github.io/styleguide/jsguide.html
console.log(getTagA)
console.log(getAttrA)

const tecnology = document.querySelector(".tecnology");

tecnology.addEventListener("mouseover", mouseOver);

function mouseOver() {
  tecnology.style.color = "red";
}

tecnology.addEventListener("mouseout", mouseOut);

function mouseOut() {
  tecnology.style.color = "";
}

const list = document.querySelector(".list");
// matches = совпадения
// if method matches() consist in list selector .list
if (list.matches(".list")) {
  list.style = "color:brown; list-style:none; font-size:1.3em; font-weight:700;";
  list.firstElementChild.style.color = "darkblue";
  list.lastElementChild.style.color = "tomato";

  function addElem() {
    let node = document.createElement("li");
    let textnode = document.createTextNode("New LI");
    node.appendChild(textnode);
    list.appendChild(node);
  }

}
else {
  list.innerHTML = "This element does not match the \".list\" CSS selector";
}

const elementsLi = document.getElementsByTagName('LI')
for (let i = 0; i < elementsLi.length; i++) {
  // console.log(elementsLi[i].tagName)
  console.log(elementsLi[i].previousSibling.nextSibling)

  if (elementsLi[i].nodeType === 1) {
    console.log('Это узел элемента')
  }
}

//[...elementsLi].forEach(item => {console.log(item.parentNode)}) // 4 UL


console.log(`typeof 1 - ${typeof 1}`);
console.log(`typeof NaN - ${typeof NaN}`);
console.log(`typeof NaN === NAN => false - ${typeof NaN === NaN}`);
console.log(`typeof "Hi" - ${typeof "Hi"}`);
console.log(`typeof true - ${typeof true}`);
console.log(`typeof Symbol("Hi") - ${typeof Symbol("Hi")}`);
console.log(`typeof BigIng - ${typeof BigInt("99999999999999999999")}`);
console.log(`typeof undefinedVariable - ${typeof undefinedVariable}`);
console.log(`typeof function(){} - ${typeof function () { }}`);
console.log(`typeof [] - ${typeof []}`);
console.log(`typeof {} - ${typeof {}}`);
console.log(`typeof null - ${typeof null}`);

// Clone array
const myArray = ['will', 'love']
const data = ['You', ...myArray, 'spread', 'operator']
const dataOne = [...myArray]
const copy = myArray;

console.log(data) // ['You', 'will', 'love', 'spread', 'operator']
console.log(dataOne) // ['will', 'love']

console.log(myArray === dataOne) // false
console.log(myArray === copy) // true


// LODASH
// clone array
const objects = [1, 2, 3]
const deep = _.cloneDeep(objects)
console.log(deep)

let x = 5; // 5
let y = x; // 5 = 5
y++ // 6
console.log(x); // 5
console.log(y); // 6

// clone array
let a = [1, 2, 3];
let b = a; // link on array
b.push(4); // [1, 2, 3, 4]
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3, 4]
console.log(a === b); // true

// without mutation
let c = [1, 2, 3];
// method concat() or slice() without parameters return copy of array
let d = c.concat(); // clone array in d = [1, 2, 3] + d.push(4) = [1, 2, 3, 4];
d.push(4);
console.log(c); // [1, 2, 3]
console.log(d); // [1, 2, 3, 4]
console.log(c === d); // false
console.log(`typeof c = [1, 2, 3] => ${typeof c}`); // Object

// scope - область видимости
function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log('funcC', a, b, c);
    }
    funcC();

    console.log('funcB', a, b);
  }
  funcB();

  console.log('funcA', a);
}
funcA();

let newA = "Variable a"; // global
let newB = "Variable b"; // global
// { block of instructions (scope) }
{
  newA = "New Variable A"; // from global newA is global
  let newB = "Local Variable B"; // new loсal newB

  console.log("Scope newA -", newA); // global newA  = New Variable A
  console.log("Scope newB -", newB); // local newB = Local Variable B
}
console.log("Scope newA -", newA); // global newA  = New Variable A
console.log("Scope newB -", newB); // global newB = Variable b

// Hoisting - function declaration
console.log(sum(1, 41)); // 42

function sum(a, b) {
  return a + b;
}

// with var worked, with const or let no
var i;
console.log(i); // undefined
i = 42;
console.log(i); // 42

// function expression & function declaration
// function declaration
console.log(sqare(25)); // 625
function sqare(num) {
  return num ** 2;
}

// function expression 
const sqareOne = function (numOne) {
  return numOne ** 2;
}
console.log(sqareOne(11)); // 121

// objects and arrays can be changed by any methods, but can't reasign
const myArr = [1, 2, 3];
// myArr = [25, 50, 75, 100]; // can't reasign const
myArr.push(4);
console.log(myArr); // [1, 2, 3, 4];

//  I can change the internal state of an object, but can't reasign
const obj = {}
// obj = "" // can't reasign const
obj.firstName = "Dmitry"
obj.lastName = "Moroshan"
obj.age = 26
console.log(obj) // { firstName: "Dmitry", lastName: "Moroshan", age: 26 }
delete obj.age
console.log(obj) // { firstName: "Dmitry", lastName: "Moroshan" }

// closures = замыкания 1
function sayHelloTo(name) {
  const message = `Hello ${name}`

  return function () {
    console.log(message)
  }
}

const helloToMax = sayHelloTo("Maxim")
const helloToDmitry = sayHelloTo("Dmitry")

helloToMax() // console.log in func // Hello Maxim
helloToDmitry() // console.log in func // Hello Dmitry

console.log(helloToMax) // sayHelloTo() => function

console.log(helloToMax()) // undefined

/*
Not return nothing

return function() {
  console.log(message)
}

console.log(helloToMax()) // undefined
*/

// closures = замыкания 2
function createFrameworkManager() {
  const fw = ["Angular", "React"]

  return {
    print: function () {
      console.log(fw.join(" "))
    },
    add: function (framework) {
      fw.push(framework)
    },
  }
}
const manager = createFrameworkManager()
// console.log(manager);
manager.print() // Angular React
manager.add("VueJS")
manager.print() // Angular React VueJS

// closures = замыкания 3 + asynchrony === ассинхронность
const fib = [1, 2, 3, 5, 8, 13]

for (let i = 0; i < fib.length; i++) {

  setTimeout(function () {
    console.log(`fib ${i} = ${fib[i]}`);
  }, 1500)

}

// closures = замыкания 4 iife = Imediate Invoked Function Expression
let result = []
for (let i = 0; i < 5; i++) {
  result.push(function () {
    return i
  })
}
console.log(result)
console.log(result[2]()) // 2
console.log(result[4]()) // 4

// closures = замыкания 5 iife = Imediate Invoked Function Expression
let resultOne = []
for (let i = 0; i < 5; i++) {
  resultOne.push(function () {
    console.log(i);
  })
}
resultOne
resultOne[2]() // 2
resultOne[4]() // 4

// Context is Object 1 = is not scope
const person = {
  surname: "Stark",
  knows: function (what, name) {
    console.log(`You know ${what} about ${name} ${this.surname}`);
  }
}
const john = { surname: "Snow" }

person.knows("all", "Bran")
person.knows.call(john, 'nothing', 'John')
person.knows.apply(john, ['nothing', 'John'])
// spread operator ...
person.knows.call(john, ...['nothing', 'John'])
person.knows.bind(john, 'nothing', 'John')()

const bound = person.knows.bind(john, 'nothing', 'John')
bound()

//  Context is Object => ES5 class
function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this);
}
// undefined because not call function
const maxim = new Person('Maxim', 27) // { name: "Maxim", age: 20 }
const dmitry = new Person('Dmitry', 26) // { name: "Dmitry", age: 26 }

// explicit binding context = явная привязка контекста => this
function logThis() {
  console.log(this);
}
const newObj = {
  num: 42,
  getNum: function () { return console.log(this.num) }
}
newObj.getNum(this.getNum)

logThis.apply(newObj.num)
logThis.call(newObj.num)
logThis.bind(newObj.num)()

// implicit binding context = неявная привязка контекста => this
const animal = {
  legs: 4,
  logThis: function () {
    console.log(this)
  }
}

animal.logThis()

// arrow function
function Cat(color) {
  this.color = color
  console.log('This', this); // <= need ;
  (() => console.log('Arrow this', this))()
}

new Cat('red')

// about new
function Cats(color, name) {
  this.color = color
  this.name = name
}

const cat = new Cats('black', 'cat')
console.log(cat);

// __proto__
// ES5 => Object.getPrototypeOf()
function Dogs(name, color) {
  this.name = name
  this.color = color
}

Dogs.prototype.voice = function () {
  console.log(`Dog ${this.name} says woof`)
}

const dogs = new Dogs('Oladushek', 'white')

console.log(Dogs.prototype) // { voice: voice(), … }
console.log(dogs) // Object { name: "Oladushek", color: "white" }
console.log(dogs.__proto__ === Dogs.prototype) // true
console.log(dogs.constructor); // function Dogs(name, color)
dogs.voice()

// __proto__
function Persons() {
  Persons.prototype.legs = 2
  Persons.prototype.skin = 'white'
}
const onePerson = new Persons()
onePerson.name = 'Dmitry'

console.log('skin' in onePerson) // true
console.log(onePerson.legs); // 2
console.log(onePerson.name); // Dmitry

console.log(onePerson.hasOwnProperty('name')); // true
console.log(onePerson.hasOwnProperty('skin')); // false, because skin in prototype

// Object.create()
const proto = { year: 2020 }
const myYear = Object.create(proto)

console.log(myYear.year) // 2020
console.log(myYear.hasOwnProperty('year')) // false
console.log(myYear.__proto__ === proto) // true

// asynchrony === ассинхронность
const first = () => console.log('First')
const second = () => console.log('Second')
const third = () => console.log('Third')

first() // 1
setTimeout(second, 0) // 3
third() // 2