import usersStore from "../../store/users-store";
import { RenderTable } from "../render-table/render-table";
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerHTML = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLabel, nextButton);

    // TODO: listeners de los botones
    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        RenderTable(element);
    });

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerHTML = usersStore.getCurrentPage();
        RenderTable(element);
    });
}