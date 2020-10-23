const arr = []

const arrInter = setInterval(() => {
  arr.push(Math.floor(Math.random() * 9) + 1)
  const array = [...arr]
  console.log(array.reverse().map((item) => item ** 2))

  if (array.length === 18) {
    clearInterval(arrInter)
  }
}, 1000)

const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const modal = document.querySelector('.modal')

function show() {
  modal.style = "display: flex; justify-content: center; align-items: center;"
  modal.innerHTML = "<h3>Lorem, ipsum dolor sit amet consectetur adipisicing.<h3>"
}

const hide = () => modal.style = "display: none"

btn1.addEventListener('click', show)
btn2.addEventListener('click', hide)