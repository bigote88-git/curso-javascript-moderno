const diasLetras = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const diasLetrasObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
const dia = new Date().getDay();

console.log('El dia de la semana es ' + diasLetras[dia]);
console.log('El dia de la semana es ' + diasLetrasObj[dia]);