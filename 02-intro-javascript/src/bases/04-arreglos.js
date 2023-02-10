//crea objeto literal
const arreglo = new Array();

console.log(arreglo);

//crea objeto 
const arreglo2 = [];

//al usar push modificamos el objeto principal
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);

console.log(arreglo2);

//copiar y agregar elementos a arreglos
//el operador spread manda individualmente cada elemento del primer arreglo
let arreglo3 = [...arreglo2,5];

console.log(arreglo3);

//la funcion map crea un nuevo arreglo
const arreglo4 = arreglo2.map( function(num){
  //si la funcion no tiene return, el valor devuelto sera undefined
  return num * 2;
});

console.log(arreglo4);
