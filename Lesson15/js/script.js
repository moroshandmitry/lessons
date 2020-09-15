console.log("Hello, World script.js");

let resultPrompt = prompt("Input you string and open your console", "");

if (resultPrompt === null) {
  console.log("Kay Cancel was pressed!");
} else if (resultPrompt === "0") {
  console.log("Your input is 0");
} else {
  console.log("Key OK was pressed");
  if (resultPrompt === 0) {
    console.log("Yes");
  } else if (resultPrompt > 0) {
    console.log("Yes, result is bigger then 0");
  } else if (resultPrompt < 0) {
    console.log("No, result is smaller then 0");
  } else {
    console.log(`${String(resultPrompt)} - your writed this string`);
  }
}

const a = 5;
const b = 3;
if (a > b && a === b) {
  console.log("a > b");
} else {
  console.log("a < b");
}

let resultConfirm = confirm("2 a is bigger then 1?");
resultConfirm = resultConfirm === true ? true : false;
console.log(resultConfirm);

let x = parseInt(prompt("Input your digit", 0));

switch (x) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  default:
    console.log("result is not 0 or 1");
    break;
}

function squareOfNumber(count) {
  let n = 0;
  for (let i = 0; i <= count; i++) {
    console.log(i ** 2);
  }
}

squareOfNumber(9);
