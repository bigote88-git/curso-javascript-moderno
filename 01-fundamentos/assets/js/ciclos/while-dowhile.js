console.warn('----------------------------------------------------');
console.warn('While');
console.warn('----------------------------------------------------');

const carros = ['Honda', 'Toyota', 'Hyundai', 'Mazda'];

let i = 0;

// se considera undefined y null como falso en la condicion del while
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}

console.warn('----------------------------------------------------');
console.warn('Do While');
console.warn('----------------------------------------------------');
let j = 0;

// se considera undefined y null como falso en la condicion del while
do {
    console.log(carros[j]);
    j++;
} while (j < carros.length);