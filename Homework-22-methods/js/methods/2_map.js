// ES6 map()
const newPeopleHello = people.map(person => console.log(`${person.name} привет!`))

// ES6 map()
// people[2].age = `${people[2].age} месяца`
people.map(person => console.log(`${person.name} ${person.age} ${(person.age < 1) ? 'месяца' : 'лет'} `))

// ES6 map() multiply
const newPeopleAgeMul = people.map(person => person.age * 3)
console.log(newPeopleAgeMul)