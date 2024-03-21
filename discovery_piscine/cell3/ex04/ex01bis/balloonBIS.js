$('#balloon').on('click', function () {
    cambiaTamano("sumar");
    cambiaColor("ordenado");
    explota();
})

$('#balloon').on('mouseout', function () {
    cambiaTamano("restar");
    cambiaColor("inverso");
})

function cambiaTamano(accion){
    const balloonObj = $("#balloon");
    
    balloonObj.removeClass("efecto"); // al finalizar function explota() continúa enlazando la clase efecto, por eso en este punto elimino la clase efecto, para que no se repita el efecto de explosión.

    if (accion === "sumar") {
        var tamano = balloonObj.width() + 10;
        console.log("Has pinchado en el balloon y ahora mido " + tamano + "px");
    }
    

    if (accion === "restar") {
        var tamano = balloonObj.width() -5;
        console.log("Has salido del balloon y ahora mido " + tamano + "px");
    }
    

    if (tamano >= 200) {
        balloonObj.width(tamano);
        balloonObj.height(tamano);
    }
}

const color = ["red", "green", "blue"];
var colorAnterior = 0;

function cambiaColor(sentido) {
    const balloonObj = $("#balloon");

    if (sentido === "ordenado") {
        colorSiguiente = colorAnterior + 1;
        if (colorAnterior === color.length - 1){
            colorSiguiente = 0;
        }
        console.log("Has pinchado en el balloon y ahora soy de color " + color[colorSiguiente]);
    }

    if (sentido === "inverso") {
        colorSiguiente = colorAnterior - 1;
        if (colorAnterior === 0){
            colorSiguiente = color.length - 1;
        }
        console.log("Has salido del balloon y ahora soy de color " + color[colorSiguiente]);
    }

    balloonObj.css("background", color[colorSiguiente]);
    colorAnterior = colorSiguiente;
}



function explota() {
    const balloonObj = $("#balloon");
    var tamanoBoom = balloonObj.width();

    if (tamanoBoom > 420) {
        balloonObj.addClass("efecto");
        balloonObj.width(200);
        balloonObj.height(200);
    }
    // al finalizar function explota() continúa enlazando la clase efecto, por eso en function cambiaTamano() elimino la clase efecto, para que no se repita el efecto de explosión.
}