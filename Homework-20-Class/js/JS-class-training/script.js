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

// Object.prototype.beast = beast

// const beastTwo = {
//   name: 'bear'
// }

// console.log(beastTwo.beast.age)


// class Animal {

//   static type = 'ANIMAL'

//   constructor(options) {
//     this.name = options.name
//     this.age = options.age
//     this.hasTail = options.hasTail
//   }

//   voice() {
//     console.log('I am Animal')
//   }
// }

// console.log(Animal.type)

// class Cat extends Animal {
//   static type = 'CAT'

//   constructor(options) {
//     super(options)
//     this.color = options.color
//   }

//   voice() {
//     super.voice()
//     console.log('I am cat')
//   }

//   get ageInfo() {
//     return this.age *7
//   }
// }
// console.log(Cat.type)

// const cat = new Cat({
//   name: 'Cat',
//   age: 7,
//   hasTail: true,
//   color: 'black'
// })
// console.log(cat.voice())
// console.log(cat.color)

// console.log(cat.ageInfo)

// // конструктор
// function Animal(name) {
//   this.name = name
//   this.speed = 0
// }
// console.log(Animal) // function Animal(name)

// // методы в прототипы
// Animal.prototype.run = function(speed) {
//   this.speed += speed
//   console.log( this.name + ' бежит, со скоростью ' + this.speed + ' км/ч' )
// }
// const animalDog = new Animal('Собака')
// console.log(animalDog) // Object { name: "Собака", speed: 0 }
// console.log(animalDog.run(20)) // Собака бежит, со скоростью 20 км/ч

// const animalCat = new Animal('Кот')
// console.log(animalCat) // Object { name: "Кот", speed: 0 }
// console.log(animalCat.run(25)) // Кот бежит, со скоростью 25 км/ч

// const animalGuepard = new Animal('Гепард')
// console.log(animalGuepard) // Object { name: "Гепард", speed: 0 }
// console.log(animalGuepard.run(120)) // Гепард бежит, со скоростью 120 км/ч

// const person = Object.create(
//   {
//     calculateAge() {
//       console.log('Age', new Date().getFullYear() - this.birthYear);
//     }
//   },
//   {
//     name: {
//       value: 'Dmitry',
//       enumerable: true, // to see this in for
//       writable: true, // to rename value
//       configurable: true // delete key in object
//     },
//     birthYear: {
//       value: 1993,
//       enumerable: false, // default
//       writable: false, // default
//       configurable: false // default
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear
//       },
//       set(value) {
//         document.body.style.background = '#646D7E'
//         console.log('Set age', value)
//       }
//     }
//   }
// )
// console.log(person) // Object { name: "Dmitry", … }
// person.name = 'Maxim'

// delete person.name
// console.log(person) // Object { … } => birthYear: 1993

// console.log(person.age) // 27

// console.log(person.age = 100) // Set age 100 + background = 'red'

// person.calculateAge() // 27

// for (const key in person) {
//   if(person.hasOwnProperty(key)) {
//     console.log('Key', key, person[key]) // Key name Maxim
//   }
// }

// Объекты, прототипы, наследование
// Цепочка наследования
// a === родитель b
// b === наследник a

// b === родитель c
// c === наследник b

// a => b => c

// const a = {
//   text: 'Hello',
//   color: 'red',
//   show: function () {
//     console.log(this.color)
//   }
// }

// const b = {
//   fontSize: '24px',
//   __proto__: a
// }

// const c = {
//   fontFamily: 'Veranda',
//   __proto__: b
// }

// console.log(a) // Object { text: "Hello", color: "red", show: show() }
// console.log(b) // Object { fontSize: "24px" } + <prototype>: { text: "Hello", color: "red", show: show() }
// b.text = 'One' // One
// b.color = 'green' // green
// console.log(b.show())
// console.log(a.show())
// console.log(c) // Object { fontFamily: "Veranda" } + <prototype>: Object { fontSize: "24px", text: "One", color: "green" }

// console.log(c.hasOwnProperty("fontFamily")) // true
// console.log(c.hasOwnProperty("fontSize")) // false