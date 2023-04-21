import templateHtml from './app.html?raw';
import todoStore from '../storage/todo.store.js';
import { renderTodos } from '../todos/use-cases/index.js';
import { renderPending } from '../todos/use-cases/index.js';

const htmlElementsID = {
        ClearCompleted: '.clear-completed',
        TodoList: '.todo-list',
        TodoNewInput: '#new-todo-input',
        listLi: '.filtro',
        PendingElement: '#pending-count'
    }
    /**
     * 
     * @param {HTMLElement} elementId identificador del elemento donde se renderizara la app
     */
const App = (elementId) => {

    const showPending = () => {
        renderPending(htmlElementsID.PendingElement);
    }

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(htmlElementsID.TodoList, todos);
        showPending();
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = templateHtml;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();

    const htmlTodoNewInput = document.querySelector(htmlElementsID.TodoNewInput);
    htmlTodoNewInput.addEventListener('keyup', (event) => {
        // se procesan las vainas hasta que de Enter
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();

        event.target.value = '';
    });

    const htmlTodoList = document.querySelector(htmlElementsID.TodoList);
    htmlTodoList.addEventListener('click', (event) => {

        const todoElement = event.target.closest('[data-id]');

        if (todoElement) {
            todoStore.toggleTodo(todoElement.getAttribute('data-id'));
            displayTodos();
        }
    });

    htmlTodoList.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const todoElement = event.target.closest('[data-id]');
        if (!todoElement || !isDestroyElement)
            return;

        //console.log(`eliminar todo ${ todoElement.getAttribute('data-id')}`);
        todoStore.deleteTodo(todoElement.getAttribute('data-id'));
        displayTodos();
    });

    const htmlClearCompleted = document.querySelector(htmlElementsID.ClearCompleted);
    htmlClearCompleted.addEventListener('click', (event) => {

        todoStore.deleteCompleted();
        displayTodos();

    });

    const htmlListLi = document.querySelectorAll(htmlElementsID.listLi);
    htmlListLi.forEach(elementLi => {

        elementLi.addEventListener('click', (event) => {
            htmlListLi.forEach(elLi => { elLi.classList.remove('selected') });

            event.target.classList.add('selected');

            const actionFilter = event.target.getAttribute('href').substring(2);
            const filterToApply = (actionFilter === '') ?
                todoStore.Filters.All : (actionFilter === 'active') ?
                todoStore.Filters.Pending : todoStore.Filters.Completed;

            todoStore.setFilter(filterToApply);
            console.log(filterToApply);
            displayTodos();

        });

    })
}

export { App };