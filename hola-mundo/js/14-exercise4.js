'use strict'

/*
Muestra todos los impares entre 2 numeros introducidos 
por teclado.
*/

var i = 0;
var numero1 = parseInt(prompt("Introduzca primer numero: ", 0));
var numero2 = parseInt(prompt("Introduzca primer numero: ", 0));

document.write("<h1>Numeros impares entre "+numero1+" y "+numero2+"</h1>");

if(numero1 > numero2){
    for (i = numero1; i >= numero2; i--) {

        if (i%2 != 0) {
            document.write("Numero impar: "+i+"</br>");
        }
    
    }
    
} else if (numero2 > numero1){
    for (i = numero1; i <= numero2; i++) {

        if (i%2 != 0) {
            document.write("Numero impar: "+i+"</br>");
        }
    
    }
} else if (numero1 == numero2){
    document.write("Los numeros son iguales </br>");
} else {
    document.write("Insert correct numbers! </br>");
    alert("Please insert correct numbers");
}




