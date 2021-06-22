let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function(){
      return Math.floor(Math.random()*11)}
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function(){
      return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    move: function(){
      return Math.floor(Math.random()*11)}
};

let dog = {
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    move: function(){
      return Math.floor(Math.random()*11)}
};
let waterBear = {
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function(){
      return Math.floor(Math.random()*11)}
};

// After you have created the other object literals, add the astronautID property to each one.


superChimpOne["astronautID"] = 5;
superChimpTwo["astronautID"] = 7;
salamander["astronautID"] = 8;
dog["astronautID"] = 2;
waterBear["astronautID"] = 9;

console.log(superChimpOne.move());
console.log(superChimpTwo.move());
console.log(salamander.move());
console.log(dog.move());
console.log(waterBear.move());

// Create an array to hold the animal objects.

let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear]



// Print out the relevant information about each animal.


function crewReports(obj){
  obj.forEach(function(obj){
  console.log(`${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.mass}.`)});
}
console.log(crewReports(crew));


// Start an animal race!

function fitnessTest(candidates){
  let results = [];
  let turns = 0;
  let steps = 0;
  for(let i=0; i<candidates.length; i++){
    while(steps < 20){
      steps += candidates[i].move();
      turns++;
    }
    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`)
  }
  return results;
}

console.log(fitnessTest(crew));