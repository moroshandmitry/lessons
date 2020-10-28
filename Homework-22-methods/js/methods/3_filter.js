// ES5 filter()
adults = []
for(let i = 0; i < people.length; i++) {
	if (people[i].age >= 18) {
		adults.push(people[i])
	}
}
console.log(adults)

// ES6 filter()
const filterAdults = people.filter(person => person.age >= 18)
console.log(filterAdults)

const amounts = people
	.filter(person => person.budget > 13000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: Math.round(person.budget)
		}
	})
	.reduce((total, person) => total + person.budget, 0)

	console.log(amounts)