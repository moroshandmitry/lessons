/**
 Toyota RAV-4 => это объект

 Машина => это класс
 */

// function Animal(name) {
//   this.name = name
//   this.speed = 0
// }

// Animal.prototype.run = function (speed) {
//   this.speed = speed
// }

// // const dog = new Animal('Charlie')

// function Rabbit(name) {
//   this.name = name
//   this.speed = 0
// }

// Rabbit.prototype.eat = function () {
//   console.log(thanks)
// }

// Rabbit.prototype = Object.create(Animal.prototype)
// Rabbit.prototype.constructor = Rabbit

// const rabbit = new Rabbit('Bob')
// rabbit.run(10) // 10
// console.log(rabbit.speed) // 10

// const str = String(11)
// console.log(str.length)

// String.prototype.getLength = function () {
//   return this.length
// }

// console.log(str.getLength())

/**
 class User extends Person
 */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.speed = 0
  }
}

const person = new Person('Alex', 12)
console.log(person.speed)

class User extends Person {
  constructor(name, age, phrase) {
    super(name, age)
    this.phrase = phrase
  }
  sayHi() {
    console.log(`${this.phrase} from ${this.name}`);
  }
}

const user = new User('Oleg', 18, 'Hello')
user.age++
user.sayHi()
console.log(user.age)

/**
 class Rabbit extends Animal
 */

class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

const animal = new Animal('Dog', 20)
console.log(animal)

class Rabbit extends Animal {
  constructor(name, speed) {
    super(name, speed)
  }
  eat() {
    console.log("Rabbit eating grass! Rabbit says thanks!");
  }
}

const rabbit = new Rabbit('Rabbit', 25)
console.log(rabbit)
rabbit.eat()