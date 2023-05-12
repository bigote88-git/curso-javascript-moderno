import { User } from "../models/user";
import { loadUsersByPage } from "../user-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: []
};

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    // SI NO TENGO USUARIOS DE LA API
    if (users.length === 0) return;

    updateState(1, users);
    // state.currentPage = state.currentPage + 1;
    // state.users = users;
}

const loadPreviousPage = async() => {
    if (state.currentPage === 1) return;

    const users = await loadUsersByPage(state.currentPage - 1);

    updateState(-1, users);
    // state.currentPage = state.currentPage - 1;
    // state.users = users;
}

const updateState = (pageDirection, users) => {
    state.currentPage += pageDirection;
    state.users = users;
}

/**
 * 
 * @param {User} updatedUser
 */
const onUserChanged = (updatedUser) => {
    let wasFound = false;

    state.users = state.users.map(user => {
        if (user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser;
        } else
            return user;
    });

    // TODO: si hay menos de 10 usuarios y no esta en el arreglo lo agregamos
    if (state.users.length < 0 && !wasFound) {
        state.users.push(updatedUser);
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage(state.currentPage);
    // SI NO TENGO USUARIOS DE LA API
    if (users.length === 0) {
        await loadPreviousPage();
        return;
    }

    updateState(0, users);
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
};