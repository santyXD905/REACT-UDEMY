//variables y constantes

const nombre = "fernando";
const apellido = "herrera";

let valor = 6;

valor = 5;

console.log(nombre,apellido,valor);

//js permite crear constantes y variables segun su scope

if (true){
  const nombre = "luis";
  let valor = 3;
  console.log(nombre,valor);
}

console.log(nombre,valor);