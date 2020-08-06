
// $ == JQuery (objeto), selector (document), metodo (ready).

$(document).ready(function () {

    console.log("estamos listos");

    // Selector por id
    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    console.log(rojo);

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");

    var verde = $("#verde").css("background", "green")
        .css("color", "yellow");

    // Selector de clase
    var mi_clase = $('.zebra').css("padding", "5px");

    $(".sin_borde").click(function () {
        let that = $(this);

        console.log("has dado click");
        /* Agrega clase solo a ese elemento 
        con click. Para que funcione debe haber
        un estilo predefinido.
        */
        if (!that.hasClass('zebra')) {
            that.addClass('zebra');
        } else {
            that.removeClass('zebra');
        }
    });

    /* con eq tengo metodos de JQ ya adjuntos y
    puedo hacer mas cosas.

    console.log(mi_clase.eq(1));    
    */

    /**
     * La contradiccion es que por sin borde
     * se le agrea zebra, 
     * y por p se la quita si la tiene.
     * 
     * Solucion: si le quiero quitar la zebra
     * tengo que seleccionar elementos por clase
     * zebra
     */

    mi_clase.click(function () {
        let that = $(this);
        if (!that.hasClass('zebra')) {
            that.addClass('zebra');
        } else {
            that.removeClass('zebra');
        }
    });

    // Selector de etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function () {
        var that = $(this);
        if (!that.hasClass('grande')) {
            that.addClass('grande');
        } else {
            that.removeClass('grande');
        }
    });

    // Selectores por atributo
    $('[href="https://www.google.com"]').css('background','#ccc');
    $('[title="Facebook"]').css('background','skyblue');

    // selecciona mas etiquetas
    $('p, a').addClass('margen-superior');

    // Find: busca elementos al interno
    var busqueda_resaltado = $('#caja').find('.resaltado');
    console.log(busqueda_resaltado);
    // var busqueda_resaltado = $('#caja .resaltado');

    // Parent: busca elementos al externo
    var busqueda_parent = $('.resaltado').parent().parent().find('.zebra');
    console.log(busqueda_parent);
});