// Time
setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : `${hours}`;
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

const btn = document.getElementById('btn')
const textInput = document.getElementById('text-input')

btn.addEventListener('click', getTextInConsole)
textInput.addEventListener('focus', getTextInput)

function getTextInConsole() {
  return console.log(textInput.value)
}

function getTextInput() {
  return textInput.style.background = 'PaleTurquoise';
}

let field = document.getElementById('field');
let ball = document.getElementById('ball');

field.addEventListener('click', football);

function football (event) {
  // получить стили getComputedStyle => ball from #ball но их нет в css, тогда возъми их из svg мяча ???

  const getBallStyles =  getComputedStyle(ball);

  console.log(`Получи объект стилей из svg мяча getComputedStyle(ball) ${getComputedStyle(ball)}`);
  console.log(getComputedStyle(ball));
  
  const ballWidthWoPx = getBallStyles.width.slice(0, -2);
  const ballDevWidthOnTwo = ballWidthWoPx / 2;

  console.log(`Возьми ширину мяча getBallStyles.width - ${getBallStyles.width}`)
  console.log(`Отреж px у getBallStyles.width => getBallStyles.width.slice(0, -2) и получи ${getBallStyles.width.slice(0, -2)}`)
  console.log(`Подели ширину мяча на 2 что определить нулевую точку ${ballDevWidthOnTwo}`)

  ball.style.marginLeft = (event.offsetX - ballDevWidthOnTwo) + 'px';
  ball.style.marginTop = (event.offsetY - ballDevWidthOnTwo) + 'px';

  console.log(`Двигай относительно левого края X минус пол мяча (event.offsetX - ballDevWidthOnTwo) + 'px'; получи=> ${ball.style.marginLeft}`);
  console.log(`Двигай относительно верхнего края Y минуспол мяча (event.offsetY - ballDevWidthOnTwo) + 'px'; получи => ${ball.style.marginTop}`);

  console.log(`Получи координаты поля без мяча ${event.offsetX} ${event.offsetY}`);

}
