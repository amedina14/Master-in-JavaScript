'use strict'

/**
 * BOM - Browser object model
 */

function getBom(){
    console.log(window.innerHeight);
    console.log(window.innerWidth);   
    console.log(window.location);   
    console.log(screen.innerHeight);
    console.log(screen.innerWidth);   
}

/*
function redirect(url){
    window.location.href = url;
}
*/
var abrirVentana = abrirVentana();
function abrirVentana(url){
    window.open(url,"","width=400,height=400");
}

getBom();