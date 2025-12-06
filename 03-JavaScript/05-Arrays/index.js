const prompt = require("prompt-sync") ();
// ************************************   Q No.1    *********************************************************
// Create an array and print it's all elements
let array = [1,2,3,4,5,6,7,8,9,10];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);    
}
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Change the given array ['january', 'july', 'march', 'august'] to this ['july', 'june', 'march', 'august'];
let months = ['january', 'july', 'march', 'august'];
months.shift();
months.splice(1, 0, "june")
console.log(months);
// *********************************************************************************************************************




// Concating and reversing the arrays in js
 let numberArray1 = [1,2,3,4,5];
 let numberArray2 = [6,7,8,9,10]
 let numberArray3 = numberArray1.concat(numberArray2);
 console.log(numberArray3);

 let primaryColors = ["red", "yellow", "blue"]
 let secondaryColors = ["orange", "green", "voilet"]
 let allColors = primaryColors.concat(secondaryColors)
 console.log(allColors);
//  Reversing the arrays 
let reversedNumberArray = numberArray3.reverse()
console.log(reversedNumberArray);
let reversedPrimaryColors = primaryColors.reverse()
console.log(reversedPrimaryColors);




// ************************************   Q No.3    *********************************************************
// Return the index of the javaScript from the given array if it was reversed
let programmingLanguages = ['c', 'c++', 'html','javaScript', 'python', 'java', 'c#','sql'];
console.log(programmingLanguages.reverse().indexOf("javaScript"));// Index of javaScript will be 4 after reversing array
// *********************************************************************************************************************




// ************************************   Q No.4    *********************************************************
// Qs1. Write a JavaScript program to get the first n positive elements of an array. For example: for array [7, 9, 0, -2] and n=3Print, [7, 9, 0]
let positiveArray = [3,4,6,-5,30,-11,13]
let newPositiveArray = [];
for (let index = 0; index < array.length; index++) {
    if (positiveArray[index] > 0) {
        newPositiveArray.push(positiveArray[index])
    } else {
    }
}
console.log(newPositiveArray);
//  ********************************************************************************************************************




// ************************************   Q No.5    *********************************************************
// You are given an integer array array The task is to find the sum of it.
let intergerArray = [1,2,3,4,5]
let integerArraySum = 0;
for (let index = 0; index < intergerArray.length; index++) {
    integerArraySum = integerArraySum + intergerArray[index]
}
console.log(integerArraySum);
// *********************************************************************************************************************