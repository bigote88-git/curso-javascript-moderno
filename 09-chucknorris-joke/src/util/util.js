/**
 * 
 * @param {Number} max 
 * @returns {Number}
 */
export const getRandomNumber = (max) => {

    const randomNumber = Math.floor(Math.random() * max);

    return randomNumber + 1;
};