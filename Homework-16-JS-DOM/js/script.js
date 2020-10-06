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
console.log(`typeof "Hi" - ${typeof "Hi"}`);
console.log(`typeof true - ${typeof true}`);
console.log(`typeof Symbol("Hi") - ${typeof Symbol("Hi")}`);
console.log(`typeof BigIng - ${typeof BigInt("99999999999999999999")}`);
console.log(`typeof undefinedVariable - ${typeof undefinedVariable}`);
console.log(`typeof function(){} - ${typeof function(){}}`);
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
  let a  = 1;

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

// LODASH
// clone array
const objects = [1, 2, 3];
const deep = _.cloneDeep(objects);
console.log(deep);

// https://www.youtube.com/watch?v=M_pclb-58ZY&list=PLFxYEcXBH1n3VXRzBJeN5u1RpupciSQfJ&index=28