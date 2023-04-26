/**
 * 
 * @param {HTMLElement} element 
 */
export const generatorFunctionComponent = (element) => {

    console.log('On generator function Component');

    /*const functionGenerator = generatorRandom();
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    console.log(functionGenerator.next());
    */
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Check me';
    element.appendChild(buttonElement);

    const genIDs = generateIDs();

    const renderButton = () => {
        const { value } = genIDs.next();
        buttonElement.innerText = `Click ${value}`;
    };

    buttonElement.addEventListener('click', renderButton);
};

function* generateIDs() {
    let counter = 0;
    while (true) {
        yield ++counter
    }
}

function* generatorRandom() {

    yield `
                Valor 1: $ { Math.random() }
                `;
    yield `
                Valor 2: $ { Math.random() }
                `;
    yield `
                Valor 3: $ { Math.random() }
                `;
    yield `
                Valor 4: $ { Math.random() }
                `;
    yield `
                Valor 5: $ { Math.random() }
                `;
    yield `
                Valor 6: $ { Math.random() }
                `;

    return 'Ya no hay valores';
}