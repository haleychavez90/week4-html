// Proof of Life
console.log("Hello, World!");

// App State
const state = {};
console.log(state);
console.table(state);
debugger;

// Event Listener
function saveForm() {
    console.log("button clicked!");
}

// Event Listener Button
document.getElementById("submitBtn").addEventListener("click", saveForm);

// Local Storage
localStorage.setItem("name", "Haley");
localStorage.setItem("age", "29");
localStorage.setItem("species", "Dog");
localStorage.setItem("energy", "80");
localStorage.setItem("happiness", "90");

// Proof of Life
console.log("Hello from script.js");