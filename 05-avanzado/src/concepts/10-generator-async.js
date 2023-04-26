import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const generatorAsyncComponent = async(element) => {

    console.log('On generator async component');
    const genHeroes = generateHeroes();
    let isFinish = false;
    /*
        do {
            const { value, done } = await genHeroes.next();
            isFinish = done;
            if (isFinish) break;

            element.innerHTML = value;

        } while (!isFinish);*/
};

async function* generateHeroes() {

    for (const hero of heroes) {
        await sleep();
        yield hero.name
    }
}

const sleep = () => new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 1000);
});