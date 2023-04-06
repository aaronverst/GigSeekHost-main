const mosaic = document.querySelector(".maps-container");
const unsplashURL = "https://source.unsplash.com/random/performer";

const ranks = 4;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
document.getElementById("VenueImageHolder").onload = function () {
    generateImage();
}
*/

for (let i = 0; i < ranks * 3; i++) {
    const img = document.createElement("div");
    console.log(generatePerformerImage())
    img.className = "picture1"
    mosaic.appendChild(img);
    generatePerformerImage();
}

function generatePerformerImage() {

    var blocks = document.getElementsByClassName("picture1");
    var i;

    for (i = 0; i < blocks.length; i++) {

        var retvalue = randomIntFromInterval(1, 30);

        var repImage = '<img src="';

        if (retvalue == 1) {

            repImage += '../assets/img/VenueImages/img1.jpeg">';
        } else if (retvalue == 2) {

            repImage += '../assets/img/VenueImages/img2.jpeg">';
        } else if (retvalue == 3) {

            repImage += '../assets/img/VenueImages/img3.jpeg">';
        } else if (retvalue == 4) {

            repImage += '../assets/img/VenueImages/img4.jpeg">';
        } else if (retvalue == 5) {

            repImage += '../assets/img/VenueImages/img5.jpeg">';
        } else if (retvalue == 6) {

            repImage += '../assets/img/VenueImages/img6.jpeg">';
        } else if (retvalue == 7) {

            repImage += '../assets/img/VenueImages/img7.jpeg">';
        } else if (retvalue == 8) {

            repImage += '../assets/img/VenueImages/img8.jpeg">';
        } else if (retvalue == 9) {

            repImage += '../assets/img/VenueImages/img9.jpeg">';
        } else if (retvalue == 10) {

            repImage += '../assets/img/VenueImages/img10.jpeg">';
        } else if (retvalue == 11) {

            repImage += '../assets/img/VenueImages/img11.jpeg">';
        } else if (retvalue == 12) {

            repImage += '../assets/img/VenueImages/img12.jpeg">';
        } else if (retvalue == 13) {

            repImage += '../assets/img/VenueImages/img13.jpeg">';
        } else if (retvalue == 14) {

            repImage += '../assets/img/VenueImages/img14.jpeg">';
        } else if (retvalue == 15) {

            repImage += '../assets/img/VenueImages/img15.jpeg">';
        } else if (retvalue == 16) {

            repImage += '../assets/img/VenueImages/img16.jpeg">';
        } else if (retvalue == 17) {

            repImage += '../assets/img/VenueImages/img17.jpeg">';
        } else if (retvalue == 18) {

            repImage += '../assets/img/VenueImages/img18.jpeg">';
        } else if (retvalue == 19) {

            repImage += '../assets/img/VenueImages/img19.jpeg">';
        } else if (retvalue == 20) {

            repImage += '../assets/img/VenueImages/img20.jpeg">';
        } else if (retvalue == 21) {

            repImage += '../assets/img/VenueImages/img21.jpeg">';
        } else if (retvalue == 22) {

            repImage += '../assets/img/VenueImages/img22.jpeg">';
        } else if (retvalue == 23) {

            repImage += '../assets/img/VenueImages/img23.jpeg">';
        } else if (retvalue == 24) {

            repImage += '../assets/img/VenueImages/img24.jpeg">';
        } else if (retvalue == 25) {

            repImage += '../assets/img/VenueImages/img25.jpeg">';
        } else if (retvalue == 26) {

            repImage += '../assets/img/VenueImages/img26.jpeg">';
        } else if (retvalue == 27) {

            repImage += '../assets/img/VenueImages/img27.jpeg">';
        } else if (retvalue == 28) {

            repImage += '../assets/img/VenueImages/img28.jpeg">';
        } else if (retvalue == 29) {

            repImage += '../assets/img/VenueImages/img29.jpeg">';
        } else {

            repImage += '../assets/img/VenueImages/img30.jpeg">';
        }

        blocks[i].innerHTML = repImage;
    }
}



function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
}
