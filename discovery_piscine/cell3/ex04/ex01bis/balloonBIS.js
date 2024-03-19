function pincha() {
    cambiaTamano("sumar");
    cambiaColor("ordenado");
    explota();
}

function ratonSale() {
    cambiaTamano("restar");
    cambiaColor("inverso");
}

function cambiaTamano(accion) {
    const balloonObj = document.getElementById("balloon");
    balloonObj.className = ""; // al finalizar function explota() continúa enlazando la clase efecto, por eso en este punto pongo clase vacía, para que no se repita el efecto de explosión.

    if (accion === "sumar") {
        var tamano = balloonObj.clientWidth + 10;
        console.log("Has pinchado en el balloon y ahora mido " + tamano)
    }
    

    if (accion === "restar") {
        var tamano = balloonObj.clientWidth -5;
        console.log("Has salido del balloon y ahora mido " + tamano)
    }
    

    if (tamano >= 200) {
        balloonObj.style.width = tamano + "px";
        balloonObj.style.height = tamano + "px";
    }
}

const color = ["red", "green", "blue"];
var colorAnterior = 0;

function cambiaColor(sentido) {
    const balloonObj = document.getElementById("balloon");

    if (sentido === "ordenado") {
        colorSiguiente = colorAnterior + 1;
        if (colorAnterior === color.length - 1){
            colorSiguiente = 0;
        }
        console.log("Has pinchado en el balloon y ahora soy de color " + color[colorSiguiente])
    }

    if (sentido === "inverso") {
        colorSiguiente = colorAnterior - 1;
        if (colorAnterior === 0){
            colorSiguiente = color.length - 1;
        }
        console.log("Has salido del balloon y ahora soy de color " + color[colorSiguiente])
    }

    balloonObj.style.background = color[colorSiguiente];
    colorAnterior = colorSiguiente;
}



function explota() {
    const balloonObj = document.getElementById("balloon");
    var tamanoBoom = balloonObj.clientWidth;

    if (tamanoBoom > 420) {
        balloonObj.className = "efecto";
        balloonObj.style.width = 200 + "px";
        balloonObj.style.height = 200 + "px";
    }
    // al finalizar function explota() continúa enlazando la clase efecto, por eso en function cambiaTamano() pongo clase vacía, para que no se repita el efecto de explosión.
}