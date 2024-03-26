const inventar = [
    { name: "Apfel", kategorie: "Obst", anzahl: 10 },
    { name: "Banane", kategorie: "Obst", anzahl: 20 },
    { name: "Birne", kategorie: "Obst", anzahl: 15 },
    { name: "Karotte", kategorie: "Gemüse", anzahl: 10 },
    { name: "Spinat", kategorie: "Gemüse", anzahl: 5 },
    { name: "Kartoffel", kategorie: "Gemüse", anzahl: 25 }
];

let neuArray = [];

const katFilter = inventar.filter (function (element) {
	return element.kategorie === 'Obst';
});

console.log('----------------------------------------');
console.log('Obst: ');
console.log('-----');
for (const element of katFilter) {
	console.log(element.name);
    neuArray.push(element.name);
};
console.log('----------------------------------------');

const katFilter2 = inventar.filter (function (element) {
	return element.kategorie === 'Gemüse';
});

console.log('Gemüse: ');
console.log('-------');
for (const element of katFilter2) {
	console.log(element.name);
    neuArray.push(element.name);
};
console.log('----------------------------------------');


console.log('Gesamtzahl aller Produkte: ');
console.log('--------------------------');
let gesAnzahl = 0;
for (let i of inventar) {
    gesAnzahl = gesAnzahl + i.anzahl;
}
console.log(gesAnzahl);
console.log('----------------------------------------');


console.log('alle Produkte in einem Array: ');
console.log('-----------------------------');
console.log(neuArray);
console.log('----------------------------------------');

