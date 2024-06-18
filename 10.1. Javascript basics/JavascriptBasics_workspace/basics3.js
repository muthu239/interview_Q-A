//arrays - array is a collection of elements

let marks = Array(6) //declaring varaible with the length of array

let marks1 = new Array(20,40,35,12,23,100) //syntax 2

var marks2 = [12,53,13,65,100] //syntax 3

console.log(marks2[2])  //accessing value of array

marks[0] = 12 // assigining value for an index in an array
marks[2] = 14

console.log(marks)  //printing entire array

marks2[1] = 20 //updating an array value
console.log(marks2[1])

console.log(marks2.length) //length of array

marks2.push(65)   //append new element to an arary in the last
console.log(marks2)

marks2.pop() //deleting the last element of an array
console.log(marks2)

marks2.unshift(19) //adding element in the start of an array
console.log(marks2)

//finding an index of a value
console.log(marks2.indexOf(13))

//verify element is present in array or not
console.log(marks2.includes(120))  //returns true or false

//creating subarray
submarks = marks2.slice(2,5)
console.log(submarks)

var sum = 0
for(let i = 0; i<marks2.length;i++){
    console.log(marks2[i])
    sum = sum + marks2[i]

}
console.log(sum)

// Reduce - use reduce, when you have an accumulation of value by traversing through the array
let total = marks2.reduce((sum,totalMarks) => sum+totalMarks,0)
console.log(total)


var scores = [12,13,15,17,46,14]  
var evenScores = []
for(let i = 0; i<scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }

}

console.log(evenScores)


// filter - use filter when you have a condition to filter from an array
let newFilterEvenScores = scores.filter(scoresElement=>scoresElement%2==0)
console.log(newFilterEvenScores)

//map - use when modify each and every value of an array to new value
let mappedArray = newFilterEvenScores.map(scoresElement=>scoresElement*3)
console.log(mappedArray)


let total1 = mappedArray.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(total1)

//chaining the array methods
var scores1 = [12,14,65,11]
let sumValue = scores1.filter(scoresElement=>scoresElement%2==0).map(scoresElement=>scoresElement*3).reduce((sum,value)=>sum+value,0)
console.log(sumValue)


//Sorting an array with strings. //sort() method will only work with strings. and the strings need to be in same upper or lower case throughout
var strArr = ["banana","mango","apple"]
strArr.sort() // ascending
console.log(strArr)
strArr.reverse() //descending
console.log(strArr)

//sorting numbers array
var scores2 = [12,3,19,14]


// scores2.sort(function(a,b){
//     return a-b
// })

// writing functions this way in the below is called anonymous fucntion, where we dont use function keyword or return keyword
console.log(scores2.sort((a,b) => a-b)) //ascending sort of numbers
console.log(scores2.sort((a,b) => b-a)) //descending sort of numbers