import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-localhost.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {

    const user = new User(userLike);
    const localhostUserModel = userModelToLocalhost(user);
    let updatedUser;

    if (userLike.id) {
        updatedUser = await updateUser(localhostUserModel);
    } else {
        updatedUser = await createUser(localhostUserModel);
    }

    return localhostUserToModel(updatedUser);
}

/**
 * 
 * @param {Like<User>} user 
 * @returns 
 */
const createUser = async(user) => {

    const urlAPI = `${ import.meta.env.VITE_BASE_URL }/users`;

    const res = await fetch(urlAPI, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    console.log({ newUser });

    return newUser;
}

/**
 * 
 * @param {Like<User>} user 
 * @returns 
 */
const updateUser = async(user) => {

    const urlAPI = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id}`;

    const res = await fetch(urlAPI, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updatedUser = await res.json();
    console.log({ updatedUser });

    return updatedUser;
}