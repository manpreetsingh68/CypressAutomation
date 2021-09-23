module.exports = class Person{
    age = 31
    get location(){
        return 'Canada'
    }

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName + ' ' + this.lastName)
    }
   
}

/*let person = new Person('Manpreet', 'Singh')
console.log(person.age)
console.log(person.location)
person.fullName() */