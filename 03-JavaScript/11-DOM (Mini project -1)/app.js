let container = document.querySelector(".container");
let colorBox = document.querySelector(".color-box");
let button = document.querySelectorAll(".button");
button.forEach((button) => {
    button.addEventListener("click", (event) => {
        // if (event.target.id === "yellow") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "green") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "orange") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "black") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "red") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "blue") {
        //     container.style.backgroundColor = event.target.id
        // } else if (event.target.id === "white") {
        //     container.style.backgroundColor = event.target.id
        // } else {
        //     console.log("Nothing");
            
        // }
        switch (event.target.id) {
            case "yellow":
                container.style.backgroundColor = event.target.id
                break;
            case "green":
                container.style.backgroundColor = event.target.id
                break;
            case "orange":
                container.style.backgroundColor = event.target.id
                break;
            case "black":
                container.style.backgroundColor = event.target.id
                break;
            case "red":
                container.style.backgroundColor = event.target.id
                break;
            case "blue":
                container.style.backgroundColor = event.target.id
                break;
            case "white":
                container.style.backgroundColor = event.target.id
                break;
            default:
                break;
        }
    })
})
