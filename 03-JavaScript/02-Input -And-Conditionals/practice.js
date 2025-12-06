// for taking input from the user useing prompt sync
const prompt =  require("prompt-sync") ();




// ************************************   Q No.1    *********************************************************
// Create a number variable n and take input from user and check if the number is divisible ny 10 print "Good Number" , if not print "Normal number"

const number = prompt("Enter your number to chech whether it is divisible by 10 or not :- ")
if (number %10 == 0) {
    console.log(`${number} is a Good Number `);
} else {
    console.log(`${number} is a Normal Number`);
}
// *******************************************************************************************************************




// ************************************   Q No.2    *********************************************************
// Take a number as an input from the user and check it is positive or not 
const positiveCheck = Number( prompt("Enter your number to check is it positive or not :- ") );
if (positiveCheck > 0) {
    console.log(`${positiveCheck} is a positive number`);
} else if (positiveCheck == 0) {
    console.log(`Your number is zero`);
} else {
    console.log(`${positiveCheck} is a negative number`);
}
// ********************************************************************************************************************




// ************************************   Q No.3    *********************************************************
// A string is a golden string if it is started with "A" or "a" And has a total length greater than 5 for a given string check and print is it a golden string or not 
const goldenSringCheck = prompt("Enter your string to check is is a golden string or not :- ");
if (goldenSringCheck[0] === "A" || goldenSringCheck[0] === "a" && goldenSringCheck.length > 5) {
    console.log(`${goldenSringCheck} is a golden string`);
} else {
    console.log(`${goldenSringCheck} is a normal string`);
}
// *********************************************************************************************************************




// ************************************   Q No.4    *********************************************************
// Take a number from user and check is it odd or even
const usernumber = Number(prompt("Enter your number to check OOD or Even :- "));
if (usernumber % 2 == 0) {
    console.log(`${usernumber} is an Even Number`);
} else {
    console.log(`${usernumber} is an ODD number`);
}
// *********************************************************************************************************************




// ************************************   Q No.5    *********************************************************
// Get the age of user and check if age 18 or above  he can vote and can drive if not he can not drive and vote 
const userAge = Number (prompt("Enter your age to check whether you cn vote or not :- "))
if (userAge >= 18) {
    console.log("You can vote and also you can Drive ");
} else {
    console.log("You can not Vote and Drive");
}
// *********************************************************************************************************************




// ************************************   Q No.6    ********************************************************************
// Write a switch case statement to print months in a quarter year 
// Months in first Quarter [January , February, March,]
// Months in second Quarter [April, May, June]
// Month in third Quarter [July, August, September]
// Months in fourth Quarter [October, November, December]

let monthsInYear = [['January', 'February', 'March'], ['April', "May", 'June'], ['July', 'August', 'September'], ['October', 'November', 'December']] ;

const quarterNumber = Number( prompt("Enter Number from 1 to 4 to print the months of quarter :- "));
switch (quarterNumber) {
    case 1:
        console.log(monthsInYear[0]);
        break;
    case 2 : 
        console.log([monthsInYear[1]]);
        break;
    case 3 : 
        console.log(monthsInYear[2]);
        break;
    case 4 : 
        console.log(monthsInYear[3]);
        break
    default:
        break;
}