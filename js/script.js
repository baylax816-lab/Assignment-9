console.log("script.js loaded");

const apikey ="j9ZZx0Ufc8mFXI8OaJPJobV8VLDLETna";

const gitContainer = document.querySelector("#gif-container");
const fetchGifBtn = document.querySelector("#fetch-gif-btn");
const input = document.querySelector("#search-input");

let images = [];

async function getGifs(searchTerm) {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${searchTerm}&limit=12`;
    const response = await fetch(endpoint);
    const data = await response.json();
    images = data.data.map(gif => gif.images.original.url);
    console.log(images);
    displayGifs();
}

function displayGifs() {
    gitContainer.innerHTML = "";
    images.forEach(url => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");
        const img = document.createElement("img");
        img.src = url;
        img.classList.add("img-fluid");
        col.appendChild(img);
        gitContainer.appendChild(col);
    });
}

fetchGifBtn.addEventListener("click", () => {
    const searchTerm = input.value.trim();
    if (searchTerm) {
        getGifs(searchTerm);
    }
});