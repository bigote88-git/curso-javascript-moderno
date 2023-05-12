import usersStore from '../../store/users-store';
import './render-table.css';
import { showModal } from '../render-modal/render-modal.js';
import { deleteUserById } from '../../user-cases/delete-by-user-id';

let table;

const createTable = () => {

    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>IsActive</th>
            <th>Actions</th>
        </tr>
    `;

    table.append(tableHeaders, tableBody);
    return table;
}

const tableSelectionListener = async(event) => {
    const selectLink = event.target.closest('#select-user');
    const deleteLink = event.target.closest('#delete-user');

    if (selectLink) {
        showModal(selectLink.getAttribute('data-id'));
    }

    if (deleteLink) {
        try {
            await deleteUserById(deleteLink.getAttribute('data-id'));
            await usersStore.reloadPage();
            document.querySelector('#current-page').innerText = usersStore.getCurrentPage();
            RenderTable();
        } catch (error) {
            alert('No se pudo eliminar el registro');
        }
    }
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderTable = (element) => {

    const users = usersStore.getUsers();
    if (!table) {
        table = createTable();
        element.appendChild(table);
    }

    table.addEventListener('click', tableSelectionListener);

    let tableRows = '';

    // renderizar los usuarios
    if (users.length > 0) {

        users.forEach(user => {
            tableRows += `<tr>
                    <td> ${ user.id } </td> 
                    <td> ${ user.balance } </td> 
                    <td> ${ user.firstName } </td> 
                    <td> ${ user.lastName } </td> 
                    <td> ${ user.isActive } </td> 
                    <td> 
                        <a href ="#/" id="select-user" data-id=${ user.id }> Select </a> | 
                        <a href ="#/" id="delete-user" data-id=${ user.id }> Delete </a> 
                    </td> 
                </tr>
                `;
        });

        table.querySelector('tbody').innerHTML = tableRows;
    }

};