// cuando trabajamos con datos primitivos siempre se envian por valor
let a = 10;
let b = a;

a = 30;
console.log({ a, b });

// todos los objetos se envian por referencia
// el operado spread ...  separa las propiedades y rompe la referencia 
let person1 = { nombre: 'Pepe' };
let person2 = {...person1 };

person2.nombre = 'Pepito';

console.log({ person1, person2 });

const cambiarNombre = ({...persona }) => {
    persona.nombre = 'Te cambie el nombre';
    return persona;
}

let personaA = { nombre: 'JC' };
let personaB = cambiarNombre(personaA);

console.log({ personaA, personaB });

// arreglos
// para romper la relacion del valor por referencia de igual forma usamos el operador spread
frutas = ['Apple', 'Pear', 'Grapes'];

// not like this
//misFrutas = frutas;

// its ok
misFrutas = [...frutas];

console.time('slice');
const otrasFrutasSlice = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutasSpread = [...frutas];
console.timeEnd('spread');

misFrutas.push('Melon');

console.table({ frutas, misFrutas });