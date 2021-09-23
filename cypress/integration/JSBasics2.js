const person1 = require('./JSBasics3')

let person = {
    firstName : 'Manpreet',
    lastName : 'Singh',
    age : 31,
    fullName : function(){
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.firstName)
console.log(person.age)
console.log(person.fullName())
person.email = 'test@abc.com'
console.log(person)

let personObj = new person1('Manpreet', 'Singh')
let personObj2 = new person1('Amrita', 'Kaur')
console.log(personObj.age)
console.log(personObj.location)
personObj.fullName()

console.log(personObj2.age)
console.log(personObj2.location)
personObj2.fullName()


