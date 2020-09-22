const array = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing.",
];
console.log(array);
console.log(array.length);

const clonedArray = array.slice(0);
console.log(clonedArray);

const array2 = new Array(
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing."
);
console.log(array2);

const array3 = new Array(5);
array3[1000] = 1;
console.log(array3[1000]);
// length show the last element of array
console.log(array3.length);

array3.length = 2;
console.log(array3);

// push, pop is fast speed compile
// shift unshift is low speed compile

const array4 = [0, 1, 2, 3, 4, 5];
console.log(array4.push()); // create el 6

console.log(array4.pop()); // delete last el

// Sum of array
const Arr22 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let i = 0; i < Arr22.length; i++) {
  for (let j = 0; j < Arr22[i].length; j++) {
    console.log(Arr22[i][j]);
    sum += Arr22[i][j];
  }
}
console.log(sum);

// let Arr3 = new Array();
// let cnt = 0;
// while (1) {
//   let txt = prompt("Input elements in your array", 0);
//   if (txt == null) {
//     break;
//   } else {
//     Arr3.push(txt);
//   }

//   if (cnt == 2) break;
//   cnt++;
// }
// console.log(Arr3);

// split() = string in array
const str = "Lorem ipsum dolor sit amet consectetur adipisicing.";
const myArr = str.split(" ");
console.log(myArr);
// for of in array
for (const item of myArr) {
  console.log(item);
}

// join() = array in string
const myArr2 = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing.",
];
const str2 = myArr2.join(" ");
console.log(str2);
