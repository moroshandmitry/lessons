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

const map =  new Map(personArr)

console.log(map)
console.log((personObj.job  === map.get('job')) ? map.get('job') : false)

// map
//     .set('newField', 42)
//     .set(personObj, 'Value of object')
// console.log(map.get(personObj))

// map.delete('job')
// console.log(map.has('job'))
// console.log(map.size)
// map.clear()
// console.log(map.size)

// //  for [key, value] of => like are personArr + ['newField', 42]
// for (let [key, value] of map.entries()) {
//     console.log(key, value)
// }

// // values()
// for (let value of map.values()) {
//     console.log(value)
// }

// // keys()
// for (let value of map.keys()) {
//     console.log(value)
// }

// map.forEach((val, key, map) => console.log(val, key, map) )

const arrayFrom = Array.from(map)
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

// const arrayMap = [...map]
// console.log(arrayMap)

// https://www.youtube.com/watch?v=mbcP3Oc0PjU
// 17:09