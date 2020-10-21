const cityField = 'city'

const job = 'Frontend'

const personTwo = {
  age: 26,
  name: 'Irina',
  job,
  [cityField]: 'Saint-Peterburg',
  'country-live': 'Russia',
  print: () => 'personTwo',
  toString() {
    return Object
      .keys(this)
      .filter(key => key !== 'toString')
      .map(key => this[key])
      .join(' ')
  }
}

// console.log(personTwo.toString())
// console.log(personTwo.print())
// console.log(personTwo)

// Methods
const first = {a: 1}
const second = {b: 2}

// console.log(Object.is(20, 20))
const objTwo = Object.assign({}, first, {
  c: 2,
  d: 3
})
// console.log(objTwo)

console.log(Object.entries(objTwo))
console.log(Object.keys(objTwo))
console.log(Object.values(objTwo))






