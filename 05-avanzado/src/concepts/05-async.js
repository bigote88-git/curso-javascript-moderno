import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1cc30';
    //! forma 1
    //const hero = findHero(id1);
    //console.log(hero);
    //element.innerHTML = hero.name;

    //! forma 2
    console.log('Inicio del componente');

    findHero(id1)
        //.then(heroName => element.innerHTML = heroName)
        .then(console.log)
        .catch(error => element.innerHTML = error);

    console.log('Fin del componente');
};

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => {

    if (!id)
        throw new Error('Id is not defined!');

    const hero = heroes.find(hero => hero.id === id);

    if (!hero)
        throw new Error(`Hero with id ${ id } not found`);

    // un return en una funcion asincrona cae directamente al resolve de la promesa
    return hero.name;
}