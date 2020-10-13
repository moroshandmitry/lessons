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

let str = '';
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    str += i
  }
  console.log(str);
  str = ''
}

const myTryCatch = function() {
  let err = ''
  const a = 2
  const b = 5

  try {
    test
  } catch (error) {
    err = `Ошибка ${error.name} \n ${error.message} \n ${error.stack}`
  }
  finally {
    console.log(`finally will definitely come true => sum =  ${sum = a + b}`)
  }
  return err
}
console.log(myTryCatch())

let user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user); // parse => string to object
console.log(user); // Object { name: "Вася", age: 35, isAdmin: false, friends: (4) […] }
console.log(user.friends[1]); // 1
console.log(user.isAdmin); // false
console.log(!user.isAdmin); // true

let anotherUser = {
  name: "Вася", 
  age: 35,
  isAdmin: false,
  friends: [0, 1, 2, 3]
}
anotherUser = JSON.stringify(anotherUser); // stringify => object to string
console.log(`stringify => object to string ${anotherUser}`); // "{ \"name\": \"Вася\", \"age\": 35, \"isAdmin\": false, \"friends\": [0,1,2,3] }"


timerId = setTimeout(function() {
  console.log( 'setTimeout Stop! after 3 seconds' )
  }, 3000);

//clearTimeout(timerId)


let promise = new Promise(function(resolve, reject) {
setTimeout(() => resolve("success!"), 1000);
setTimeout(() => reject("sorry error"), 1000);
});

// resolve запустит первую функцию в .then

promise.then(

result => console.log(result), // success!
error => console.log(error) // error if not worked resolve

)


const xhr = new XMLHttpRequest();

xhr.open('GET', 'phones.json', false)
xhr.send()

if (xhr.status != 200) {
  console.log(`Error ${xhr.status} : ${xhr.statusText}`)
}
else {
  console.log(xhr.responseText)
}


async function myFunc() {

  const promise = new Promise((resolve, reject) => {
   setTimeout(() => resolve("well done!"), 1000)
  })
  
  let result = await promise // будет ждать, пока промис не выполнится (*)
  console.log(result); // "well done!"
  
  }
  
  myFunc()