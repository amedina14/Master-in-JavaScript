'use strict'
/**
 * Muestre todos los numeros divisores de un numero
 * introducido por teclado.
 */

var i = 0;
var numero = parseInt(prompt("Insert number: ", 1));

for (i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        document.write(i + " es divisible para " + numero+"<br/>");
        console.log(i + " es divisible para " + numero);
    }
}
