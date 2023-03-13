import _ from 'underscore';

/**
 * This function creates the deck of cards.
 * @param {Array<String>} tiposCartas Example: ['A', 'B', 'C', 'D']
 * @param {Array<String>} tiposEspeciales Example: ['X', 'Y', 'Z']
 * @returns {Array<String>}
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {

    if (!tiposCartas || tiposCartas.length === 0)
        throw new Error('tiposCartas debe ser un arreglo de elemento');

    if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales debe ser un arreglo de elemento');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    return deck;
}

//export default crearDeck;