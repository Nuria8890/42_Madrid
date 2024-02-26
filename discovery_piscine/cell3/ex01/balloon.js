function pincha() {
    crece10();
    cambiaColor();
}


function crece10() {
    const balloonObj = document.getElementById("balloon")
    var tamano = balloonObj.clientWidth + 10 + "px";
    balloonObj.style.width = tamano;
    balloonObj.style.height = tamano;
    console.log(balloonObj)
}

const color = ["red", "green", "blue"];
var colorActual = 1;

function cambiaColor() {
    const balloonObj = document.getElementById("balloon")
    balloonObj.style.background = color[colorActual];
    
    colorActual = colorActual + 1;
    if (colorActual === color.length){
        colorActual = 0;
    }
    console.log(colorActual);
}
