array.forEach(function(element, index, arr) {
    // Logik hier
  });

  
  let zahlen = [1, 2, 3, 4, 5];

zahlen.forEach(function(zahl) {
  console.log(zahl);
});


let zahlen1 = [10, 20, 30, 40, 50];

zahlen1.forEach(function(zahl, index, arr) {
  console.log("Index " + index + ": " + zahl + " im Array " + arr);
});
