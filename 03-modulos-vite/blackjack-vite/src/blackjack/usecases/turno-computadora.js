// turno computadora
import { pedirCarta, valorCarta, crearCarta } from './';
/**
 * @param {HTMLElement} divCartasComputadora contenedor de las cartas de la computadora
 * @param {Array<HTMLElement>} puntosHTML arreglo de elementos HTML
 * @param {Number} puntosMinimos puntos del jugador
 * @param {Array<String>} deck baraja de cartas
 * 
 */
const turnoComputadora = (divCartasComputadora, puntosHTML, puntosMinimos, deck = []) => {

    let puntosComputadora = 0;

    do {

        if (!puntosHTML)
            throw new Error('Los marcadores no deben ser nulos');

        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        divCartasComputadora.append(crearCarta(carta));

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

export { turnoComputadora };