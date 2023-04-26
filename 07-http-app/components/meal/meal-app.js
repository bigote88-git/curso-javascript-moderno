/**
 * 
 * @param {HTMLDivElement} containerElement 
 */
export const MealAppComponent = async(containerElement) => {

    console.log('enter to component 33');
    containerElement.innerText = 'Loading from API....';

    fetchMeal();
}

const fetchMeal = async() => {

    let response;
    try {
        response = await fetch(
            import.meta.env.VITE_API_URL_V2 + '&apiKey=' +
            import.meta.env.VITE_API_KEY);
    } catch (err) {
        alert(err);
    }

    console.log(response);
}