let videoJuegos = ['Mario', 'Megaman', 'Final Fantasy'];

videoJuegos.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

// PUSH para insertar un nuevo elemento
console.log(videoJuegos.push('Metroid'));
console.log(videoJuegos);

// UNSHIFT para insertar un elemento al inicio
console.log(videoJuegos.unshift('Donkey Kong'));
console.log(videoJuegos);

// POP para remover el ultimo elemento y retorna este
let ultimoJuego = videoJuegos.pop();
console.log(ultimoJuego, videoJuegos);

// SpPLICE para quitar elemento de un arreglo
console.log(videoJuegos);
let juegosBorrados = videoJuegos.splice(1, 2);
console.log(juegosBorrados, videoJuegos);