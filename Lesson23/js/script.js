console.log($('#txt').html())

const boxes = $('.box')
console.log(boxes.length)

for (let i = 0; i < boxes.length; i++) {
  const boxElem = boxes.eq(i).html()
  console.log(boxElem)
}

const children = $('#txt').children()
for (let i = 0; i < children.length; i++) {
  const childrenElem = children.eq(i).html()
  console.log(childrenElem)
}
console.log(children.length)


function visualize(nodes) {
  for (let i = 0; i < nodes.length; i++)
    console.log(nodes.eq(i).html())
}
console.log(visualize($("#txt").children()))

console.log($("#txt").parent())

$("div").each(function (index, element) {
  console.log(`${index} ${$(this).text()}`);
})

$("#txt").toggleClass("bounce")

$(".box").css('color', 'red')

console.log($('#txt').height())
console.log($('#txt').html('<b>dolorum sequi</b>'))

// динамично добавить 5 нумерованных строк
// let str = "";
// for (let i = 1; i <= 5; i++) {
//   str = `<div>${i} String</div>`
//   $("#txt").append(str)
// }

function addChildren(element, amount) {
  for (let i = 1; i <= amount; i++) {
    element.append(`<div>${i}</div>`)
  }
}

addChildren($('#txt'), 5)

addChildren($('.box'), 3)

addChildren($('h1'), 2)

$('button').click(function () {
  $('#txt').animate({ top: '300px' })
})
