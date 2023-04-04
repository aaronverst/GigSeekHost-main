const mosaic = document.querySelector(".maps-container");
const unsplashURL = "https://source.unsplash.com/random/performer";

const ranks = 4;

for (let i = 0; i < ranks * 3; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    mosaic.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}