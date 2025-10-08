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
document.getElementById("petsContainer").innerHTML = pets.map(pet => pet.petToHTML()).join("");
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
pets.push(createPet("Lee", 2, "Dog", 60, 80));
pets.push(createPet("Pinky", 1, "Cat", 70, 90));
pets.push(createPet("Bubbles", 1, "Fish", 80, 70));
pets.push(createPet("Flip", 3, "Bird", 50, 60));

// Proof of Life
console.log("Hello from pets.js");
console.log("Hello from petCreator.js");

// Create a Pet
const pet = createPet("Wren", 4, "Dog", 70, 80);
document.getElementById("petInfo").innerHTML = `
    <h2>Pet Information</h2>
    <p>${pet.status()}</p>
`;  

//Render Pets to HTML
function renderPets(petArray) {
    const petContainer = document.getElementById("petContainer");
    petContainer.innerHTML = petArray.map(pet => pet.petToHTML()).join("");
}
renderPets(pets);
