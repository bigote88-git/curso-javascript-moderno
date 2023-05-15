import '../render-button/render-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {Object{ title, id}} config
 * @param {Function} callback 
 */
export const RenderButton = (element, config, callback) => {

    const containerButton = document.createElement('div');
    containerButton.classList.add('container-button');

    const btnRandomJoke = document.createElement('button');
    btnRandomJoke.innerText = config.title;
    btnRandomJoke.id = config.id;

    containerButton.append(btnRandomJoke);

    if (callback) {
        btnRandomJoke.addEventListener('click', callback);
    }

    element.append(containerButton);
}