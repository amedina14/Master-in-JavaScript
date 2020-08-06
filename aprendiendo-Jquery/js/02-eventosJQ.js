$(document).ready(function () {
    console.log("cargado");

    // MouseOver y MouseOut 
    var caja = $('#caja');
    /*
    var questo = $(this);
    caja.mouseover(function(){
        let questo = $(this);
        questo.css('background','red');
    });
    function afuera(){
        let questo = $(this);
        questo.css('background','yellow')
    };
    caja.mouseout(afuera);
    */


    // Hover
    function dentro() {
        let questo = $(this);
        questo.css('background', 'cyan');
    };

    function fuera() {
        let questo = $(this);
        questo.css('background', 'violet')
            .css("color", "black");
    };

    caja.hover(dentro, fuera);

    // click y doble click, dblclick
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });
    caja.dblclick(function () {
        $(this).css('background', 'yellow')
            .css('color', 'black');
    });

    // Focus y blur
    var nombre = $('#nombre');
    nombre.focus(function(){
        $(this).css('border','2px solid green');
    });
    nombre.blur(function(){
        $(this).css('border','1px solid #ccc');
        //$('#datos').css('display','block');
        var valor = $(this).val(); // agarra el valor del form
        $('#datos').text(valor).show(); // text: incrusta valor dentro de otra etiqueta.
        // show, contrario de hide, muestra elemento oculto.
    });

});