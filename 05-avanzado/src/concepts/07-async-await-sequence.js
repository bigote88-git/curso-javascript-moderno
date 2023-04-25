/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncAwaitSequenceComponent = async(element) => {

    console.log('On async await sequence component');
    console.time('Start');

    //! BAD IDEA
    //const value1 = await generatePromise(2000, 'Slow promise');
    //const value2 = await generatePromise(1000, 'Fast promise');
    //const value3 = await generatePromise(1500, 'Medium promise');

    //! Esto es para las promesas que no son dependientes de otras
    const [value1, value2, value3] = await Promise.all([
        generatePromise(2000, 'Slow promise'),
        generatePromise(1000, 'Fast promise'),
        generatePromise(1500, 'Medium promise')
    ]);

    element.innerHTML = `
        ${value1} </br>
        ${value2} </br>
        ${value3} </br>
    `;

    console.timeEnd('Start');
};

const generatePromise = (miliseconds, message) => new Promise(resolve => {
    setTimeout(() => {
        resolve(message)
    }, miliseconds);
});