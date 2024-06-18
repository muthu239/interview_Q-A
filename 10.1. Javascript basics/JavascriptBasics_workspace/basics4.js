//functions

//functions are a block of code
function add(a,b){
    return a+b
}

let add1 = add(2,3)
console.log(add1)

//Anonymous functions -function that does not have name. More of like a function expression
//Anonymous function only can be assigned to a variable
//Method 1 of anonymous function
let sum = function(c,d){
    return c+d
}
console.log(sum(1,7))

// => - called fat pipe symbol
//Method2 od anonymous function
let sum1 = (c,d) => c+d
console.log(sum1(2,3))
