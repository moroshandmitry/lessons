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

// ============================
const divOne = document.querySelectorAll('.one')
for (let i = 0; i < divOne.length; i++) {
  divOne[i].style = 'background: #000; color: #FFF;'
}
// ============================

// ============================
const btnfFunc= () => {
  let radio = document.querySelectorAll('input[type="radio"]')
  console.log(radio)
  for (let i = 0; i < radio.length; i++) {
    if(radio[i].checked) {
      console.log(radio[i].value)
    }
  }
}
const btn = document.querySelector('button').addEventListener('click', btnfFunc())
// ============================

// ============================
const arr = [1,2,3,4,5,6,7,8,9]
arr.forEach(item => console.log(item))
arr.sort(item => console.log((item % 2 === 0) ? Number(item) : `${false} isn't even number`))
arr.filter(item => item > 5)
// ============================

// ============================
const unsorted = [3,1,4,2]

const ascending = unsorted.sort((a, b) => a - b).map(d => d * 10)
const descending = [...ascending].sort((a, b) => b - a).map(d => d * 10)

console.log('ascending', ascending)
console.log('descending', descending)
// ============================

// ============================
const wordsArr = ['Lorem', 'ipsum', 'dOlor', 'sIt', 'AMET', 'consEctetur', 'adipisicing', 'elit', 'Quisquam', 'iusto']
const sortByAz = wordsArr.sort((a, z) => a.localeCompare(z))
console.log(sortByAz)

const normalArr = wordsArr.toString().toLowerCase().split(',').sort((a, z) => a > z)
console.log(normalArr)
// ============================

// ============================
const str = 'OpPo' // like are string => opportunity
const getLowStr = str.toLowerCase()
const getPalStr =  str.toLowerCase().split("").reverse().join("")

console.log(str)
console.log('getLowStr =>', getLowStr, '===', getPalStr, '<= getPalStr')

console.log(getLowStr === getPalStr); // <= need ;
(getLowStr === getPalStr) ? console.log('This is palindrome string (getLowStr === getPalStr)') : false
// ============================