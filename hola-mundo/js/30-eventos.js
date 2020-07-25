'use strict'

/**
 * Eventos del raton
 */

function cambiarColor() {
    console.log("Me has dado clic");
    var bg = boton.style.background;
    if (bg == "lime") {
        boton.style.background = "skyblue";
    } else {
        boton.style.border = "none";
        //  boton.style.textshadow = "1px 1px 15px grey";
        boton.style.background = "lime";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
}

/**
 * Conecta el script al html, 
 * es un escuchador de eventos separado del html.
 */

var boton = document.querySelector("#boton");

// click e dblclick

boton.addEventListener('click', () => {
    cambiarColor();
});

// Mouse over

boton.addEventListener('mouseover', () => {
    boton.style.background = "pink";
});

// Mouse out

boton.addEventListener('mouseout', function(){
    boton.style.background = "royalblue";
});