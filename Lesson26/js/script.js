const arr = []

const arrInter = setInterval(() => {
  arr.push(Math.floor(Math.random() * 9) + 1)
  const array = [...arr]
  console.log(array.reverse().map((item) => item ** 2))

  if (array.length === 18) {
    clearInterval(arrInter)
  }
}, 1000)