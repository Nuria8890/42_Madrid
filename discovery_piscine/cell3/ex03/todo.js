
var lasCookies = document.cookie;

//CREAR UN NUEVO ELEMENTO EN LA LISTA
const newLi = document.getElementById("btn");
compruebaNewTarea();

var contadorTareas = 0;

btn.onclick = function(){
    console.log("estás haciendo click en New")
    
    let textoNewTarea = prompt("Indica el nombre de tu nueva tarea");
    let ol = document.getElementById("ft_list");
    
    if(textoNewTarea){
        contadorTareas++;
        var newTarea = document.createElement("li");
        var identificadorTarea = document.createAttribute("tarea");
        identificadorTarea.value = contadorTareas;
        newTarea.setAttributeNode(identificadorTarea)
        ol.insertBefore(newTarea, ol.firstElementChild);
        newTarea.appendChild(document.createTextNode(textoNewTarea))
        console.log("has creado una nueva tarea");
        document.cookie = "tarea"+contadorTareas+"="+textoNewTarea+"; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT;"

        console.log(getCookie("tarea"))
    }
    compruebaNewTarea();
    
}

function compruebaNewTarea (){
    //ELIMINAR ELEMENTO DE LA LISTA
    const liArray = document.querySelectorAll("li");

    for (var i = 0; i < liArray.length; i++) {
        const li = liArray[i];
    /*Otras formas de hacer el bucle for

    for (var li of liArray) {
        console.log(li)
    }

    liArray.forEach(function(li) {
        console.log(li)
    });
    */
        li.onclick = function() {
            console.log("estás haciendo click en la tarea " + this.outerText);
            if(confirm("¿Estás segur@ de que deseas eliminar esta tarea?")){
                this.remove();
                console.log("has eliminado la tarea " + this.outerText);
            }
        }
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}