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

});