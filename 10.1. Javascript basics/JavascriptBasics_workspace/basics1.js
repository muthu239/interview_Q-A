console.log("Hello world") //printing on the terminal

//single line comment

/*

Multi line comment

*/

//declaring a variable
//var -  ES5
//let, const - from ES6

var a = 4
let b = 235.9
console.log(a)

//Data types - Number, String, Boolean, null, undefined
//find the data type - typeOf()
console.log(typeof(b))
console.log(typeof(a))

let c = "String value in variable c"

console.log(c)

let required = true
console.log(typeof(required))

let sum = a+b
console.log(sum)
//let c=a+b(it did not work // we cannot redeclare variable with let keyword but possible with var keyword)
c = a+b //reassiging is allowed
// var c = a+b // this is also allowed
console.log(c)


//not operator
console.log(!required)



