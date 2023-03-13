/**
 * Returns a random card from the deck
 * @param {Array<String>} deck 
 * @returns {String}
 */
const pedirCarta = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
};

export { pedirCarta };