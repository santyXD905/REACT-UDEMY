
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25
  }
  
  console.log(persona.nombre);
  
  const persona2 = persona;
  
  
  //al realizar esta asignacion, solo le pasamos la direccion de memoria
  persona2.nombre = 'Jose';
  
  //ambas constantes tienen el mismo valor
  console.log(persona2);
  console.log(persona);
  
  //con ecsma script 6 podemos usar ..., para copiar solo la estructura y los valores
  
  const persona3 = {...persona };
  
  persona3.nombre = 'Guille';
  
  console.log(persona3);
  console.log(persona);
  
  