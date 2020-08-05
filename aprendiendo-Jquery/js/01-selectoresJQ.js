
// $ == JQuery (objeto), selector (document), metodo (ready).

$(document).ready(function () {
    console.log("estamos listos");

    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    console.log(rojo);

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");

    var verde = $("#verde").css("background", "green")
        .css("color", "yellow");

    // Selector de clase
    var mi_clase = $('.zebra').css("padding","5px");

    $(".sin_borde").click(function(){
        console.log("has dado click");
        /* Agrega clase solo a ese elemento 
        con click. Para que funcione debe haber
        un estilo predefinido.
        */
       $(this).addClass("zebra");
    });

    /* con eq tengo metodos de JQ ya adjuntos y
    puedo hacer mas cosas.

    console.log(mi_clase.eq(1));    
    */
});