

function changeColor() {


    if (document.body.style.backgroundColor == "greenyellow") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "greenyellow";
    }
}
function randomColor() {
    var colors = ["red", "green", "yellow", "orange"];
    var random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}

function colorGeneratorRgb() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
}

function colorGeneratorHex() {
    var red = convertToHex(Math.floor(Math.random() * 15));
    var red1 = convertToHex(Math.floor(Math.random() * 15));
    var green = convertToHex(Math.floor(Math.random() * 15));
    var green1 = convertToHex(Math.floor(Math.random() * 15));
    var blue = convertToHex(Math.floor(Math.random() * 15));
    var blue1 = convertToHex(Math.floor(Math.random() * 15));

    
    var randomColor = "#" + red + red1 + green + green1 + blue + blue1;
    document.body.style.backgroundColor = randomColor;
    console.log(randomColor);
}

function convertToHex(value) {
    if (value == 10) {
         return "A";
    } else if (value == 11) {
        return "B"
    } else if (value == 12) {
        return "C"
    } else if (value == 13) {
        return "D"
    } else if (value == 14) {
        return "E"
    } else if (value == 15) {
        return "F"
    } else {
        return value;
    }
}
