// ES5 for
for(let i = 0; i < people.length; i++) {
    console.log(people[i])
}

// ES6 for of
for(let person of people) {
    console.log(person)
}

// ES6 forEach
people.forEach((person, index, pArr) => console.log(person, index, pArr))

// ES6 forEach
people.forEach(person => console.log(person))