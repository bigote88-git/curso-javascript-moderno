class Person {

    static fromObject({ name, appe, age }) {
        return new Person(name, appe, age);
    }

    constructor(name, appe, age) {
        this.name = name;
        this.appe = appe;
        this.age = age;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Appe: ${this.appe}, ${this.age} old year`);
    }
}

const pepe = new Person('Pepe', 'Suarez', 56);
pepe.getInfo();

const objPerson = {
    name: 'Juan',
    appe: 'Perez',
    age: 20,
}

const staticPerson = Person.fromObject(objPerson);
staticPerson.getInfo();