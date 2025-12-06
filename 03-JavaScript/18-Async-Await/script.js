let container = document.querySelector(".container");
function colorChanger (color,delay) {
    return new Promise ( (resolve,reject) => {
        setTimeout(() => {
            container.style.backgroundColor = color;
            resolve()
        },delay);
    })
}
async function asyncDemo() {
    await colorChanger("black",2000);
    await colorChanger("red",2000);
    await colorChanger("blue",2000);
    await colorChanger("pink",2000);
    await colorChanger("green",2000);
    await colorChanger("orange",2000);
    await colorChanger("yellow",2000);
     colorChanger("white",2000);
}
asyncDemo()
