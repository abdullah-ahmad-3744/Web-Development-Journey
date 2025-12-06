let url = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("button");
let list = document.querySelector(".list");
// button.addEventListener("click", async () => {
//     let country = document.querySelector("input").value; 
//     console.log(country);
//     let universities = await getUniversities(country)
//     printUniversities(universities)
    
// })

// function printUniversities(universities) {
//     for (const uni of universities) {
//         let li = document.createElement("li")
//         li.textContent = uni.name;
//         list.appendChild(li)
//     }
// }
// let country = "USA"
// async function getUniversities (country) {
//     try {
//         let response = await axios.get(url+country)
//         return response.data;
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

async function getUniversities() {
    let country = document.querySelector("input").value
    let response = await axios.get (url+country)
    let universities = response.data

    
    for (const uni of universities) {
        let li = document.createElement("li");
        li.textContent = uni.name;
        list.appendChild(li);
        console.log(uni.name);
    }
}
button.addEventListener( "click", async () => {
    getUniversities()

})