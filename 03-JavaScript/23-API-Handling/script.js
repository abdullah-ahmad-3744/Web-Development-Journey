let dogsPicApi = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector(".button");
let image = document.querySelector("img");

try {
    async function getImage() {
        let response = await axios.get (dogsPicApi);
        let imageUrl = await response.data.message;
        image.setAttribute("src",imageUrl)
    }
    
    
    button.addEventListener("click", () => {
        getImage();
        console.log("Button was Clicked");
    })
} catch (error) {
    console.log("Error is = ", error);
    
}





