'use strict'

/**
 * Carga el script cuando se cargan los elementos
 * con evento LOAD
 */

window.addEventListener('load', () => {

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
     * Conecta el script al html, addEventListener,
     * es un escuchador de eventos separado del html.
     */

    var boton = document.querySelector("#boton");

    // click e dblclick & Operador THIS

    boton.addEventListener('click', function(){
        cambiarColor();
        console.log(this);
        this.style.border = "10px solid black";
    });

    // Mouse over

    boton.addEventListener('mouseover', () => {
        boton.style.background = "pink";
    });

    // Mouse out

    boton.addEventListener('mouseout', function () {
        boton.style.background = "royalblue";
    });

    // Focus

    var campo_nombre = document.querySelector("#campo_nombre");
    campo_nombre.addEventListener('focus', () => {
        console.log("Focus dentro del campo nombre");
    });

    // Blur

    campo_nombre.addEventListener('blur', () => {
        console.log("Blur del campo nombre");
    });

    // KeyDown

    campo_nombre.addEventListener('keydown', (evento) => {
        console.log("Pulsando este tecla:", String.fromCharCode(evento.keyCode));
    });

    // KeyPress

    campo_nombre.addEventListener('keypress', (evento) => {
        console.log("Tecla Pulsada:", String.fromCharCode(evento.keyCode));
    });

    // KeyUp

    campo_nombre.addEventListener('keyup', (evento) => {
        console.log("Tecla soltada:", String.fromCharCode(evento.keyCode));
    });

}); //end Load


