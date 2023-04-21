import { Todo } from '../todos/models/todo.js';

const Filters = {
    All: 'all',
    Pending: 'pending',
    Completed: 'completed'
};

const state = {
    todos: [
        new Todo('Elemento #1'),
        new Todo('Elemento #2'),
        new Todo('Elemento #3'),
        new Todo('Elemento #4'),
        new Todo('Elemento #5')
    ],
    filter: Filters.All
};

const initStore = () => {
    console.log(state);
    console.log('Init Store');
    loadStorage();
}

const loadStorage = () => {
    if (!localStorage.getItem('state'))
        return;

    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'))
    state.todos = todos;
    state.filter = filter;
}

const saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Pending:
            return state.todos.filter(todo => todo.done);
        case Filters.Completed:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

const addTodo = (description) => {
    if (!description)
        throw new Error('Description is not valid');

    state.todos.push(new Todo(description));
    saveToLocalStorage();
}

const toggleTodo = (todoID) => {
    if (!todoID)
        throw new Error('todoID is not defined');

    let findTodo = state.todos.find(obj => obj.id === todoID);
    const indexTodo = state.todos.indexOf(findTodo);

    findTodo.done = !findTodo.done;

    state.todos[indexTodo] = findTodo;
    saveToLocalStorage();
}

const deleteTodo = (todoID) => {
    if (!todoID)
        throw new Error('todoID is not defined');

    state.todos = state.todos.filter(todo => todo.id !== todoID);
    saveToLocalStorage();
}

const deleteCompleted = () => {
    if (!state.todos)
        throw new Error('Not element to deleted');

    state.todos = state.todos.filter(todo => !todo.done);
    saveToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    if (!Object.values(Filters).includes(newFilter))
        throw new Error('Filter is not defined');

    state.filter = newFilter;
    saveToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    Filters
};