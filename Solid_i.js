// I - Principio de segregación de interfaces
// No tenemos interfaces en Javascript, pero probemos con un ejemplo.ab-b-l
//Validar en cualquier caso
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.initiateUser();
    }
    initiateUser() {
      this.username = this.username;
      this.validateUser()
    }
  
    validateUser = (user, pass) => {
      console.log("validando...");
    }
  }
  const user = new User("Jonathan", "123456");
  console.log(user);
// validando ...
// Usuario {
// validateUser: [Function: validateUser],
// username:  'Jonathan',
// password: '123456'
//}
// Aplicando El principio
class UserISP {
    constructor(username, password, validate) {
      this.username = username;
      this.password = password;
      this.validate = validate;
  
      if (validate) {
        this.initiateUser(username, password);
      } else {
        console.log("Validando requerimiento");
      }
    }
  
    initiateUser() {
      this.validateUser(this.username, this.password);
    }
  
    validateUser = (username, password) => {
      console.log("validando...");
    }
  }
  
  //Usuario con validación requerida
  console.log(new UserISP("Jonathan", "123456", true));
  
// no se requiere validación
// UserISP {
// validateUser: [Function: validateUser],
// username: 'invitado',
// password: 'invitado',
// validate: false
//}