// loops
const flag = true

if(!flag){  // the expression is converted to false. The const varaible is not changed //NOT operator
console.log("condition satisfied")
}else{
    console.log(flag)
console.log("condition not satisfied")
}

//while

let  i = 0
while(i<10){
    // console.log("i am inside loop" + i)
i++
 console.log("i am while inside loop" + i)

}

//do-while

do{
    console.log("i am inside do while loop" + i)
}while(i>10);


//for loop
for(let k = 0 ;k<10; k =k+2){
    console.log("i am inside for loop" + k)
}

console.log("****************************************")

let n = 0
for(let j = 1 ;j<=10; j++){
    if(j%2 == 0 && j%5 == 0){   //AND operatio
        console.log(j)
    }

    if(j%2 == 0 || j%5 == 0){  //OR operator
        console.log(j)
        n++
        if(n==3){
            break
        }
    }
}