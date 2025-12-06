const prompt = require("prompt-sync");

// Creating an object in javaScript 
const Object = {
    name : "Abdulah Aahmad",
    age : 23,
    address : "Bahawalpur"
}
// Accessin the object properties 
console.log(Object.name);
console.log(Object.address);
// *********************************************************************************************************************




// ************************************   Q No.1    *********************************************************
// Creat an object literal for the properties of thread/twitter post which includes =>[ userName, content, likes, reposts,tags ]

const post = {
    userName : "@JohnSmith",
    content : "This is my #firstpost",
    likes : 300,
    reposts : 21,
    tags : ["@adam", "@Ali"]
}
console.log(post.likes);
// *********************************************************************************************************************




// ************************************   Q No.2    *********************************************************
//  Perform the following operation on existing objects  => change city name , add a new property gender, change the age , delete any property 
// Creating an object 
const student = {
    name : "Abdullah Ahmad",
    age : 22,
    city : "Bahawalpur",
    marks : 92.32
}
// Changing the city name
student.city = "Lahore";
console.log(student.city); // City is updated to new city lahore 


// Adding a new property gender in student object 
student.gender = "Male";
console.log(student.gender); // New property gender added in student object 


// Deleting a property from student Object 
delete student.marks
console.log(student); // Marks property is deleted from student object 
// *********************************************************************************************************************




// ************************************   Q No.3    *********************************************************
const classRoom = {
    student1 : 
    {name: "Juli",city: "New York",gender: "Female",marks: {  math: 85,  science: 90,  english: 88,history: 76 }},
    student2 :  
    {name: "Bob",city: "Los Angeles",gender: "Male",marks: {  math: 78,  science: 82,  english: 80,  history: 74}},
    student3 :  
    {name: "Adam",city: "Chicago",gender: "Male",marks: {  math: 92,  science: 87,  english: 85,  history: 88}},
    student4 :  
    {name: "Diana",city: "Houston",gender: "Female",marks: {  math: 90,  science: 92,  english: 91,  history: 89}},
    student5 :
    {name: "John",city: "Phoenix",gender: "Male",marks: {math: 75,science: 80,english: 78,history: 72}}};
  console.log(classRoom); // Accessing all students of class 


  console.log(classRoom.student1); // Accessing student1
  console.log(classRoom.student1); // Accessing student2
  console.log(classRoom.student1); // Accessing student5
  

  // Acces the city of 3rd student of class 
  console.log(classRoom.student3.city); // City of 3rd student is Chiago


//   Update the math marks for John from 75 to 85:
console.log(classRoom.student5.marks.math = 85);  // Marks of John updated from 75 to 85


//  Calculate the average marks for July:
let julyMarks = classRoom.student1.marks
console.log(julyAverageMarks = (julyMarks.math + julyMarks.science + julyMarks.english + julyMarks.history)/4);// Average of july marks are 84.75
// ************************************************************************************************************************




// Math object in  and it's most commonly used methds js 
let absoluteMethod = Math.abs(12); // Absolute method of Math Object 
console.log(absoluteMethod);
console.log(Math.abs(-23));


// Random metod of math object 
let random = Math.random(); //Generates a random numner
console.log(random);


// Floor method of Math object 
let floorMethod = Math.floor(5.67892); // Round off to its nearest bottom number 
console.log(floorMethod);


// Ceil method of Math object
let ceilMethod = Math.ceil(8.0000122340); // Round of to it's nearest upper/top number 
console.log(ceilMethod);


// Power Method of Math Object 
let powerMethod = Math.pow(2,8); 
console.log(powerMethod);

// *********************************************************************************************************************




// ************************************   Q No.4    *********************************************************
// Generate a random integer from 1 to 10 
let randomNumber = Math.random() * 10;    // Multiplying by 10 because range is from 1 to 10
 // Now converting this random number to an integer
let randomInteger = Math.floor(randomNumber) + 1;
console.log(randomInteger);

// Now converting into single line 
console.log(Math.floor(Math.random() * 10) + 1);


// Generating a random number from 1 to 100 
console.log(Math.floor(Math.random() * 100 ) +1 );

// Generating a random number from 1 to 5 
console.log(Math.floor(Math.random() * 5) + 1);

// Generating random numbers from 35 to 85
console.log(Math.floor(Math.random() * 45) + 35 );

// *********************************************************************************************************************


