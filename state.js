// App State
const state = {};
console.log(state);
console.table(state);
debugger;

// Proof of Life
console.log("Hello from state.js");

// Load Data Back into State
state.name = localStorage.getItem("name");
state.age = localStorage.getItem("age");
state.species = localStorage.getItem("species");
state.energy = localStorage.getItem("energy");
state.happiness = localStorage.getItem("happiness");
console.log(state);

// Proof of Life
console.log("Hello from state.js");

function loadPets() {
 let petString = localStorage.getItem("pets");
  const savedPets = JSON.parse(petString) || [];
  state.pets = [];
  for(let i=0; i<savedPets.length; i++) {
    const petData = savedPets[i];
    state.pets.push(createPet(petData.name, petData.age, petData.species));
  }
}

loadPets();