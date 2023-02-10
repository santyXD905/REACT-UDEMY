//importar un archivo
import {heroes} from '../data/heroes'

console.log(heroes);

// hacer de forma automatica

//funcion find para arreglos (devuelve uno)
const getHeroe = (id) => heroes.find(hero => hero.id === id)

console.log(getHeroe(2));

//com usar find
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find


//funcion filter para arreglos (devuelve varios)

const getHeroOwner = (owner) => heroes.filter(hero => hero.owner === owner)

console.log(getHeroOwner('DC'));

