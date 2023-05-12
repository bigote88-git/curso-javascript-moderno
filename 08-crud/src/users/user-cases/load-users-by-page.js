import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {

    const urlAPI = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;

    const res = await fetch(urlAPI);
    const data = await res.json();

    /*
    VERSION 0
    const users = [];
    data.forEach(locahostUserData => {
        users.push(localhostUserToModel(locahostUserData));
    });

    VERSION 1
    const users = data.map(locahostUserData =>
        localhostUserToModel(locahostUserData)
    );
    */

    // VERSION SIMPLIFICADA
    const users = data.map(localhostUserToModel);

    return users;
}