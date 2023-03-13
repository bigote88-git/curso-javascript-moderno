// forma antigua de crear objetos
// la problematica es que no se puede extender ni implementar nuevas funcionalidades
// tampoco se pueden usar miembros privados
function Person(name, age) {
    console.log('Creating person....');

    this.name = name;
    this.age = age;

    this.print = () => {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    };
};

const mary = new Person('Mary', 25);
mary.print();

const peter = new Person('Peter', 28);
peter.print();