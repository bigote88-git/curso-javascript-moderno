// funcion normal, toda funcion normal tiene una variable que almacena todos los argumentos
function doSomething(name) {
    console.log('i did something ' + name);
    console.log(arguments);
}

// funcion anonima
const doSomethingAnom = function() {
    console.log('i did something....');
};

// funcion de flecha
const arrowFunction = () => {
    console.log('nani');
};

// son mas eficientes que las funciones tradicionales
const arrowFunctionArguments = (value1, value2) => {
    console.log('nani');
};


doSomething('richard', true, null, () => {});
doSomethingAnom();
arrowFunction();

const randomNumber = () => Math.random();

console.log(randomNumber());