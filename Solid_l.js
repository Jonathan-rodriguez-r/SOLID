// L - Principio de sustitución de Liskov
// Queremos agregar un superusuario a los usuarios, ¿Como lo hacemos?
class Job {
    constructor(customer) {
      this.customer = customer;
      this.calculateFee = function () {
        console.log("calcular precio"); 
      };
    }
    Simple(customer) {
      this.calculateFee(customer);
    }
    Pro(customer) {
      this.calculateFee(customer);
      console.log("Agregar servicios"); // funcionalidades adicionales
    }
  }
  const a = new Job("Jonathan");
  a.Simple(); 
  // calcular precio
      a.Pro();
//Salida:
// calcular precio
// Agregar servicios profesionales