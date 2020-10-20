const userOne = 'Ivan'
const passOne = '777888777'

const player = new User(userOne, passOne)
console.log(player)
console.log(`userOne: ${player.userName} passOne: ${player.password}`)

console.log(player.validatePassword()) // true

const firstStudent = new Student(userOne, passOne, 'Ivan777')
console.log(firstStudent)
console.log(firstStudent.getStudentCourses())