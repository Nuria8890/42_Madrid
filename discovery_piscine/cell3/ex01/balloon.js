function crece10() {
    const balloonObj = document.getElementById("balloon")
    var tamano = balloonObj.clientWidth + 10 + "px";
    balloonObj.style.width = tamano;
    balloonObj.style.height = tamano;
    
    
    console.log(balloonObj)
}