
console.log("petOwnerFactory.js is loaded");

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

console.log(createPetOwner("Alice", "Fluffy", "cat").describe());

