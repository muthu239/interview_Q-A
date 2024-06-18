//Inheritance is the main pillar of object oriented programming
//One class can inherit/acqurie the properties, Methods of another class\
//The class which inherits the properties of other is known as derived class/child class
//The class whose properties are inherties are called super class

//importing the class
const Person = require("./basics8");

// to inherit use extends keyword
class Pet extends Person{

    //Method override
    get location(){
        return "BlueCross"
    }

    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName)
    }

}


let objectPet = new Pet("sam","kafka")
objectPet.fullName()
console.log(objectPet.fullName())
console.log(objectPet.location)