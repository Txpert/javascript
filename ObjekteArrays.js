let bibliothek = [
  {
    titel: "Der Hobbit",
    autor: "J.R.R. Tolkien",
    isbn: "978-3-800-00001-2"
  },
  {
    titel: "Harry Potter und der Stein der Weisen",
    autor: "J.K. Rowling",
    isbn: "978-3-800-00002-9"
  },
  {
    titel: "1984",
    autor: "George Orwell",
    isbn: "978-3-800-00003-6"
  }
];

console.log(bibliothek[0]); // Zugriff auf das erste Buchobjekt

console.log(bibliothek[0].titel); 
console.log(bibliothek[1]["autor"]); 
