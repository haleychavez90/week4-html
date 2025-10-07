// Hello World
console.log("Hello, World!");

const state = {};
console.log(state);
console.table(state);
debugger;

function saveForm() {
    console.log("button clicked!");
}

document.getElementById("submitBtn").addEventListener("click", saveForm);
