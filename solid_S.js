// S - Principio de responsabilidad unica
// Queremos validar un formulario, luego crear un usuario en una base de datos de Postgres, para tal codificamos:
// La validación y la implementación específica de la creación de usuarios están fuertemente acopladas.
// Código sin Aplicar el principio:

validaycreausuarioenPostgres = (name, password, email) => {   

    // Llama a una función externa para validar el formulario del usuario 
    const isFormValid = testForm(name, password, email); 
  
    // valida formulario
    if(isFormValid){
      User.Create(name, password, email) 
    }
  }
// Código  Aplicando el principio:


// Solo validación de Usuario
validarequest = (req) => {

    // Llama a una función externa para validar el formulario del usuario 
    const isFormValid = testForm(name, password, email); 
  
    // valida formulario
    if(isFormValid){
      createUser(req); // La creación del usuario se hace en otra función
    }
  }
  
  // creación de usuario en base de datos
  createUser = (req) => User.Create(req.name, req.password, req.email)

