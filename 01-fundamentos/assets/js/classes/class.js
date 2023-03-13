// la instancia de una clase nunca retorna undefined
// por defecto todas las clases en js usan 'use strict'
class Person {

    static _instanceCount = 0;
    static get instanceCount() {
        return Person._instanceCount + ' objects';
    }

    static getMessage() {
        console.log('I am a person class');
    }

    name;
    age;
    greeting;

    constructor(name = 'N/A', age = 0) {
        this.name = name;
        this.age = age;

        Person._instanceCount++;
    }

    // los setter no pueden tener el mismo nombre de la propiedad
    set setGreeting(greeting) {
        this.greeting = greeting;
    }

    get getGreeting() {
        return this.greeting;
    }

    print() {
        return `Print = Name : ${this.name}, age: ${this.age}`;
    }
};

const peter = new Person();
console.log(peter);
console.log(peter.print());

peter.setGreeting = 'hello world from js';
console.log(peter.getGreeting);

console.log(Person.instanceCount);
Person.getMessage();