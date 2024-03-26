let benutzer = {
    name: "Max Mustermann",
    alter: 28,
    beruf: "Webentwickler"
  };
  
  for (let eigenschaft in benutzer) {
    console.log(eigenschaft + ": " + benutzer[eigenschaft]);
  }
  