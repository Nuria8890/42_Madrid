//Creo la función pincha para que cuando pinche en el balón ocurran 3 cosas: crecer su tamaño, cambiar el color y explotar en un caso concreto.
function pincha() {
    cambiaTamano("sumar");
    cambiaColor("ordenado");
    explota();
}

///Creo la función ratónSale para que cuando salga del balón ocurran 2 cosas: disminuir su tamaño y cambiar el color de forma inversa a cuando pincho.
function ratonSale() {
    cambiaTamano("restar");
    cambiaColor("inverso");
}

function cambiaTamano(accion) {
    const balloonObj = document.getElementById("balloon"); //Busca en html el elemento con el id="balloon" (el propio div del balón).

    balloonObj.className = ""; // al finalizar function explota() continúa enlazando la clase efecto, por eso en este punto pongo clase vacía, para que no se repita el efecto de explosión.

    if (accion === "sumar") { // Cuando pincho en el balón, mi acción de cambiar tamaño es sumar, así que entrará aquí. 
        var tamano = balloonObj.clientWidth + 10; // Creo una variable tamaño que lo que hace es sumar 10 "al ancho del balón". (En realidad no es al ancho, porque más abajo indico que el *estilo* del ancho y el alto sea mi variable tamaño, así que lo que en realidad está haciendo ahora es aumentar en 10 el balón, pero todavía no le he indicando a qué le tiene que sumar esos 10).

        console.log("Has pinchado en el balloon y ahora mido " + tamano)
    }
    

    if (accion === "restar") {  // Cuando salgo del balón, mi acción de cambiar tamaño es restar, así que entrará aquí. 
        var tamano = balloonObj.clientWidth -5;
        console.log("Has salido del balloon y ahora mido " + tamano)
    }
    

    if (tamano >= 200) { // Si el balón mide más o igual a 200px, entonces suma o resta los píxeles. Si es menor, no hagas nada. ("Nunca puede ser menor de 200px, porque nunca va a hace nada cuando llegue a ese valor, por lo tanto nunca llegará a ese valor").
        balloonObj.style.width = tamano + "px"; // Aquí le indico que el estilo de ancho del balón tiene que ser mi variable tamaño + las letras px.
        balloonObj.style.height = tamano + "px"; // Aquí le indico que el estilo de alto del balón tiene que ser mi variable tamaño + las letras px.
    }
}

const color = ["red", "green", "blue"]; // Hago un array con la secuencia de colores
var colorAnterior = 0; // Indico que el color anterior (actual) es el rojo porque en css le digo que es rojo, y tiene que empezar por ahí.

function cambiaColor(sentido) {
    const balloonObj = document.getElementById("balloon");

    if (sentido === "ordenado") {
        colorSiguiente = colorAnterior + 1; // El siguiente color será el color anterior + 1 en mi array.
        if (colorAnterior === color.length - 1){ // Si el color anterior ha sido el azul...
            colorSiguiente = 0;// ... entonces el color siguiente será el rojo.
        }
        console.log("Has pinchado en el balloon y ahora soy de color " + color[colorSiguiente])
    }

    if (sentido === "inverso") {
        colorSiguiente = colorAnterior - 1; // El siguiente color será el color anterior - 1 en mi array.
        if (colorAnterior === 0){ // Si el color anterior ha sido el rojo...
            colorSiguiente = color.length - 1; // ... entonces el color siguiente será el azul.
        }
        console.log("Has salido del balloon y ahora soy de color " + color[colorSiguiente])
    }

    balloonObj.style.background = color[colorSiguiente]; // Aquí es donde se cambia el estilo del fondo del balón, y será del color que toque en ese momento.
    
    colorAnterior = colorSiguiente; // Guardo el color sigiente como color actual (anterior) para que la secuencia se ejecute.
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