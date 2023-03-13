class Rentangle {

    #
    area = 0;

    constructor(base, height) {
        this.base = base;
        this.height = height;

        this.#area = this.base * this.height;
    }

    getArea() {
        return this.#area;
    }
}

const r = new Rentangle(5, 10);
console.log(r.getArea());