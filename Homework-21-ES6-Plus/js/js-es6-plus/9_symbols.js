const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
//
// console.log(symbol === other)

const objOne = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
}

for (let key in objOne) {
  console.log(key)
}

console.log(objOne.demo)
console.log(objOne[symbol])

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
