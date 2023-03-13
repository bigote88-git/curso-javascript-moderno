class SingletonExample {
    static instance;
    name;

    constructor(name = '') {

        if (!!SingletonExample.instance) {
            return SingletonExample.instance;
        }

        SingletonExample.instance = this;
        this.name = name;
    }
}

const instance1 = new SingletonExample('Example #1');
const instance2 = new SingletonExample('Example #2');
const instance3 = new SingletonExample('Example #3');
console.log(instance1.name);
console.log(instance2.name);
console.log(instance3.name);