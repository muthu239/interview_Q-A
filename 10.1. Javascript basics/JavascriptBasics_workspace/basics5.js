//scope of let and var

//scope of let - global level/block level{}
let greet = "Morning"

if(1 == 1){
    let greet = "Afternoon"
}


function add(a,b){
    let greet = "Evening"
    return a+b
}

let add1 = add(2,3)
console.log(greet) //Morning is printed


//scope of var - global level/functional
var greet1 = "Morning"

if(1 == 1){
    var greet1 = "Afternoon"
}


function add3(a,b){
    var greet1 = "Evening"
    return a+b
}

let add2 = add3(2,3)
console.log(greet1) //Afternoon is printed. and hence coz of this let was introduced in ES6