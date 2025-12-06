// Comparing Callbacks, Promises And Async Await for Async tasks
let container = document.querySelector(".container");

// Callbacks for an Async task
// function colorChanger (color,delay,nextColor) {
//     setTimeout(() => {
//         container.style.backgroundColor = color;
//         nextColor()
//     },delay);
// }

// colorChanger("black",2000, () => {
//     colorChanger("red",2000, () => {
//         colorChanger ("orange",2000, () => {
//             colorChanger("blue",2000, () => {
//                 colorChanger("pink",2000, () => {
//                     colorChanger("yellow", 2000, () => {
//                         colorChanger("green",2000, () => {
//                             colorChanger("white",2000)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })






// Promises for an Async task
// function colorChanger(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       container.style.backgroundColor = color;
//       resolve(console.log("Color changed to " , color));
//     }, delay);
//   });
// }
// colorChanger ("red",2000)
// .then ( () => {
//     return colorChanger ("blue", 2000)
// }).then ( () => {
//     return colorChanger( "pink",2000)
// }).then ( () => {
//     return colorChanger ("black",2000)
// }).then ( () => {
//     return colorChanger("orange",2000)
// }).then ( () => {
//     return colorChanger( "green",2000)
// }).then (() => {
//     return colorChanger ("yellow",2000)
// }).then (() => {
//     colorChanger ("white",2000)
// })
// .catch ( (error) => {
//     console.log(error);
    
// })





// Async Await for an Async Task
function colorChanger (color,delay) {
    return new Promise ( (resolve,reject) => {
        setTimeout(() => {
            container.style.backgroundColor = color
            resolve(console.log("Color changed to ", color))
        }, delay);
    })
}

async function asyncDemo() {
    await colorChanger("red",2000);
    await colorChanger("black",2000);
    await colorChanger("pink",2000);
    await colorChanger("blue",2000);
    await colorChanger("orange",2000);
    await colorChanger("green",2000);
    await colorChanger("yellow",2000);
    await colorChanger("white",2000)
}
asyncDemo()
