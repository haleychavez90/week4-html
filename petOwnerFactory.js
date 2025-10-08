// Proof of Life
console.log("petOwnerFactory.js is loaded");

// Create Pet Owner Function
function createPetOwner(ownerName, petName, petType) {

    return {
        ownerName: ownerName,
        petName: petName,
        petType: petType,
        describe() {
            return `${this.ownerName} owns a ${this.petType} named ${this.petName}.`;
        }
    };
}

// Proof of Life
console.log("petOwnerFactory.js has been executed");

