// O - Principio abierto-cerrado
// Queremos agregar un superusuario a los usuarios, ¿Como lo hacemos?

const roles = ["ADMIN", "USER"]
checkRole = (user) => {
  if(roles.includes(user.role)){
    return true; 
  }else{
    return false
  }
}

//valida rol
checkRole("ADMIN"); //verdadero
checkRole("Foo"); //falso

// podríamos hacerlo en otra función:
const roles = ["ADMIN", "USER"]
checkRole = (user) => {
  if(roles.includes(user.role)){
    return true; 
  }else{
    return false
  }
}
//Podemos definir una función para agregar el nuevo rol
addRole(role){
    roles.push(role)
  }
  
  // Llame a la función con el nuevo rol para agregar a los existentes
  addRole("SUPERUSER");
  
  //Test role
  checkRole("ADMIN"); //true
  checkRole("Foo"); //false
  checkRole("SUPERUSER"); //true