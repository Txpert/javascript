const buecher = [
    { titel: "Der Hobbit", autor: "J.R.R. Tolkien", jahr: 1937, gelesen: true },
    { titel: "Harry Potter und der Stein der Weisen", autor: "J.K. Rowling", jahr: 1997, gelesen: false },
    { titel: "1984", autor: "George Orwell", jahr: 1949, gelesen: true },
    { titel: "Brave New World", autor: "Aldous Huxley", jahr: 1932, gelesen: false }
  ];

  buecher.forEach(buch => console.log(buch.titel + " von " + buch.autor));

  const titelListe = buecher.map(buch => buch.titel);
  console.log(titelListe);
  
  const ungeleseneBuecher = buecher.filter(buch => !buch.gelesen);
  console.log(ungeleseneBuecher);

  const erstesBuchVor1950 = buecher.find(buch => buch.jahr < 1950);
  console.log(erstesBuchVor1950);

  const indexVon1984 = buecher.findIndex(buch => buch.titel === "1984");
  console.log(indexVon1984);

  const buchTitel = buecher.map(buch => buch.titel);
  console.log(buchTitel.includes("Der Hobbit")); // true oder false


  const ist1937Veröffentlicht = buecher.some(buch => buch.jahr === 1937);
  console.log(ist1937Veröffentlicht);

  const alleGelesen = buecher.every(buch => buch.gelesen);
  console.log(alleGelesen);



