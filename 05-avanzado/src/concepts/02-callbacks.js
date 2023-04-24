import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const callbacksComponent = (element) => {

    console.log('callbacksComponent');
    const id = '5d86371f233c9f2425f1691699';
    findHero(id, (error, hero) => {

        if (error)
            element.innerHTML = `Heroe with id ${ id } not found`;
        else
            element.innerHTML = hero.name;
    });

};

/**
 * 
 * @param {String} heroID 
 * @param {(hero:Object => void)} callbackFunction 
 */
const findHero = (heroID, callbackFunction) => {

    const hero = heroes.find(hero => hero.id === heroID);

    if (!hero) {
        callbackFunction('Hero not found');
        return;
    }

    callbackFunction(null, hero);

}