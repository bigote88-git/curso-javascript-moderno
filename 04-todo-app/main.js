import './style.css';
import { App } from './src/todos/app.js';
import todoStore from './src/storage/todo.store.js';

todoStore.initStore();
App('#app');