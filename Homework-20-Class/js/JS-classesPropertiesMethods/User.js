/**
 * description
 */
class User {
    // username
    // password
    constructor(userName, password) {
      this.userName = userName
      this.password = password
    }
  
    validatePassword () {
       return (this.password.length) > 6 ? true : false
    }
  }