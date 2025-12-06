let container = document.querySelector(".container");
let button = document.querySelector("button");
let box = document.querySelector(".box");
button.addEventListener("click", (event) => {
    getRandomColor()
})
function getRandomColor () {
    let redColor = Math.floor(Math.random() * 255);
    let greenColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);
    let h3 = document.querySelector("h3")
    let randomColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
    h3.innerText = randomColor
    box.style.backgroundColor = randomColor;
}