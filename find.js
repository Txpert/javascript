//Mithilfe der find-Methode kann der Wert eines Elements im Array gesucht und zurückgegeben werden.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var result = numbers.find(element => element == 4);
console.log(result); //Ausgabe: 4


//findIndex

const zahlen = [5, 12, 8, 130, 44];

const istGroesserAls13 = (element) => element > 13;

console.log(zahlen.findIndex(istGroesserAls13)); // Gibt 3 aus, weil 130 das erste Element ist, das größer als 13 ist.


//findLast

const zahlen1 = [5, 12, 8, 130, 44];

const isstGroesserAls13 = (element) => element > 13;

console.log(zahlen1.findLast(isstGroesserAls13)); // Würde 44 ausgeben, da 44 das letzte Element ist, das größer als 13 ist.


//findLastIndex

const zahlen2 = [5, 12, 8, 130, 44];

const issstGroesserAls13 = (element) => element > 13;

console.log(zahlen2.findLastIndex(issstGroesserAls13)); // Würde 4 ausgeben, da das Element 44 (Index 4) das letzte ist, das größer als 13 ist.

