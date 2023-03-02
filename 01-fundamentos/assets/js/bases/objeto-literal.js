const variableRandom = 'dato-random';
let ironman = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    age: 45,
    isAlive: false,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    coords: {
        lat: 35.65,
        lng: 20.58
    },
    'dato-random': 'asdf'
};

console.log('Nombre ', ironman.name);
console.log('Cantidad de trajes ', ironman.suits.length);
console.log('Ubicacion ', ironman['coords']);

console.log(ironman);
console.log(ironman["dato-random"]);

// borrar una propiedad de un objeto literal
delete ironman.age;

console.log(ironman);

// convertir las propiedades en arreglos
const entriesObject = Object.entries(ironman);
console.log(entriesObject);

// agregar una propiedad
ironman.married = true;

console.log(ironman);

// metodo para evitar la modificacion de las propiedades directas del objeto, pero no a los
// objetos que estan dentro del objeto (si los hubiese)
Object.freeze(ironman);

ironman.married = false;
console.log(ironman);

// obtener las propiedades y valores del objeto
const propiedades = Object.getOwnPropertyNames(ironman);
const valores = Object.values(ironman);

console.log(propiedades, valores);