
function comprueba(a) {
if (Number.isInteger(a) && a >= 0) { // Number.isInteger es un método que determina si el valor que le paso es entero.
    return true;
}
return false;
}

function calcula() { // En html creo un evento "onclick" con esta función.
    console.log ("has pinchado en try me!");

    var firstNumberObj = document.getElementById("firstNumber"); // Busco en html el elemento con el id indicado entre paréntesis.
    var seconNumberObj = document.getElementById("seconNumber");
    
    var firstNumber = Number(firstNumberObj.value);// Coge el valor que hay dentro del input. Number() es un constructor que convierte a un string u otro valor en uno de tipo numérico; si el argumento no puede ser convertido a un número, devuelve NaN
    var seconNumber = Number(seconNumberObj.value);

    /* Sería lo mismo que si hago esto:
    var firstNumber = Number(document.getElementById("firstNumber").value);
    var seconNumber = Number(document.getElementById("seconNumber").value);*/

    if (comprueba(firstNumber) && comprueba(seconNumber)) { // Si los dos valores numéricos son enteros y mayores que 0, entra aquí.

        var operador = document.getElementById("operador").value; // Busca en html el elemento con el id operador.

        if (operador == "+") {
            sumar(firstNumber, seconNumber);
        }

        if (operador == "-") {
            restar(firstNumber, seconNumber);
        }

        if (operador == "*") {
            multiplicar(firstNumber, seconNumber);
        }

        if (operador == "/") {
            dividir(firstNumber, seconNumber);
        }

        if (operador == "%") {
            porcentaje(firstNumber, seconNumber);
        }
    } else {
        alert("Error :(");  // Si los dos valores numéricos NO son enteros y mayores que 0, salta el mensaje de alerta.
    }
}



function sumar(a, b) { // Entra en esta función cuando el operador selecionado es +.
    var sumar = a + b;
    console.log ("Estoy sumando y el resultado es " + sumar);
    alert(sumar); // El resultado se ve en un mensaje de alerta.
}


function restar(a, b) {
    var restar = a - b;
    console.log ("Estoy restando y el resultado es " + restar);
    alert(restar);
}

function multiplicar(a, b) {
    var multiplicar = a * b;
    console.log ("Estoy multiplicando y el resultado es " + multiplicar);
    alert(multiplicar);
}

function dividir(a, b) {
    var dividir = a / b;
    console.log ("Estoy dividiendo y el resultado es " + dividir);

    if (b === 0) { // Si al entrar en esta función, el segundo número es 0, salta un mensaje de alerta con este texto.
        alert("It's over 9000!");
    } else {
        alert(dividir); // Si el segundo número es cualquier otro excepto 0, en el mensaje de alerta se verá el resultado de la operación.
    }
}

function porcentaje(a, b) {
    var porcentaje = a % b;
    console.log ("Estoy calculando el resto y el resultado es " + porcentaje)

    if (b === 0) {
        alert("It's over 9000!");
    } else {
        alert(porcentaje);
    }
}

setInterval(ventanaEmergente,30000); // Cada 30' se abre un mensaje de alerta con el mensaje indicado.
function ventanaEmergente() {
    alert("Please, use me...");
}