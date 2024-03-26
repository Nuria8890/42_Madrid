var tareasGuardadas = $.cookie();

for (const [key, value] of Object.entries(tareasGuardadas)) {
    console.log(`${key}: ${value}`);
    var tareaGuardada = $("<li>");
    tareaGuardada.attr("tarea", key);
    let ol = $("#ft_list");
    ol.after(tareaGuardada, ol.children().end());
    tareaGuardada.text(value);
}


//CREAR UN NUEVO ELEMENTO EN LA LISTA
const newLi = $("#btn");
compruebaNewTarea();

var contadorTareas = Object.keys(tareasGuardadas).pop();

if (contadorTareas == undefined) {
    contadorTareas = 0;
}

$("#btn").on("click", function(){
    console.log("estás haciendo click en New")
    
    let textoNewTarea = prompt("Indica el nombre de tu nueva tarea");
    let ol = $("#ft_list");
    
    if(textoNewTarea){
        contadorTareas++;
        var newTarea = $("<li>");
        newTarea.attr("tarea", contadorTareas);
        ol.after(newTarea, ol.children().end());
        newTarea.text(textoNewTarea);
        console.log("has creado una nueva tarea");
        
        
        $.cookie(contadorTareas, textoNewTarea, { expires: 7000 });
        console.log("Has creado la cookie " + "tarea" + contadorTareas + " que se llama " + textoNewTarea)
    }
    compruebaNewTarea();
    
})

function compruebaNewTarea (){
    //ELIMINAR ELEMENTO DE LA LISTA
    const liArray = $("li");

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
    $("li").on('click', function (event) {
        event.stopImmediatePropagation();
            console.log("estás haciendo click en la tarea " + this.outerText);
            if(confirm("¿Estás segur@ de que deseas eliminar esta tarea?")){
                $(this).remove();
                console.log("has eliminado la tarea " + this.outerText);
                $.removeCookie($(this).attr("tarea"));
                console.log("has eliminado la cookie " + this.outerText)
            }
        })
    }
}