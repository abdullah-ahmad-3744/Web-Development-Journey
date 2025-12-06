// let promise = new Promise ( (resolve,reject) => {
//     console.log("I am promise");
// })



// let promise2 = new Promise( (resolve,reject) => {
//     console.log("I am Promise 2");
//     resolve()
    
// })



// let promise3 = new Promise ( (resolve,reject) => {
//     console.log("I am promise 3");
//     return reject( "Erro 404")
// })
// promise3.then( (value) => {
//     console.log(value);
    
// }).catch( (error) => {
//     console.log(error);
    
// })

let container = document.querySelector(".container");
let h2 = document.querySelector("h2");


function colorChnager (color,delay) {
    return new Promise ( (resolve,reject) => {
        setTimeout ( () => {
            container.style.backgroundColor = color
            resolve("Color Chnaged")
        },delay)
    })
}
colorChnager("red",2000)
.then( (value) => {
    return colorChnager ("black",2000)
    .then ( () => {
        return colorChnager ("yellow",2000)
        .then ( () => {
            return colorChnager("blue",2000)
        })
        .then ( () => {
            return colorChnager ("orange", 2000)
        })
        .then ( () => {
            return colorChnager ("pink",2000)
            .then ( () => {
                return colorChnager ( "green", 2000)
            })
            .then ( () => {
                return colorChnager ("white",2000)
            })
        })
    }).catch ( (erro) => {
        console.log(erro);
        
    })
})



