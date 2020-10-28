/** 
const personArr = [
    ['name', 'Dmitry'],
    ['age', 27],
    ['job', 'Junior']
]

const personObj = {
  name: 'Dmitry',
  age: 27,
  job: 'Junior'
}
 */


// ========================
const map = new Map(personArr)

console.log(map)
console.log((personObj.job === map.get('job')) ? map.get('job') : false)
// ========================


// map
//   .set('newField', 42)
//   .set(personObj, 'Value of object')
// console.log(map.get(personObj))

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// // values()
// for (let value of map.values()) {
//   console.log(value)
// }

// // keys()
// for (let value of map.keys()) {
//   console.log(value)
// }


// ========================
//  for [key, value] of => like are personArr + ['newField', 42]
for (let [key, value] of map.entries()) {
  console.log(key, value)
}

map.forEach((value, key) => console.log(key, value))
// ========================


// ========================
const arrayFrom = Array.from(map) // map = new Map(personArr)
console.log(arrayFrom)

const arrayMap = [...map]
console.log(arrayMap)
// ========================


// ========================
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)
// ========================


// ========================
const users = [
  { name: 'Maxim' },
  { name: 'Dmitry' },
  { name: 'Mariam' }
]

const visits = new Map()

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 0 * 60))
  .set(users[2], new Date(new Date().getTime() + 0 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(`${users[0].name} ${lastVisit(users[0])}`)
console.log(`${users[1].name} ${lastVisit(users[1])}`)
console.log(`${users[2].name} ${lastVisit(users[2])}`)
// ========================


console.log((map.has('job')) ? `${personObj.job} developer this is just the beginning for a wonderful career!` : false)
console.log(map.has('job'))
console.log(personObj.hasOwnProperty('job'))
console.log(map.has('job') === personObj.hasOwnProperty('job'))