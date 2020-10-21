const [firstname, lastname] = ['Дмитрий', 'Морошан']
console.log(`${firstname} ${lastname}`)


const userName = {
  name: 'Дмитрий',
  age: 27,
}

const { name, age } = userName
console.log(userName)


const [firstName, lastName, ...info] = ["Иван", "Пупкин", "front-end", "junior"]


const log = function (a, b, c) {
  console.log(a, b, c)
}
log(...['Spread', 'Rest', 'Operator'])


const arr = ['will', 'love']
const data = ['You', ...arr, 'spred', 'operator']
console.log(data)


// clone Array spread
const newArr = [1, 2, 3, 4, 5]
const cloneArr = [...newArr]
console.log(cloneArr)


// rest для соединения отдельных значений в массив
const newLog = function (a, b, ...rest) {
  console.log(a, b, rest) // Basic rest (2) ["operator", "usage"]

  console.log(a, b) // Basic rest
  for (let i = 0; i < rest.length; i++) {
    // operator
    // usage
    console.log(rest[i])
  }
}
newLog('Basic', 'rest', 'operator', 'usage')


const inc = x => x + 1
console.log(inc(2))
console.log(inc(4))
console.log(inc(6))

const sum = (a, b) => a + b
console.log(sum(4, 3))
console.log(sum(40, 2))


const group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],
  showList: function () {
    this.students.forEach(
      student => console.log(this.title + ': ' + student))
  }
}
group.showList()


// написать стрелочную функцию 
// которая будет возвращать остаток от деления
// функция принимает два параметра, второй из которых по умолчанию равен 2
const getRemOfDev = (a, b = 2) => a % b
console.log(getRemOfDev(5)) // 1
console.log(getRemOfDev(5, 3)) // 2
console.log(+(getRemOfDev(43.4).toFixed(1))) // 1.4


/**
 * Map
 */
const map = new Map()
map.set(1, 'num1')

console.log(map.get(1)) // num1
console.log(map.size) // 1
console.log(map.has(1)) // true


const recipeMap = new Map([
  ["Огурец", 500],
  ["Помидор", 350],
  ["Лук", 50]
])

// перебор по ключам (овощи)
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable) // огурец, помидор, лук
}
// перебор по значениям (числа)
for (const amount of recipeMap.values()) {
  console.log(amount) // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (const entry of recipeMap) {// то же самое, что и recipeMap.entries ()
  console.log(entry) // огурец, 500 (и т.д.)
}


/**
 * Symbol
 */
const user = {
  name: "Вася"
}

const id = Symbol("id")

user[id] = 35725

console.log(`id: ${user[id]} Name: ${user.name}`)