// getRandom Number
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Result evenOrOddNum in getRandom
const evenOrOddNum = getRandom(1, 100);

// Condition evenOrOddNum
if (evenOrOddNum % 2 === 0) {
  console.log(`Even number ${evenOrOddNum}`);
} else {
  console.log(`Odd number ${evenOrOddNum}`);
}

// Time
setInterval(function(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = (hours < 10) ? `0${hours}` : `${hours}`;
  minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
  seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;

document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`;  
}, 1000);

// Work with string
const str = "Please locate where locate occurs!";

// toUpperCase() & toLocaleLowerCase()
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

// split() delete spaces - return string as array
console.log(str.split(" "));

// split() and reverse() and join() return array in string reverse
console.log(str.split(" ").reverse().join());

// array - toString().toLocaleLowerCase().split().reverse().join()
const palindrome = ['OppO'];
const palindromeResult = palindrome.toString().toLocaleLowerCase().split().reverse().join()
console.log(palindromeResult);

// Remove spaces - trim()
const myStr = "  Hello World!  ";
myStr.trim(); // "Hello World!"

// search - indexOf()
const pos = str.indexOf("locate"); // true
console.log(pos);

// check string - includes()
const position = str.includes("locate"); // true
console.log(position);

// startsWith() & endsWith()
console.log("Widget".startsWith("Wid")); // startsWith
console.log("Widget".endsWith("get")); // endsWith

// substr() & slice()
console.log(str.substr(0,6)); // Please - return substring don't work with negative numbers
console.log(str.slice(0,6)); // Please - return substring

// Array - slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-4, -1);
console.log(myBest);

// Сompare letters
console.log( 'a' > 'Z' ); // true
console.log( 'A' > 'z' ); // false

// Search string and return index - search()
console.log(str.search('occurs!')); // return number position 27
console.log(str.search('qwerty')); // return -1

// Replace string - replace()
console.log(str.replace("occurs!", "some text"));

const myString = "lorem ipsum is simply dummy";
console.log(myString.replace('lorem', 'Lorem'));

// Compare strings
const newString = (str1, str2) => {
  str1 = "lorem ipsum is simply dummy";
  str2 = "lorem ipsum is";

  if (str1 > str2) {
    console.log(str1);
  } else {
    console.log(str2);
  }
}