
function comprueba(a) {
if (Number.isInteger(a) && a >= 0) {
    return true;
}
return false;
}

function calcula() {
    console.log ("estas pinchando en try me!");

    var firstNumberObj = document.getElementById("firstNumber");
    var seconNumberObj = document.getElementById("seconNumber");
    var firstNumber = Number.parseInt(firstNumberObj.value); // .value no está bien, tengo que localizar que acción devuelve el número que he puesto en el input
    var seconNumber = Number.parseInt(seconNumberObj.value); // .value no está bien, tengo que localizar que acción devuelve el número que he puesto en el input

    if (comprueba(firstNumber) && comprueba(seconNumber)) {

        var operador = document.getElementById("operador").value;

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
        alert("Error :(");
    }
}



function sumar(a, b) {
    var sumar = a + b;
    console.log ("Estoy sumando y el resultado es " + sumar);
    alert(sumar);
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

    if (b === 0) {
        alert("It's over 9000!");
    } else {
        alert(dividir);
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