// Proof of life
console.log("Hello from pets.js");
console.log("Hello from petCreator.js");

// Import Functions
const createPet = require('./petCreator');
const myPet
    = createPet("Hello", 3, "Dog", 50, 70);
myPet.status = function() {
    return `Name: ${this.name}, Age: ${this.age}, Species: ${this.species}, Energy: ${this.energy}, Happiness: ${this.happiness}`;
}
// Testing Pet Methods
console.log(myPet.status());
myPet.play();
console.log(myPet.status());
myPet.eat();
console.log(myPet.status());
myPet.sleep();
console.log(myPet.status());

// Event Listener for Buttons
document.getElementById("playButton").addEventListener("click", function() {
    myPet.play();
    document.getElementById("status").innerText = myPet.status();
});document.getElementById("eatButton").addEventListener("click", function() {
    myPet.eat();
    document.getElementById("status").innerText = myPet.status();
});document.getElementById("sleepButton").addEventListener("click", function() {
    myPet.sleep();
    document.getElementById("status").innerText = myPet.status();
});

// Create and Manage Pets
const pets = [];
pets.push(createPet("Buddy", 2, "Dog", 60, 80));
pets.push(createPet("Mittens", 1, "Cat", 70, 90));
pets.push(createPet("Goldie", 1, "Fish", 80, 70));
pets.push(createPet("Tweety", 3, "Bird", 50, 60));

// Proof of Life
console.log("Hello from pets.js");
console.log("Hello from petCreator.js");