// AuthModel.js
export class RegisterModel {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export class LoginModel {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
