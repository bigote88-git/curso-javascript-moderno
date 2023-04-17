// objeto que servira como binding
export const data = {
    value: ''
};

// definimos la propiedades getter y setter
Object.defineProperty(data, "prop", {
    get: function() {
        console.log('Getter called');
        return this.value;
    },
    set: function(value) {
        console.log('Setter called');
        this.value = value;
        printValue();
    }
});

// obtenemos los elementos del DOM
const elInput = document.querySelector("#data-input");
const elSpan = document.querySelector("#data-output");

// asignamos el evento al input
elInput.addEventListener('keyup', (event) => {
    //asignamos al objeto el valor del input por medio del setter
    data.prop = event.target.value;
});

const printValue = () => {
    elSpan.innerText = data.prop;
}