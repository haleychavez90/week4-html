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
