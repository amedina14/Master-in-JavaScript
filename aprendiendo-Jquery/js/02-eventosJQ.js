$(document).ready(function(){
    console.log("cargado");

    // MouseOver y MouseOut 
    var caja = $('#caja');
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
});