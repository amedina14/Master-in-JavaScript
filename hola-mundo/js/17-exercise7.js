'use strict'

/**
 * table de multiplicar de un numero introducido por
 * teclado y luego todas las tablas.
 */

var numero = parseInt(prompt("Insert number: ", 0));
var i = 0;

document.write("<h1>Tabla del " + numero + "</h1>");
for (i = 1; i <= 12; i++) {
    document.write("<p>" + i + " x " + numero + " = " + (i * numero) + "</p>");
}

for(var c = 1; c <= 10; c++){
    document.write("<h1>Tabla del " + c + "</h1>");
    for(i = 1; i <= 10; i++){
        document.write("<p>" + i + " x " + c + " = " + (i * c) + "</p>");
    }
}