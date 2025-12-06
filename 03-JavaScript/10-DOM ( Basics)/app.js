// Selecting an element in javaScript to manipulate or change it 
let button = document.querySelector("#btn")
let box = document.querySelector("#box");
let buttonCheck = false;

// Click event button 
button.addEventListener("click", () => {
    if(buttonCheck == true) {
        box.style.backgroundColor = "yellow"
        button.innerText = "ON"
        buttonCheck = false
        
    } else {
        box.style.backgroundColor = "white"
        button.innerText = "OFF"
        buttonCheck = true
        
    }
}) 