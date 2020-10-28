//  ES5 reduce
let amount = 0
for(let i = 0; i< people.length; i++) {
    amount += people[i].budget
}
console.log(amount)

// reduce()
// const amounted = people.reduce((total, person) => {
//     return total + person.budget
// }, 0 )
const amounted = people.reduce((total, person) => total + person.budget, 0 )
console.log(amounted)