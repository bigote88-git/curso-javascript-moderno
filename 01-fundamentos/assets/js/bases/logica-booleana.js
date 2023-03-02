console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// toma el valor hasta que la condicion deje de ser verdadera
const p1 = false && 'Texto verdadero' && true;

const p2 = soyNull || soyFalso || 'Soy un texto no falso';
const p3 = soyUndefined || soyNull || soyFalso || 'Soy un texto no falso';
const p4 = soyUndefined || soyNull || soyFalso || 'Soy un texto no falso' || true;


console.log({ p1, p2, p3, p4 });