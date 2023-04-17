import { Todo } from "../models/todo";

/**
 * 
 * @param {Todo} todo 
 * @returns 
 */
const createHTMLTodo = (todo) => {

    const { done, description, id } = todo;

    const htmlLiContent = `
            <div class="view">
                <input class="toggle" type="checkbox" ${ done? 'checked': ''}>
                <label>${ description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        `;
    const htmlLi = document.createElement('li');
    htmlLi.innerHTML = htmlLiContent;
    if (done)
        htmlLi.classList.add("checked");

    htmlLi.setAttribute("data-id", id);

    return htmlLi;
}

export { createHTMLTodo };