//string manipulations
//string - string is a array of characters together

let day = 'monday '

console.log(day.length) //length

//substring
console.log(day.slice(0,4))

//access character
console.log(day[2])

//split string 
let splitStr = day.split('n')
console.log(splitStr[1].length)

//trim - trim whitespaces on leading and trailing end of string
console.log(splitStr[1].trim().length)

let date1 = '23'
let date2 = '27'

//conversion of string to numebr
let diff = parseInt(date2)-parseInt(date1)

//integer to strinf
diff.toString()

//concatenate
let concateStr = day + " is funday"
console.log(concateStr)

//find index of string - if not found it'll return -1
let strVal = concateStr.indexOf("day")
console.log(strVal)

let strVal1 = concateStr.indexOf("day",5) //this will start its search from 5th index of searching string
console.log(strVal1)

//find number of occurence
let strVal3 = concateStr.indexOf("day")
let count = 0
while(strVal3 !== -1){
    count++
    strVal3 = concateStr.indexOf("day",strVal3+1)

}
console.log("Count is " + count)

