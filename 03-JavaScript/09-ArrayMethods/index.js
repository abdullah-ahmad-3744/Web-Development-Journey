const prompt = require ("prompt-sync") ();

// Map method
const array = [2,4,6,8,10];
array.map( (element) => {
    console.log(element);
})


// Filter method
const array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
array2.filter( (element) => {
    if (element % 2 == 0) {
        console.log(element);
        
    }
})
// create a new array of odd elements from an existing array
const array3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let oddArray = [];
array3.filter((element) => {
    if (element % 2 != 0) {
        oddArray.push(element)
    }
})
console.log(oddArray);





// ************************************   Q No.1    *********************************************************
//Create a new array using the map function whose each element is equal to the original element plus 5.

const array5 = [2,3,4,5,6,7,8,9];
let newArray = [];
array5.map( (element) => {
    element = element + 5
    newArray.push(element)
})
console.log(array5);

console.log(newArray);
// *******************************************************************************************************************




// ************************************   Q No.2    *********************************************************
//Create a new array whose elements are in uppercase of words present in theoriginal array.
let fruitsArray = ["apple", "banana", "orange", "pineapple", "watermelon"];
let newfruitsArray = [];
fruitsArray.map( (element) => {
    element = element.toUpperCase()
    newfruitsArray.push(element)
})
console.log(fruitsArray);
console.log(newfruitsArray);
// *********************************************************************************************************************