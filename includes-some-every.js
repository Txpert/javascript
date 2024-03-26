//includes

const tiere = ['Katze', 'Hund', 'Kaninchen'];

console.log(tiere.includes('Hund')); // Gibt true aus
console.log(tiere.includes('Elefant')); // Gibt false aus

//some

const zahlen = [1, 2, 3, 4, 5];

const istGroesserAlsDrei = (element) => element > 3;

console.log(zahlen.some(istGroesserAlsDrei)); // Gibt true aus, weil mindestens ein Element größer als 3 ist.

//every

const zahlen1 = [1, 30, 39, 29, 10, 13];

const isstGroesserAls0 = (element) => element > 0;

console.log(zahlen1.every(isstGroesserAls0)); // Gibt true aus, weil alle Elemente größer als 0 sind.
