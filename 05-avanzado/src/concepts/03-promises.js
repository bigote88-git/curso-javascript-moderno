import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} element 
 * 
 */
export const promiseComponent = (element) => {

    console.log('On promise component');
    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h2>${hero1.name} | ${hero2.name}</h2>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `
            <h3 style="color:red">${ error }</h3>
        `;
    }

    //! forma 3
    Promise.all([
        findHero(id1), findHero(id2)
    ]).then(([hero1, hero2]) => {
        renderTwoHeroes(hero1, hero2);
    }).catch(renderError);

    //! forma 2
    /*
    let hero1;

    findHero(id1)
        .then((hero) => {
            hero1 = hero;
            return findHero(id2);
        }).then((hero2) => {
            renderTwoHereos(hero1, hero2);
        }).catch(renderError);
    */
    //!forma 1
    /*
            const heroPromise = findHero(id1);

            const renderHero = (hero) => {
                element.innerHTML = hero.name;
            }

            const renderError = (error) => {
                element.innerHTML = `
                    <h3 style="color:red">${ error }</h3>
                `;
            }

            heroPromise
                .then(hero => renderHero(hero))
                //.then(renderHero)
                //.catch(renderError)
                .catch(error => renderError(error));
*/
};

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {

    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`The hero with id ${ id } not found`);
    });
};