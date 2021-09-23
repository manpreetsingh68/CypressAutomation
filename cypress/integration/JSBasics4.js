const Person = require('./JSBasics3')

class Pet extends Person {

    get location(){
        return 'USA'
    }

    constructor(firstName, lastName){
        super(firstName, lastName)
    }
}

let pet = new Pet('Scooby','Doo')
console.log(pet.age)
console.log(pet.location)
pet.fullName()