// function sum(a, b) {
//   return a + b
// }
//
// function cube(a) {
//   return a ** 3
// }

const sum = (a, b) => a + b
const cube = a => a ** 3
const getPow = (a, b = 5) => a ** b

console.log(sum(41, 1))
console.log(cube(2))
console.log(getPow(2))
console.log(getPow(2, 2))

let getArr = [1, 2, 3, 4, 5, 6, 7]

setTimeout(() => console.log(getArr.map(item => item ** 2)), 1000)


setInterval(() => console.log(getArr.push(0)), 3000)
