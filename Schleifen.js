let number = 0;

while (number < 7) {
    console.log(number);
    number++
}

for (let i = 0; i < 10; i++) {
    console.log(i);

}

let counter = 0;

do {
    counter++;
    console.log(counter);
} while (counter < 100);

let days = 7;
let week = 5;

for (let i =1; i <= week; i++)
{
    console.log("woche: " + i);

    for (let j = 1; j <= days; j++) 
    {
        console.log("Tage:" + j);
    }
}

