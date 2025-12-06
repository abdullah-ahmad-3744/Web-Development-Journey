let container = document.querySelector(".container");

function colorChanger (color, delay,nextColor) {
    setTimeout( () => {
        container.style.backgroundColor = color;
        nextColor()
    },delay)
}
colorChanger ("red",2000, () => {
    colorChanger("orange",2000, () => {
        colorChanger("green",2000, () => {
            colorChanger("blue",2000, () => {
                colorChanger("yellow", 2000, () => {
                    colorChanger("pink", 2000, () => {
                        colorChanger("black", 2000, () => {
                            colorChanger("white",2000)
                        })
                    })
                })
            })
        })
    })
})
