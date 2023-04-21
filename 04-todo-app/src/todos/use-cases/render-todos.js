import { createHTMLTodo } from "./create-todo-html";

let htmlUL;
/**
 * 
 * @param {*} elementID 
 * @param {*} todo 
 */
const renderTodos = (elementID, todos = []) => {

    if (!htmlUL)
        htmlUL = document.querySelector(elementID);

    if (!htmlUL)
        throw new Error(`El elemento ${ elementID } no existe`);

    // borramos el contenido previo
    htmlUL.innerHTML = '';

    todos.forEach(todo => {
        htmlUL.append(createHTMLTodo(todo))
    });
}

export {
    renderTodos
}