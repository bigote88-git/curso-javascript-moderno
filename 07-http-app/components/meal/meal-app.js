/**
 * 
 * @param {HTMLDivElement} containerElement 
 */
export const MealAppComponent = async(containerElement) => {

    console.log('enter to component 336');
    containerElement.innerText = 'Loading from API....';

    const titleElement = document.createElement('h4');    
    const imgElement = document.createElement('img');
    const btnElement = document.createElement('button');
    btnElement.innerText = 'Next meal';

    const renderData = (data) => {
        titleElement.innerText = data.strMeal;        
        imgElement.src = data.strMealThumb;

        containerElement.replaceChildren(titleElement, imgElement, btnElement);
    };

    renderData(await fetchMealData());

    btnElement.addEventListener('click', ()=> {

        containerElement.innerHTML = 'Loading meal....';
        
        setTimeout(async() => {
            renderData(await fetchMealData());   
        }, 1000);          
    });
    
}

const fetchMealData = async() => {

    let response;
    try {
        response = await fetch(
           /* import.meta.env.VITE_API_URL_V2 + '&apiKey=' +
            import.meta.env.VITE_API_KEY*/
            import.meta.env.VITE_API_URL);
    } catch (err) {
        alert(err);
    }

    const data = await response.json();
    console.log(data.meals[0]);

    return data.meals[0];
}

const fetchMeal = async() => {

    const response = await fetch(import.meta.env.VITE_API_URL);
    const data = await response.json();

    return data;
}