class Student extends User {
    constructor(userName, password, nickName) {
        super(userName, password)
        this.nickName = nickName
      }

    validatePassword () {
        return (this.password.length) > 10 ? true : false
     }

    getStudentCourses() {
          return ['html + css', 'scss', 'git', 'js']
    }

}