'use strict'

/**
 * Funciones anonimas: No tiene nombe y lo puedo 
 * guardar dentro de una variable. 
 * Se usa para pasar como parametro a otra funcion
 * y se le llama tambien callback
 */

/*
var pelicula = function(nombre){
    return "La pelicula es: "+nombre;
}
*/

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, dato => {
    console.log("La suma es: ", dato);
},
    dato => {
        console.log("La suma por dos es: ", (dato * 2));
    });