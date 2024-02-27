function pincha() {
    crece10();
    cambiaColor();
    explota();
}


function crece10() {
    const balloonObj = document.getElementById("balloon");
    var tamano = balloonObj.clientWidth + 10 + "px";
    balloonObj.style.width = tamano;
    balloonObj.style.height = tamano;

    console.log(balloonObj)
}


const color = ["red", "green", "blue"];
var colorActual = 0;

function cambiaColor() {
    const balloonObj = document.getElementById("balloon");

    colorSiguiente = colorActual + 1;
    if (colorActual === color.length - 1){
        colorSiguiente = 0;
    }
    console.log("antes de cambiar " + colorActual);

    balloonObj.style.background = color[colorSiguiente];
    colorActual = colorSiguiente;
    console.log("después de cambiar: " +colorActual);
}


function explota() {
    const balloonObj = document.getElementById("balloon");
    var tamanoBoom = balloonObj.clientWidth;

    console.log(tamanoBoom);

    if (tamanoBoom >= 420) {
        balloonObj.style.width = 200 + "px";
        balloonObj.style.height = 200 + "px";
    }
}