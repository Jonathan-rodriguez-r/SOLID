// D - Principio de inversión de dependencia.
// Los detalles deben depender de abstracciones.
// La solicitud Http depende de la función setState, que es un detalle
http.get("http://address/api/examples", (res) => {
 this.setState({
  key1: res.value1,
  key2: res.value2,
  key3: res.value3
 });
});

//Solicitud Http 
const httpRequest = (url, setState) => {
    http.get(url, (res) => setState.setValues(res))
   };
   
   // Estado configurado en otra función
   const setState = {
    setValues: (res) => {
     this.setState({
       key1: res.value1,
       key2: res.value2,
       key3: res.value3
     })
    }
   }
   
   // Solicitud HTTP, estado establecido en una función diferente
   httpRequest("http://address/api/examples", setState);