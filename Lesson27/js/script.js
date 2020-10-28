class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayHi() {
    return `Hello ${this.name} how old are you? ${this.age}`
  }
}

const peoples = [
  new Person('Dmitry', 27),
  new Person('Maxim', .3),
  new Person('Mariam', 20)
]

console.log(peoples[0].name);

console.log(peoples.forEach(item => item.name.length))

for (let i = 0; i < peoples.length; i++) {
  console.log(peoples[i])
}

class Son extends Person {
  constructor(name, age, surname) {
    super(name, age)
    this.surname = surname
  }

  sayHi() {
    super.sayHi()
      `Hello ${this.name} how old are you? ${this.age} ${this.surname}`
  }
}

const friends = [new Son("Lohn", 25, 'Smith'), new Son("Alex", 24, 'Jan')]
console.log(friends.every(item => item.surname.length > 3))
console.log(friends.filter(item => item.age >= 24))

const arr = [...peoples, ...friends]
console.log(arr.length)

let array = [
  new Son("Lohn", 25, "Smith"),
  new Son("Alex", 24, "Jan"),
  new Person("Dmitry", 27),
  new Person("Maxim", 16),
  new Person("Bob", 16)
]

let sonLength = 0, personLength = 0, other = 0
for (const person of array) {
  if (person instanceof Son) {
    sonLength++
  } else if (person instanceof Person) {
    personLength++
  } else {
    other++
  }
}
console.log(`sons = ${sonLength}, person = ${personLength}, other = ${other}`)


let ownProps = 0, protoProps = 0, person = new Son("John", 25, "Smith");
for (const key in person) {
  (person.hasOwnProperty(key)) ? ownProps++ : protoProps++
}
console.log(`ownProps: ${ownProps}; protoProps: ${protoProps};`)
