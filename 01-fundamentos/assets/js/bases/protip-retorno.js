// se usan los parentesis en las funciones de fechas con una sola instruccion para indicar que lo que
// va dentro de los mismos es lo que queremos retornar.
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

console.log(crearPersona('Pepe', 'Larana'));

// funciones de flecha con numero variable de argumentos
// el argumentos variable debe ser el ultimo en la lista de argumentos
const argsFunction = (firstvalue, ...args) => {
    console.log(firstvalue, args);
}

const argsFunction2 = (...args) => {
    //console.log(firstvalue, args);
    return args;
}

console.log(argsFunction(1, 2, 3, 4, 5));

// desestructuracion, consiste en asignar directamente a variables los valores de un arreglo 
// o un objeto. si es un arreglo se usan los corchetes y si es un objeto las llaves
// en el caso de los objetos tienes que usar el mismo nombre de sus propiedades para las variables, 
// o si no tendrias que usar : para definir el valor de la variable personalizada
const [nombre, apellido, activo] = argsFunction2('pepito', 'perez', true);
console.log({ nombre, apellido, activo });

const { nombre: objNombre, apellido: objApellido } = crearPersona('Juan', 'Perez');
console.log({ objNombre, objApellido });

const variableRandom = 'dato-random';
const ironman = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    age: 45,
    isAlive: false,
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
};

const verPropiedades = ({ name, codeName, age = 60, isAlive, suits }) => {

    console.log({ name });
    console.log({ codeName });
    console.log({ age });
    console.log({ isAlive });
    console.log({ suits });
};

verPropiedades(ironman);