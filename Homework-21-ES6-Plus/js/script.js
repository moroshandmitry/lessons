// Time
setInterval(function () {
  const date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  hours = hours < 10 ? `0${hours}` : `${hours}`
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`

  document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`
}, 1000)


// область видимости переменной
const apples = 5
if (true) {
  const apples = 10
console.log(apples) // 10 (внутри блока)
}
console.log(apples) // 5 (снаружи блока значения не изменилось)


// Spread используется для разделения коллекций на отдельные элементы
// Rest разделяет массив на значение
const log = function(a, b, c) {
  console.log(a, b, c)
}
log(...['Spread', 'Rest', 'Operator'])


// копирования свойств массивов
const arr = ['will', 'love']
const data = ['You', ...arr, 'spread', 'operator']
console.log(data) // ['You', 'will', 'love', 'spread', 'operator']


// параметры по умолчанию
function calcPrice(price, sale = 20) {
  return price - price * sale /100
}
calcPrice(500, 40) // 500-500*40/100
calcPrice(500) // 500-500*20/100


/**
 * Деструктуризация
 */
// особый синтаксис присваивания, при котором можно присвоить массив
// или объект сразу нескольким переменным, разбив его на части
const [firstName, lastName] = ["Иван", "Пупкин"];
console.log(firstName); // Иван
console.log(lastName); // Пупкин

const user = {
name: "Петр",
age: 25,
}
const {name, age} = user
console.log(name) // Петр
console.log(age) // 25


// Rest для соединения отдельных значений в массив
const logShow = function(a, b, ...rest) {
  console.log(a, b, rest)
}
logShow('Basic', 'rest',  'operator', 'usage'); // Basic rest ['operator', 'usage']


// Стрелочные функции
const inc = x =>  x + 1
console.log(inc(2))
console.log(inc(6))

const remainder  = (x, y = 2) =>  x % y
console.log(remainder(3))
console.log(+(remainder(6.2).toFixed(1)))


// метод map()
const myArr = [1, 2, 3, 4, 5, 6 , 7]
console.log(myArr.map(item => item ** 2))


// тип Symbol
const superUser = {
  name: "Вася"
}

const id = Symbol ("id")
user [id] = 7777777
console.log(`Name: ${superUser.name} id: ${user[id]}`) // мы можем получить доступ к данным по ключу-символа


// Object.fromEntries () - принимает объект в качестве аргумента и
// возвращает массив пар свойств ключа объекта в виде [key, value]
const obj = {one: 1, two: 2, three: 3}
console.log(Object.entries(obj)) // => [["one", 1], ["two", 2], ["three", 3]]
console.log(Object.entries(obj).flat()) // => [ "one", 1, "two", 2, "three", 3 ]

const myArray = [['one', 1], ['two', 2], ['three', 3]]
const myObj = Object.fromEntries(myArray)
console.log(myObj) // => {one: 1, two: 2, three: 3}


// flatMap () объединяет map () и flat () в один метод
const flatArrMap = [4.25, 19.99, 25.5]
console.log(flatArrMap.flatMap(item => [Math.round(item)])) // => [4, 20, 26]