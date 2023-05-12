import htmlmodal from './render-modal.html?raw';
import { getUserById } from '../../user-cases/get-user-by-id.js';
import './render-modal.css';
import { User } from '../../models/user';

let modal, form;
let loadedUser = {};

// TODO: cargar usuario seleccionado
export const showModal = async(id) => {
    modal.classList.remove('hide-modal');
    loadedUser = {};

    if (!id)
        return;

    const user = await getUserById(id);
    setFormData(user);
};
/**
 * 
 * @param {User} user 
 */
const setFormData = (user) => {

    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}

export const hideModal = () => {
    modal.classList.add('hide-modal');

    if (form)
        form.reset();
};
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderModal = (element, callback) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = htmlmodal;
    modal.className = 'modal-container hide-modal';

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container')
            hideModal();
    });

    form = modal.querySelector('form');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();
        let isActiveValue = false;

        const formData = new FormData(form);
        const userLike = {...loadedUser };

        for (const [key, value] of formData) {
            console.log({ key, value });

            if (key === 'balance') {
                userLike[key] = Number(value);
                continue;
            }

            if (key === 'isActive') {
                userLike[key] = (value === 'on') ? true : false;
                isActiveValue = true;
                continue;
            }

            userLike[key] = value;
        }
        if (!userLike['isActive'])
            userLike['isActive'] = false;

        // fix para el isActive del usuario
        userLike['isActive'] = isActiveValue;

        // GUARDAMOS EL USUARIO
        await callback(userLike);

        hideModal();
    });

    element.append(modal);
}