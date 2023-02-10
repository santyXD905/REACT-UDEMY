//desestructuracion

//modo tediosos
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    altura: 1.80,
    peso: 80,
    latlng: {
      lat: 12.34,
      lng: 12.34
    }
  }
  
  console.log(persona.nombre,persona.apellido,persona.altura)
  
  //manera de simplificar
  
  //extrae el valor y crea una constante con el mismo valor y nombre
  //para cambiar el nombre de la variable nombre:nombre2
  const { nombre,altura:altura2 } = persona;
  
  console.log(nombre,altura2);
  
  //esto es muy util en funciones por ejemplo
  //podemos poner valores por defecto en caso de que no posea esa propiedad
  const returnPersona = ({nombre,edad,rango="capitan"}) => {
    console.log(nombre,edad,rango);
  }
  
  returnPersona(persona);
  
  //otra utilidad
  
  const user = ({nombre,edad,rango="capitan"}) => ({
    username:nombre,
    anios:edad,
    nose:rango,
  });
  
  const {username,nose} = user(persona);
  
  console.log(username,nose);
  
  //desestructurar objetos anidaddos
  
  const user2 = ({nombre,edad,latlng}) => ({
    username:nombre,
    anios:edad,
    latlng:latlng,
  });
  
  const {username:un,nose:nn,latlng:{lat,lng}} = user2(persona);
  
  console.log(username,nose,lat,lng);

  //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment