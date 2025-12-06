const prompt = require ("prompt-sync") ();
// Functions in javaScript
// Defining a function
function hello () {
    console.log("Hello");
} 

// Calling the function
hello()
// ********************************************************************************************************************




// Write a function which prints the numbers from 1 to 10 
function printNumbers () {
    for (let index = 1; index <= 10; index++) {
        console.log(index);
        
    }
}
printNumbers();


// Create a function to roll a dice and always display the value of the dice (1 to 6)

function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 ;
    console.log(randomNumber);
}
rollDice();



// Functions with parameters 
let userName = prompt("Enter Your name :- ")
function greeting(userName) {
    console.log(`${userName} Welcome to our site :- ` );
}
greeting(userName);



// create a function that gives the average of three numbers 
let number1 = parseInt(prompt("Enter your first Number :- "));
let number2 = parseInt(prompt("Entr your second Number :- "));
let number3 = parseInt(prompt("Enter your third Number :- "));

function calculateAverage (number1, number2, number3) {
    console.log((number1 + number2 + number3 ) / 3);
}
calculateAverage(number1, number2, number3); 



// Create a function that prints the multiplication table of a given number 
let userNumber = parseInt(prompt("Enter your number to print it's table :- "))
function printTable (userNumber) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${userNumber} * ${i} = ${userNumber * i}`);
    }
}
printTable(userNumber)



// Create a functions which concate all the strings and return a single string as output 

let strArray = ["Hi", "Hello", "By", "!"]
let resultedString = "";
function concateStrings (strArray) {
    for (let i = 0; i < strArray.length; i++) {
        resultedString = resultedString + strArray[i]        
    }
    return resultedString
}
console.log(concateStrings(strArray));

// Highter order functions
function higherOrderFunction (func) {
        func()      
}
higherOrderFunction(function () {
    console.log("Higher order function");  
})




// Create a higher order greet function that greets the user n times. 
function multiGreet (func,num) {
    for (let i = 1; i <= num; i++) {    
        func()    
    }
}
let greet = function () {
    console.log("Welcome to our site :- ");   
}
let userNumbers = parseInt(prompt("Enter your number :- "))
multiGreet(greet,userNumber)




// ************************************   Q No.1    *********************************************************
//  Write a JavaScript function that returns array elements larger than a number in a new array.
let numArray = [2,4,3,9,10,13,20,26,35,29,21,7,5,11,17]
let newArray = []
let number = 15;
function largerChecker() {
    for (let i = 0; i < numArray.length; i++) { 
        if (number < numArray[i]) {
            newArray.push(numArray[i])
        }   
    }
    console.log(newArray);
}
largerChecker(numArray);
// ********************************************************************************************************************