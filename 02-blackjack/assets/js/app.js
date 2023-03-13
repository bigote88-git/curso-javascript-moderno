const myModule = (() => {

    'use strict';

    let deck = [];

    const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'],
        valueCards = {
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

    let gameScorePlayers = [];

    // REFERENCIAS DEL HTML
    const gameScoreTags = document.querySelectorAll('small'),
        btnNuevoJuego = document.querySelector("#btn-nuevo-juego"),
        btnPedirCarta = document.querySelector("#btn-pedir-carta"),
        btnDetener = document.querySelector("#btn-detener");

    const divPanelCards = document.querySelectorAll(".panel-cartas");

    const newGame = (numPlayers = 1) => {
        deck = createDeck();

        // inicializamos los puntos
        for (let i = 0; i <= numPlayers; i++) {
            gameScorePlayers[i] = 0;
            gameScoreTags[i].innerText = '0';
            divPanelCards[i].innerHTML = '';
        }

        btnPedirCarta.disabled = false;
        btnDetener.disabled = false;
    }

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
            return deck.shift();
        }
    }

    // acumulamos los puntos y mostramos la puntuacion actual
    const accumulatePoints = (card, turn) => {
        gameScorePlayers[turn] = gameScorePlayers[turn] + cardValue(card);
        gameScoreTags[turn].innerText = gameScorePlayers[turn];

        return gameScorePlayers[turn];
    }

    // FUNCION PARA OBTENER EL VALOR DE LA CARTA
    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);
        return valueCards[value];
    }

    // FUNCION PARA CREAR LA CARTA DEL JUGADOR
    const createCard = (cardNameFile, className, turn) => {
        const playerCard = document.createElement('img');
        playerCard.src = `assets/cartas/${cardNameFile}.png`;
        playerCard.classList.add(className);

        divPanelCards[turn].append(playerCard);

        //return playerCard;
    };

    const cpuTurn = (minimunPoints) => {
        let cpuPoints = 0;
        do {
            const cpuCard = requestCard();
            createCard(cpuCard, 'carta', gameScorePlayers.length - 1);

            cpuPoints = accumulatePoints(cpuCard, gameScorePlayers.length - 1);

            if (minimunPoints > 21)
                break;
        }
        while ((cpuPoints < minimunPoints) && (minimunPoints <= 21));

        whoWin();

    };

    const whoWin = () => {

        const [minimunPoints, cpuPoints] = gameScorePlayers;
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
        newGame();
    });
    // -----------------------------------------------------------
    // -- PEDIR NUEVA CARTA
    // -----------------------------------------------------------
    btnPedirCarta.addEventListener("click", () => {

        //divPlayerCards.append(createCard(playerCard, 'carta'));
        const playerCard = requestCard();
        createCard(requestCard(), 'carta', 0);
        const playerPoints = accumulatePoints(playerCard, 0);
        /*
        playerPoints = playerPoints + cardValue(playerCard);
        playerScore.innerText = playerPoints;
        */
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

        cpuTurn(gameScorePlayers[0]);
    });

    deck = createDeck();

    return {
        newGame: newGame
    };
})();