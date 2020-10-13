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
}, 1000);

//  addEventListener to input
const btn = document.getElementById('btn')
const textInput = document.getElementById('text-input')

btn.addEventListener('click', getTextInConsole)
textInput.addEventListener('focus', getTextInput)

function getTextInConsole() {
  return console.log(textInput.value)
}

function getTextInput() {
  return textInput.style.background = 'PaleTurquoise'
}
//  addEventListener to input

// football
let field = document.getElementById('field')
let ball = document.getElementById('ball')

field.addEventListener('click', football)

function football(event) {
  // Получить стили getComputedStyle => ball from #ball но их нет в css, тогда возъми их из svg объекта мяча
  // Получить из ширины строку число
  // Строку число делим на 2 узнаём нулевую точку мяча (его центр)
  // Получаем число
  // Обратиться к стилям мяча относительно левого и правого краёв и передать в них нужные координаты

  const getBallStyles = getComputedStyle(ball)

  console.log(`Получи объект стилей из svg мяча getComputedStyle(ball) ${getComputedStyle(ball)}`)
  console.log(getComputedStyle(ball))

  const ballWidthWoPx = getBallStyles.width.slice(0, -2)
  const ballDevWidthOnTwo = ballWidthWoPx / 2

  console.log(`Возьми ширину мяча ${getBallStyles.width} === getBallStyles.width`)
  console.log(`Отреж => "px" от => ${getBallStyles.width} === getBallStyles.width => getBallStyles.width.slice(0, -2) === ${getBallStyles.width.slice(0, -2)}`)
  console.log(`Подели ширину мяча => ${ballWidthWoPx} === getBallStyles.width.slice(0, -2) => getBallStyles.width.slice(0, -2) / 2 === ${getBallStyles.width.slice(0, -2) / 2} чтобы определить нулевую точку координат у мяча`)

  ball.style.marginLeft = (event.offsetX - ballDevWidthOnTwo) + 'px'
  ball.style.marginTop = (event.offsetY - ballDevWidthOnTwo) + 'px'

  console.log(`ball.style.marginLeft = (event.offsetX - ballDevWidthOnTwo) + 'px' Двигай мяч относительно левого края === ${ball.style.marginLeft = event.offsetX - ballDevWidthOnTwo} + 'px'`)
  console.log(`ball.style.marginTop = (event.offsetX - ballDevWidthOnTwo) + 'px' Двигай мяч относительно верхнего края === ${ball.style.marginLeft = event.offsetY - ballDevWidthOnTwo} + 'px'`)

  console.log(`Получи координаты поля без мяча event.offsetX === ${event.offsetX} => event.offsetY  === ${event.offsetY}`)

}
// football

// toggle dropdown menu
const toggleBtn =  document.querySelector(".dropbtn")
const dropdownContent = document.querySelector(".dropdown-content")

dropdownContent.addEventListener('click', myToggle)

function myToggle(event) {
  if (!event.target.matches('.dropbtn')) {

    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i]

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}

toggleBtn.addEventListener('click', getToggleBtn)

function getToggleBtn() {
  dropdownContent.classList.toggle("show")
}
// toggle dropdown menu

// color td in table
const table = document.querySelector('table');

table.addEventListener('click', colorTd)

function colorTd (event) {
  // if (event.target.tagName === 'TD') {
  //   //event.target.classList.add('color')
  // }
  if (event.target.cellIndex === 0) {
    event.target.style.background = 'red'
  }
  else if (event.target.cellIndex === 1) {
    event.target.style.background = 'green'
  }
  else {
    event.target.style.background = 'blue'
  }
  console.log(event.target) // show all targets
  console.log(event.target.tagName ) // TD
  console.log(event.target.classList); // DOMTokenList [ color ]
}
// color td in table

elemInput.addEventListener('click', function(event) {

  console.log(event) // event object with propertys
  console.log(event.type) // click
  console.log(event.target) // input with propertys
  console.log(event.target.tagName) // input

  if (event.altKey && event.ctrlKey && event.shiftKey) {
    console.log("Click with altKey + ctrlKey + shiftKey");
  } else if (event.altKey === true) {
    console.log("Click with altKey");
  } else if (event.ctrlKey === !false) {
    console.log("Click with ctrlKey");
  }
  else if (event.shiftKey !== false) {
    console.log("Click with shiftKey");
  }

})