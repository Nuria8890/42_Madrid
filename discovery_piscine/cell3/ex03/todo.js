
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
            this.remove()
            console.log("has eliminado la tarea " + this.outerText)
        }
    }
}


