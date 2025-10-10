// Proof of Life
console.log("petOwnerFactory.js is loaded");

// Create Pet Owner Function
function createPetOwner(ownerName, petName, petType) {
    // HTML Method for Pet Object
    function petToHTML(pet) {
        return `
            <div class="pet">
                <h3>${pet.name}</h3>
                <p>Species: ${pet.species}</p>
                <p>Age: ${pet.age}</p>
                <p>Energy Level: ${pet.energy}</p>
                <p>Happiness Level: ${pet.happiness}</p>
            </div>
        `;
    }

    return {
        ownerName: ownerName,
        petName: petName,
        petType: petType,
        petToHTML: petToHTML,
        describe() {
            return `${this.ownerName} owns a ${this.petType} named ${this.petName}.`;
        }
    };
}

// Proof of Life
console.log("petOwnerFactory.js has been executed");
