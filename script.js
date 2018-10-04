

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

function colorGenerator() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.backgroundColor = randomColor;
    
}