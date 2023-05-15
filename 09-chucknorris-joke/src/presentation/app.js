import { getJoke } from "../api/jokes-api";
import { translateText } from "../api/translate-api";
import { RenderButton } from "./render-button/render-button";
import { RenderJoke } from "./render-joke/render-joke";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderApp = async(element) => {

    loadJoke(element, true);
    RenderButton(element, { title: 'Generate Random Joke', id: 'btn-random-joke' }, loadJoke);

    // const text = translateText(randomJoke.value);
    // console.log(text, randomJoke);
}

const loadJoke = async(element, init) => {

    if (init === true) {
        RenderJoke(element, 'Press the button to load the random joke');
        return;
    } else {
        const randomJoke = await getJoke();
        RenderJoke(element, (randomJoke) ? randomJoke.value : 'No generate random joke');
    }
}