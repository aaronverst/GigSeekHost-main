function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/*
document.getElementById("VenueImageHolder").onload = function () {
    generateImage();
}
*/

function generatePerformerImage() {

    var blocks = document.getElementsByClassName("picture");
    var i;

    for (i = 0; i < blocks.length; i++) {

        var retvalue = randomIntFromInterval(1, 30);

        var repImage = '<img src="';

        if (retvalue == 1) {

            repImage += '../assets/img/PerformerImages/img1.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 2) {

            repImage += '../assets/img/PerformerImages/img2.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 3) {

            repImage += '../assets/img/PerformerImages/img3.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 4) {

            repImage += '../assets/img/PerformerImages/img4.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 5) {

            repImage += '../assets/img/PerformerImages/img5.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 6) {

            repImage += '../assets/img/PerformerImages/img6.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 7) {

            repImage += '../assets/img/PerformerImages/img7.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 8) {

            repImage += '../assets/img/PerformerImages/img8.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 9) {

            repImage += '../assets/img/PerformerImages/img9.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 10) {

            repImage += '../assets/img/PerformerImages/img10.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 11) {

            repImage += '../assets/img/PerformerImages/img11.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 12) {

            repImage += '../assets/img/PerformerImages/img12.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 13) {

            repImage += '../assets/img/PerformerImages/img13.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 14) {

            repImage += '../assets/img/PerformerImages/img14.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 15) {

            repImage += '../assets/img/PerformerImages/img15.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 16) {

            repImage += '../assets/img/PerformerImages/img16.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 17) {

            repImage += '../assets/img/PerformerImages/img17.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 18) {

            repImage += '../assets/img/PerformerImages/img18.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 19) {

            repImage += '../assets/img/PerformerImages/img19.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 20) {

            repImage += '../assets/img/PerformerImages/img20.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 21) {

            repImage += '../assets/img/PerformerImages/img21.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 22) {

            repImage += '../assets/img/PerformerImages/img22.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 23) {

            repImage += '../assets/img/PerformerImages/img23.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 24) {

            repImage += '../assets/img/PerformerImages/img24.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 25) {

            repImage += '../assets/img/PerformerImages/img25.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 26) {

            repImage += '../assets/img/PerformerImages/img26.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 27) {

            repImage += '../assets/img/PerformerImages/img27.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 28) {

            repImage += '../assets/img/PerformerImages/img28.jpg" style="width:140px;height:120px">';
        } else if (retvalue == 29) {

            repImage += '../assets/img/PerformerImages/img29.jpg" style="width:140px;height:120px">';
        } else {

            repImage += '../assets/img/PerformerImages/img30.jpg" style="width:140px;height:120px">';
        }



        blocks[i].innerHTML = repImage;
    }
}

