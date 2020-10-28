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

const people = [
  { name: 'Дмитрий', age: 27, budget: 40000.25 },
  { name: 'Мариам', age: 20, budget: 20000.25 },
  { name: 'Максим', age: 0.3, budget: 10000.25 },
  { name: 'Михаил', age: 15, budget: 12000.25 },
]

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