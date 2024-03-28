const inventar = [
  { name: "Apfel", kategorie: "Obst", anzahl: 10 },
  { name: "Banane", kategorie: "Obst", anzahl: 20 },
  { name: "Birne", kategorie: "Obst", anzahl: 15 },
  { name: "Karotte", kategorie: "Gemüse", anzahl: 10 },
  { name: "Spinat", kategorie: "Gemüse", anzahl: 5 },
  { name: "Kartoffel", kategorie: "Gemüse", anzahl: 25 }
];

// 1. Produktliste nach Kategorie
let kategorien = {};

for (let produkt of inventar) {
  if (!kategorien[produkt.kategorie]) {
    kategorien[produkt.kategorie] = [];
  }

  kategorien[produkt.kategorie].push(produkt.name);
  console.log(kategorien)
}

console.log("Produktliste nach Kategorie:");
for (let kategorie in kategorien) {
  console.log(kategorie + ": " + kategorien[kategorie].join(", "));
}

// 2. Gesamtanzahl der Produkte im Inventar
let gesamtanzahl = 0;

for (let produkt of inventar) {
  gesamtanzahl += produkt.anzahl;
}

console.log("Gesamtanzahl der Produkte im Inventar: " + gesamtanzahl);
