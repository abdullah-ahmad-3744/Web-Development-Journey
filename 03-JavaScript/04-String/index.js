//String and String methods
const prompt = require("prompt-sync") ();
// let name = prompt("Enter your name :- ");
// console.log(name);
// Trim method removes the white spaces from  both ends of the string Strings are immutable in java script so trim method creates another string 
console.log(name.trim());
let newName = name.trim();
console.log(newName);


// Uppper case and lower case methods
let upperCase = name.toUpperCase();
console.log(upperCase);
let lowerCase = name.toLowerCase();
console.log(lowerCase);



// Index of method return the first occurance of the value 
let userNmae = "Abdullah Ahmad"; 
console.log(userNmae.indexOf("Ahmad"));  // It return the index of A which is 9
console.log(userNmae.indexOf("a")); //  passing a single value
console.log(userNmae.indexOf("t")); // If the value is not found int the string then it return -1


// Method chaining
let message = "   IloveCoding,       ";  // Remove white spaces and convert the message to upperCase.
console.log(message);
let newMessage = message.trim().toUpperCase();
console.log(newMessage);

// replace and repeat method 
console.log(newMessage.replace("LOVE", "DO")); // replacig the part of as string
console.log(newMessage.repeat(5)); // repeate th string the times we pass in it




// ************************************   Q No.1    *********************************************************
// Take a string as input and print it's each character 
let string = prompt("Enter your string :- ");
for (let index = 0; index < string.length; index++) {
    console.log(string[index]);
}
// *********************************************************************************************************************

 


// ************************************   Q No.2    *********************************************************
// Reverse a String: Write a program that takes a string as input and returns the string reversed. For example, reverseString("hello") should return "olleh".
let userString = prompt("Enter your string to reverse it :- ");
let newString = "";
for (let index = 1; index <= userString.length; index++) {
    let reverseString = userString[userString.length-index];
    newString = newString + reverseString;
}
console.log(`Reverse string = ${newString}`);
// *********************************************************************************************************************




// ************************************   Q No.3    *********************************************************
// Count the number of vowels (a, e, i, o, u) in a given string. For example, in the string "hello world", there are 3 vowels. Take the string as input from the user
// const vowelCheck = prompt("Enter your string to count the number of vowels in it :- ");
let newVowelCheck = vowelCheck.toLowerCase();
let vowelCount = 0;
for (let index = 0; index < newVowelCheck.length; index++) {
    if (newVowelCheck[index] === "a" || newVowelCheck[index] === "e" || newVowelCheck[index]=== "i" || newVowelCheck[index] === "o" || newVowelCheck[index] === "u" ) {
        vowelCount = vowelCount + 1;
    } else{

    }
}
console.log(`Number of vowels in ${vowelCheck} = ${vowelCount}`);
// *********************************************************************************************************************




// ************************************   Q No.4    *********************************************************
// Given a string, insert a specific character between each pair of consecutive letters. For example, inserting "-" between each character in "hello" should result in "h-e-l-l-o-".
let userString2 = prompt("Enter your string to print - after each character :- ");
let NewString = "";
for (let index = 0; index < userString.length; index++) {
    NewString = NewString + userString[index] + "-";
}
console.log(NewString);
// *********************************************************************************************************************



// ************************************   Q No.5  *********************************************************
// Write a script to check if a string a larger than 11 characters then give a message to user that your name is too lage. Then ask from user if he/she want to proceed further then his/her name reduced to 11 characters

let name = prompt("Enter your Name :- ");
if (name.length > 11) {
    console.log("Your Name is too large:- ");
    let userPermision = prompt("Enter name is too, We are reducing your name to 11 characters.Do you agree Y/N :- ");
    let nweUserPermission = userPermision.toUpperCase();
    if (nweUserPermission === "Y") {
       let newName =  name.slice(0,12);
       console.log(`Your name is stored as :- ${newName}`);
    } else {
        console.log("Try again with a short name of 11 characters :- ");
    }
}else{
    console.log(`Your name is stored as :- ${name}`);
}
// *********************************************************************************************************************