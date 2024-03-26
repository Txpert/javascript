let numbers = [1, 5, 3, 29, 83, 52, 10, 8, 4]
let smallNumbers = numbers.filter(n =>{
    return n < 10
});
console.log(smallNumbers);


let doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers);

//Ausgabe: [2, 10, 6, 58, 166, 104, 20, 16, 8]