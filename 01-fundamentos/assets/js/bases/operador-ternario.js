const dia = 5;

const horaActual = 9;

let horaApertura;
let mensaje = '';

horaApertura = ([0, 6].includes(dia)) ? 9 : 11;

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hora de apertura ${horaApertura}`;
// }
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hora de apertura ${horaApertura}`;

console.log({ horaActual, horaApertura, mensaje });