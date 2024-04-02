function changeBackgroundColor() { //Creo una función para que, al hacer click en un elemento de html (un botón), ocurra lo que hay dentro de la función

    const elem = document.getElementById("background"); //Busca en html el elemento con el id="background" (el body)
    
    //Los colores se forman dando valores a "r, g, b". Creo una variable con cada letra e indico que el valor que tiene que tener esa letra tiene que estar entre el 0 y el 255, porque los colores se forman con todos los números enteros que hay en ese rango.
    
    var r = numberRandom(0, 255);
    var g = numberRandom(0, 255);
    var b = numberRandom(0, 255);

    elem.style.background = "rgb(" + r + ", " + g + ", "+ b + ")"; // "rgb(0,0,0)" Cambia en css el elemento background
}

function numberRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} //Para que el color sea aleatorio utilizo una función que ya exite (Math.random) que genera números aleatoriamente entre 0 y 1 (decimales), y para que los convierta en enteros, utilizo la función Math.floor (que también existe).


/*En primer lugar había utilizado solo la función Math.random, pero en una segunda pasada, me di cuenta de que devovía números decimales y, aunque funciona correctamente, es más correcto utilizar Math.floor.

function numberRandom(min, max) {
  return Math.random() * (max - min) + min;  . 
}*/