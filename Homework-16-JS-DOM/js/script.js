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

console.log(`typeof 1 - ${typeof 1}`);
console.log(`typeof NaN - ${typeof NaN}`);
console.log(`typeof "Hi" - ${typeof "Hi"}`);
console.log(`typeof true - ${typeof true}`);
console.log(`typeof Symbol("Hi") - ${typeof Symbol("Hi")}`);
console.log(`typeof BigIng - ${typeof BigInt("99999999999999999999")}`);
console.log(`typeof undefinedVariable - ${typeof undefinedVariable}`);
console.log(`typeof function(){} - ${typeof function () { }}`);
console.log(`typeof [] - ${typeof []}`);
console.log(`typeof {} - ${typeof {}}`);
console.log(`typeof null - ${typeof null}`);

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
const sqareOne = function(numOne) {
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

  return function() {
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
    print: function() {
      console.log(fw.join(" "))
    },
    add: function(framework) {
      fw.push(framework)
    },
  }
}
const manager = createFrameworkManager()
// console.log(manager);
manager.print() // Angular React
manager.add("VueJS")
manager.print() // Angular React VueJS

// closures = замыкания 3
const fib = [1, 2, 3, 5, 8, 13]

for (let i = 0; i < fib.length; i++) {

  setTimeout(function() {
    console.log(`fib ${i} = ${fib[i]}`);
  }, 1500)
  
}

// closures = замыкания 4 iife = Imediate Invoked Function Expression
let result = []
for (let i = 0; i < 5; i++) {
  result.push( function () {
    return i
  } )
}
console.log(result)
console.log(result[2]()) // 2
console.log(result[4]()) // 4

// closures = замыкания 5 iife = Imediate Invoked Function Expression
let resultOne = []
for (let i = 0; i < 5; i++) {
  resultOne.push( function () {
    console.log(i);
  } )
}
resultOne
resultOne[2]() // 2
resultOne[4]() // 4

// Context JS 1 = is not scope
const person = {
  surname: "Stark",
  knows: function(what, name) {
    console.log(`You know ${what} about ${name} ${this.surname}`);
  }
}
const jon = { surname: "Snow"}

person.knows("all", "Bran")
person.knows.call(jon, 'nothing', 'Jon')
person.knows.apply(jon, ['nothing', 'Jon'])
// spread operator ...
person.knows.call(jon, ... ['nothing', 'Jon'])
person.knows.bind(jon, 'nothing', 'Jon')()

const bound = person.knows.bind(jon, 'nothing', 'Jon')()
bound()

//  Context JS 2 => ES5
function Person(name, age) {
  this.name = name
  this.age = age

  console.log(this);
}
// undefined because not call function
const maxim = new Person('Maxim', 20) // { name: "Maxim", age: 20 }

// https://www.youtube.com/watch?v=M_pclb-58ZY&list=PLFxYEcXBH1n3VXRzBJeN5u1RpupciSQfJ&index=28
// stoped this 1:11:11

// // LODASH
// // clone array
// const objects = [1, 2, 3]
// const deep = _.cloneDeep(objects)
// console.log(deep)
