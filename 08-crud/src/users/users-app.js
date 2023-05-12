import { RenderAddButton } from "./presentation/render-add-button/render-add-button";
import { RenderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderModal, showModal, hideModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./user-cases/save-user";

/**
 * 
 * @param {HTMLDivElement} htmlElement 
 */
export const UsersApp = async(htmlElement) => {

    htmlElement.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

    if (usersStore.getUsers) {
        htmlElement.innerHTML = '';
        RenderTable(htmlElement);
        RenderButtons(htmlElement);
    }

    RenderAddButton(htmlElement, showModal);
    RenderModal(htmlElement, async(userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        RenderTable(htmlElement);
    });

    console.log(usersStore.getUsers);

}