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

// Context
const arrowLog = () => console.log(this)

const personOne = {
  name: 'Elena',
  age: 20,
  arrowLog: arrowLog,
  delayLog: function() {
    // const self = this
    setTimeout(() => {
      console.log(`${this.name} ${this.age}`)
    }, 500)
  }
}

personOne.delayLog()
