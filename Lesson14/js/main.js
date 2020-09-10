document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector("div.show-me-text").innerHTML =
    "<h1>Hello, World</h1>";
});

let j = 1; // local variable
var i = 2; // Ecmascript 5 global variable
const k = 3; // Constant doesn't change
const text = "Hello, World";

const a = 40,
  b = 2;
const result = `${a + b} dollars`;

let c = parseInt("0");

let d = "7";

let e = "1";
e++;

let f = 2 ** 4;
let g = Math.pow(4, 3);

console.log(g);
console.log(f);
console.log(e);
console.log(Number(d));
console.log(c);
console.log(j);
console.log(typeof j);
console.log(window.i);
console.log(k);
console.log(text);
console.log(result);
