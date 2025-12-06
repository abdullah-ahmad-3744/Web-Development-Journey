let string = "";
let display = document.querySelector("#display")
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        try {
            if (event.target.value == "=") {
                string = eval(string)
                display.value = string
            } else if (event.target.value == "AC") {
                string = ""
                display.value = string
            } else if (event.target.value == "DE") {
                string = string.substring(0, string.length-1)
                display.value = string;
            }
             else {
            string = string + event.target.value
            display.value = string
            }
        } catch (error) {
            display.value = "Syntax Error"
            display.style.fontSize = "25px"
            console.log(error);
            
        }
    })
})