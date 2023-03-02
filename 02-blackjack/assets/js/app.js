// BARAJA DE CARTAS
let deck = [];
// PARA LOS 4 GRUPOS DE CARTAS
const types = ['C', 'D', 'H', 'S'];
// TIPOS ESPECIALES
const specials = ['A', 'J', 'Q', 'K'];
// VALORES NUMERICOS DE CADA CARTA
const valueCards = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': 11
};

let playerPoints = 0,
    cpuPoints = 0;

// REFERENCIAS DEL HTML
const playerScore = document.querySelectorAll('small')[0];
const cpuScore = document.querySelectorAll('small')[1];

const btnNuevoJuego = document.querySelector("#btn-nuevo-juego");
const btnPedirCarta = document.querySelector("#btn-pedir-carta");
const btnDetener = document.querySelector("#btn-detener");

const divPlayerCards = document.querySelector("#jugador-cartas");
const divCpuCards = document.querySelector("#computadora-cartas");

// FUNCION PARA MEZCLAR EL ARREGLO
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

// FUNCION PARA CREAR LA BARAJA
const createDeck = () => {

    let randomDeck = [];
    for (let type of types) {
        // AGREGAMOS LAS CARTAS NUMERADAS
        for (let index = 2; index <= 10; index++) {
            randomDeck.push(index + type);
        }

        // AGREGAMOS LAS CARTAS ESPECIALES
        for (let special of specials) {
            randomDeck.push(special + type);
        }
    }

    shuffleArray(randomDeck);
    return randomDeck;
}

// FUNCION PARA PEDIR UNA CARTA Y QUITARLA DE LA BAJARA
const requestCard = () => {
    if (deck.length === 0)
        throw 'No hay cartas en la baraja';
    else {
        console.log(deck[0]);
        return deck.shift();
    }
}

// FUNCION PARA OBTENER EL VALOR DE LA CARTA
const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return valueCards[value];
}

// FUNCION PARA CREAR LA CARTA DEL JUGADOR
const createCard = (cardNameFile, className) => {
    const playerCard = document.createElement('img');
    playerCard.src = `assets/cartas/${cardNameFile}.png`;
    playerCard.classList.add(className);

    return playerCard;
};


const cpuTurn = (minimunPoints) => {
    do {
        const cpuCard = requestCard();
        divCpuCards.append(createCard(cpuCard, 'carta'));

        cpuPoints = cpuPoints + cardValue(cpuCard);
        cpuScore.innerText = cpuPoints;

        if (minimunPoints > 21)
            break;
    }
    while ((cpuPoints < minimunPoints) && (minimunPoints <= 21));

    setTimeout(() => {
        if (cpuPoints === minimunPoints) {
            alert('Nadie gana :(');
        } else if (minimunPoints > 21) {
            alert('Computadora gana');
        } else if (cpuPoints === 21)
            alert('Computadora gana')
        else
            alert('Jugador gana');

    }, 1000);
};
// --------------------- EVENTOS -----------------------------

btnNuevoJuego.addEventListener("click", () => {
    deck = createDeck();
    playerScore.innerText = '0';
    cpuScore.innerText = '0';

    divPlayerCards.innerHTML = '';
    divCpuCards.innerHTML = '';

    btnPedirCarta.disabled = false;
    btnDetener.disabled = false;

    cpuPoints = 0, playerPoints = 0;
    console.log(deck);
});
// -----------------------------------------------------------
// -- PEDIR NUEVA CARTA
// -----------------------------------------------------------
btnPedirCarta.addEventListener("click", () => {
    const playerCard = requestCard();

    divPlayerCards.append(createCard(playerCard, 'carta'));
    playerPoints = playerPoints + cardValue(playerCard);
    playerScore.innerText = playerPoints;

    if (playerPoints > 21) {
        console.log('Luser, :P');
        btnPedirCarta.disabled = true;
        cpuTurn(playerPoints);
    }
    if (playerPoints === 21) {
        console.log('Like a boss');
        btnPedirCarta.disabled = true;
        btnDetener.disabled = true;
        cpuTurn(playerPoints);
    }
});

// -----------------------------------------------------------
// -- DETENER
// -----------------------------------------------------------
btnDetener.addEventListener("click", () => {
    btnPedirCarta.disabled = true;
    btnDetener.disabled = true;

    cpuTurn(playerPoints);
});

deck = createDeck();