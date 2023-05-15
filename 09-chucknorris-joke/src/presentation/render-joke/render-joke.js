import '../render-joke/render-joke.css';

let paraghrapJoke;
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {String} value 
 */
export const RenderJoke = (element, value) => {

    if (!paraghrapJoke) {
        paraghrapJoke = document.createElement('p');
        paraghrapJoke.classList.add('text-joke');
        element.append(paraghrapJoke);
    }

    paraghrapJoke.innerText = value;
}