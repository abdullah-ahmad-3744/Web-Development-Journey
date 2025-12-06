let url = "https://catfact.ninja/fact"

// Sending first request
fetch(url).then( (response) => {
    console.log(response);
    return response.json() // converting data into json format
}).then((data1) => {
    console.log(`Data 1  =  ${data1.fact}`);
    return fetch(url) // Sending anohter request
    
}).then( (response) => {
    return response.json();
}).then((data2) => {
    console.log(`Data 2  =  ${data2.fact}`)
    
})
.catch( (error) => {
    console.log(error);
    
})
