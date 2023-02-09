const nombre = "fernando";
const apellido = "herrera";


console.log(nombre,apellido);

const completo = nombre + " " + apellido;

//otra forma supuestamente mejor de concatenar
const completo2 = `${nombre} ${apellido}`;

console.log(completo);
console.log(completo2);

function getSaludo(nombre, apellido){
  return `Hola ${nombre} ${apellido}`;
}

console.log(`este es un saludo: ${getSaludo(nombre,apellido)}`);
