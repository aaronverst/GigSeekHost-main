function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
document.getElementById("VenueImageHolder").onload = function () {
    generateImage();
}
*/
var retvalue = randomIntFromInterval(1, 3);

function generateVenueImage() {

    var blocks = document.getElementsByClassName("picture");
    var i;

    for (i = 0; i < blocks.length; i++) {

        var retvalue = randomIntFromInterval(1, 30);

        var repImage = '<img src="';

        if (retvalue == 1) {

            repImage += '../assets/img/VenueImages/img1.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 2) {

            repImage += '../assets/img/VenueImages/img2.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 3) {

            repImage += '../assets/img/VenueImages/img3.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 4) {

            repImage += '../assets/img/VenueImages/img4.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 5) {

            repImage += '../assets/img/VenueImages/img5.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 6) {

            repImage += '../assets/img/VenueImages/img6.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 7) {

            repImage += '../assets/img/VenueImages/img7.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 8) {

            repImage += '../assets/img/VenueImages/img8.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 9) {

            repImage += '../assets/img/VenueImages/img9.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 10) {

            repImage += '../assets/img/VenueImages/img10.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 11) {

            repImage += '../assets/img/VenueImages/img11.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 12) {

            repImage += '../assets/img/VenueImages/img12.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 13) {

            repImage += '../assets/img/VenueImages/img13.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 14) {

            repImage += '../assets/img/VenueImages/img14.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 15) {

            repImage += '../assets/img/VenueImages/img15.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 16) {

            repImage += '../assets/img/VenueImages/img16.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 17) {

            repImage += '../assets/img/VenueImages/img17.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 18) {

            repImage += '../assets/img/VenueImages/img18.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 19) {

            repImage += '../assets/img/VenueImages/img19.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 20) {

            repImage += '../assets/img/VenueImages/img20.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 21) {

            repImage += '../assets/img/VenueImages/img21.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 22) {

            repImage += '../assets/img/VenueImages/img22.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 23) {

            repImage += '../assets/img/VenueImages/img23.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 24) {

            repImage += '../assets/img/VenueImages/img24.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 25) {

            repImage += '../assets/img/VenueImages/img25.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 26) {

            repImage += '../assets/img/VenueImages/img26.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 27) {

            repImage += '../assets/img/VenueImages/img27.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 28) {

            repImage += '../assets/img/VenueImages/img28.jpeg" style="width:140px;height:120px">';
        } else if (retvalue == 29) {

            repImage += '../assets/img/VenueImages/img29.jpeg" style="width:140px;height:120px">';
        } else {

            repImage += '../assets/img/VenueImages/img30.jpeg" style="width:140px;height:120px">';
        }



        blocks[i].innerHTML = repImage;
    }
}

