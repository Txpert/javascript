let numbers = [1, 5, 3, 29, 83, 52, 10, 8, 4]
let smallNumbers = numbers.filter(n =>{
    return n < 10
});

console.log(smallNumbers);
//Ausgabe: [1, 5, 3, 8, 4]