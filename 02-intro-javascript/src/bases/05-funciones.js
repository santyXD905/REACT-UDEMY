//funciones en js

//esta forma trae problemas en caso de asignar valores (saludar = 20)
function saludar(nombre){
    return `hola, ${nombre}`
  }
  
  console.log(saludar)
  
  ///esta forma evita que se ejecute en caso de el problema anterior
  
  const saludar2 = function (nombre){
    return `hola, ${nombre}`
  };
  
  //saludar2=20; posible error
  
  console.log(saludar2)
  
  //funcion flecha
  
  const saludar3 = (nombre) => `hola, ${nombre}`;
  
  console.log(saludar3)
  
  //para mandar objetos con funcion en flecha
  const getUser = () => {
      return {
        nombre: 'Juan',
        apellido: 'Perez',
      }
  }
  
  console.log(getUser())
  
  
  //para mandar objetos como return pero de manera simplificada
  const getUser2 = () => (
    {
      nombre: 'Juan',
      apellido: 'Perez',
    }
  )
  
  console.log(getUser2())
  
  const getUserAct = (nombre,apellido) => (
    {
      nombre: nombre,
      apellido: apellido,
    }
  )
  
  console.log(getUserAct("santy","tinti"))