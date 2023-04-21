import todoStore from "../../storage/todo.store";

export const renderPending = (elementID) => {

    if (!elementID)
        throw new Error('ElementID not exists');

    if (!document.querySelector(elementID))
        throw new Error(`Not found element in DOM to ID ${elementID}`);

    document.querySelector(elementID).innerHTML = todoStore.getTodos(todoStore.Filters.Pending).length;
};