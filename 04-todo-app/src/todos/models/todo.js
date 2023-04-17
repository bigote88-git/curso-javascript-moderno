import { generateUUI } from '../util.js';

export class Todo {

    constructor(description) {
        this.id = generateUUI();
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}