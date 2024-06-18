//classes in JS
// classes is introduced only in ES6

//module.exports = class className -> //will help us access this class properties in other classes 

module.exports = class Person{
    age = 25

    //if we put get in front of a function it is treated as a property
    //location = "canada"
    get location(){
        return "canada"
    }

    //constructor is method which executes by default when you create object for a class
    constructor(firstName,lastName){
        this.firstName = firstName
        this.lastName = lastName

    }

    //creating a method inside a class
    fullName(){ 
        console.log(this.firstName + this.lastName)
        return "Method can return values"
    }

}

//creating obj for a class
// let obj = new Person("tim","Joe")
// let obj1 = new Person("Tom", "Jerry")

// //accessing using objects created for class
// console.log(obj.age)
// console.log(obj.location)
// obj.fullName()
// console.log(obj1.fullName())
