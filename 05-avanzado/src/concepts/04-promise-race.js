/**
 * 
 * @param {HTMLElement} element 
 */
export const promiseRaceComponent = (element) => {

    element.innerHTML = 'Loading...';

    const renderValue = (value) => element.innerHTML = value;

    /*
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue);
*/
    Promise.race([
        generatePromise(1500, 'Fast promise'),
        generatePromise(2000, 'Medium promise'),
        generatePromise(3000, 'Slow Promise'),
        generatePromise(1450, 'Fast promise 2.0'),
        generatePromiseV2(1000, 'Fast and Furious promise')
    ]).then(renderValue);
};

const generatePromise = (miliseconds, result) => new Promise(resolve => {
    setTimeout(() => {
        resolve(result);
    }, miliseconds);
});

const generatePromiseV2 = (miliseconds, result) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Winner ${result}`);
        }, miliseconds);
    });
}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow promise');
    }, 2000);
});

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium promise');
    }, 1500);
});

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast promise');
    }, 1000);
});