let apiUrl = "https://catfact.ninja/fact";
let factButton = document.querySelector(".fact-button");
let factBox = document.querySelector(".fact-box")

async function fetchData() {
  try {
    // The await keywords wait for the response from the server as it is asynchronous so we have to wait for the response from the server befor using it
    let response = await fetch(apiUrl);
    let validResponse = await response.json();
    // console.log(response);
    // console.log(validResponse.fact);
    factBox.textContent = validResponse.fact
  } catch (error) {
    console.log("Error is = ",error);    
  }
}

factButton.addEventListener("click", () => {
  // factBox.textContent = " "
  fetchData();
})
