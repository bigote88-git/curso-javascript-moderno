import { getRandomNumber } from "../util/util";

export const getJoke = async() => {

    const resp = await fetch(`${import.meta.env.VITE_API_JSON_SERVER}/result`);
    const json = await resp.json();

    return getRandomJoke(json);
};

/**
 * 
 * @param {JSON[]} allJokes 
 * @returns 
 */
const getRandomJoke = (allJokes) => {

    const jokesLength = allJokes.length;
    const indexJoke = getRandomNumber(jokesLength);

    console.log(indexJoke);
    return allJokes[getRandomNumber(indexJoke)];
};