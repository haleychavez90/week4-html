// Proof of Life
console.log("Hello from petCreator.js");

// Create Pet Function
function createPet(name, age, species, energy, happiness) {

    // Pet Objects
    const pet = {
        name: name,
        age: age,
        species: species,
        energy: energy,
        happiness: happiness,
    };

    // Pet Methods
    pet.play = function() {
        this.energy -= 10;
    };
    pet.eat = function() {
        this.energy += 10;
        this.happiness += 5;
    };
    pet.sleep = function() {
        this.energy += 20;
        this.happiness -= 5;
    };

// Return Pet Object
    return pet;
}

// Proof of Life
console.log("Hello from pets.js");  
console.log("Hello from petCreator.js");


