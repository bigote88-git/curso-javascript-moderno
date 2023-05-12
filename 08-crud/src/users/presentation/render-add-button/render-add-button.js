import './render-add-button.css';
/**
 * 
 * @param {HTMLElement} element 
 * @param {()=> void} callback 
 */
export const RenderAddButton = (element, callback) => {

    const renderAddButton = document.createElement('button');
    renderAddButton.innerText = '+';
    renderAddButton.classList.add('floating-action-button');

    renderAddButton.addEventListener('click', () => {
        if (!callback)
            return;

        callback();
    });

    element.append(renderAddButton);
}