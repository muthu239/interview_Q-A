//object is collection of properties
//Properties can be defined in key value pair

//require() - will help us to import the class
const Person = require('./basics8')


let person = {
    firstName : 'Tim',
    lastName : 'Joe',
    score1 : 3,
    fullName1 : function(){
        return this.firstName+this.lastName
    }
}

//printing the value from function which is inside an object. mention the function name with () for accessing the function inside object
console.log(person.fullName1())

// . notation is used to access object properties
console.log(person.lastName)

//another way of accessing is more like accessing arrays
console.log(person['lastName'])
console.log(person['score1'])

//updating at runtime
person.firstName = 'Tom and Jerry'
console.log(person['firstName'])

//addin a property at runtime
person.gender = 'male'
console.log(person)

//deleting a property
delete person.gender
console.log(person)

//verify if property exists in object
console.log('gender' in person) // returns true or false

// iterating through object
//printing javascript objects
for(let key in person){

    console.log(key+" : "+person[key])
}


//creating object for class imported from basics8.js file
let obj3 = new Person('CHris',"Hemsworth")
obj3.fullName()