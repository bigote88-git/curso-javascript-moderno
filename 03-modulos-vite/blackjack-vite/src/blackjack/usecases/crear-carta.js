// crear carta
/**
 * Crear el element img para la carta en cuestion
 * @param {String} carta Nombre de la carta
 * @returns Elemento img correspondiente a la carta
 */
const crearCarta = (carta) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}

export { crearCarta };