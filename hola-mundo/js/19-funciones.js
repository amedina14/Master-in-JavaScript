'use strict'

/**
 * Funciones
 * Insieme d'istruzioni reutilizzabili 
 */

// var numero1 =;

// Defino la function
function calculadora(numero1, numero2, mostrar = false) {
    // Conjunto de instrucciones a ejecutar

    if (mostrar == false) {
        console.log("Hola soy la calculadora!!");
        console.log("Suma:" + (numero1 + numero2));
        console.log("Resta:" + (numero1 - numero2));
        console.log("Mult:" + (numero1 * numero2));
        console.log("Div:" + (numero1 / numero2));
        console.log("****************************");
    } else {
        document.write("Hola soy la calculadora!!<br>");
        document.write("Suma:" + (numero1 + numero2)+ "<br>");
        document.write("Resta:" + (numero1 - numero2)+ "<br>");
        document.write("Mult:" + (numero1 * numero2)+ "<br>");
        document.write("Div:" + (numero1 / numero2)+ "<br>");
        document.write("****************************");
    }
    return "retornooo";
}

// Invocar o llamar la funcion
calculadora(1,8,false);
calculadora(2,8,true);

/**
 * var resultado = calculadora();
 * console.log(resultado);
 */

/*
for (var i = 1; i <= 10; i++) {
   console.log(i);
   calculadora(i, 8);
}
*/

