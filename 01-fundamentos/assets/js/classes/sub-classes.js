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

class Hero extends Person {

    team;

    constructor(name, age, team) {
        super(name, age);
        this.team = team;
    }

    print() {
        console.log('Persona Print = ' + super.print());
        return `HeroPrint = Name : ${this.name}, age: ${this.age}`;
    }
}

const myHero = new Hero('Spiderman', 36, 'Marvel');
console.log(myHero);
console.log(myHero.print());