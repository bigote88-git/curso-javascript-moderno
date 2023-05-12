export const deleteUserById = async(id) => {

    const urlAPI = `${ import.meta.env.VITE_BASE_URL }/users/${ id}`;

    const res = await fetch(urlAPI, {
        method: 'DELETE',
    });

    const deletedUser = await res.json();
    console.log({ deletedUser });

    return true;
}