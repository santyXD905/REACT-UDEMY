//desct de arreglos

const personajes = ["goku","vegeta","trunks"]

const [ p1 ] = personajes;

console.log(p1);

//para renombrar variable = seleccionar+f2

//para sacar valores segun posicion

const [ , , p2] = personajes;

console.log(p2);

//sacar valores por separado de funciones

const arreglo = () => ( ["ABC", 123] )

const [letras,numeros] = arreglo();

console.log(`letras: ${letras}, numeros: ${numeros}`);

//sacar funciones dentro de arreglos

const user = (valor) => {
  return [valor,() => console.log(`hola soy ${valor}`)];

}

const [nombre,saludo] = user("goku");

saludo();

console.log(nombre);