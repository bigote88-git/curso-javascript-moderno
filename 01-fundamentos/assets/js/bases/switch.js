const dia = 0;

const obtenerDiaLetras = (dia) => {
    switch (dia) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Lunes';
        case 2:
            return 'Martes'
        default:
            return 'No es ni Lunes, Martes ni Domingo';
    }
}

console.log(obtenerDiaLetras(5));