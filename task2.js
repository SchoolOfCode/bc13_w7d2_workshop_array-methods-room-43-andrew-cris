let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(function(animals){
  return animals.charAt(0) === "b";
})
console.log(bListAnimals)