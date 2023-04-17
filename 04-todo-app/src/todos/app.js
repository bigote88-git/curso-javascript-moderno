import templateHtml from './app.html?raw';
import todoStore from '../storage/todo.store.js';
import { renderTodos } from '../todos/use-cases/index.js';

const htmlElementsID = {
        TodoList: '.todo-list'
    }
    /**
     * 
     * @param {HTMLElement} elementId identificador del elemento donde se renderizara la app
     */
const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(htmlElementsID.TodoList, todos);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = templateHtml;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();
}

export { App };