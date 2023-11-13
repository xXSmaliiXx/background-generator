var css1 = document.getElementById("rgb-text");
var css2 = document.getElementById("hex1-text");
var css3 = document.getElementById("hex2-text");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body1");
var button = document.getElementById("random");

function randomColor() {
    //First random color check:
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color11 = "rgb(" + red + ", " + green + ", " + blue + ")";
    var color3 = rgbToHex(red, green, blue);
    css2.textContent = "This is first HEX Code -----> " + rgbToHex(red, green, blue);
    //Second random color check:
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var color22 = "rgb(" + red + ", " + green + ", " + blue + ")";
    var color4 = rgbToHex(red, green, blue);
    css3.textContent = "This is second HEX Code -----> " + rgbToHex(red, green, blue);
    //Final Background SET:
    body.style.background =
        "linear-gradient(to right, " +
        color11 + ", " + color22 + ")";

    color1.value = color3;
    color2.value = color4;
    css1.textContent = "This is a RGB Code -----> " + body.style.background + ";";
}


function rgbToHex(red, green, blue) {
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    var hexColor = "#" + redHex + greenHex + blueHex;
    return hexColor;
}


function colorChange() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value + ", " +
        color2.value + ")";

    css1.textContent = "This is a RGB Code -----> " + body.style.background + ";";

};

color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);
button.addEventListener("click", randomColor);