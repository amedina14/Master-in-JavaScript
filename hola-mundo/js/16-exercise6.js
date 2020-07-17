'use strict'

/**
 * Programa par o impar.
 * 1. ventana prompt.
 * 2. validacion del numero y peticion de vuelta.
 * 3. par o impar.
 */

while (isNaN(numero)) {
    var numero = parseInt(prompt("Insert number: ", 0));
}

if (numero % 2 == 0) {
    alert("par: " + numero);
    console.log("par: " + numero);
} else if (numero % 2 != 0) {
    alert("impar: " + numero);
    console.log("impar: " + numero);
}
