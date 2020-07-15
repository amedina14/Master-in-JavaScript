'use strict'

/* 
Utilizando un bucle mostrar la suma y la media de los
numeros introducidos, hasta introducir un numero 
negativo y entonces mostrarà el resultado.
*/

var suma = 0;
var i = 0;

do{
    var numero = parseInt(prompt("Insert number ",0));

    if(isNaN(numero)){
        numero = 0;
    } else if(numero >= 0){
        suma += numero;
        i += 1;
    }

    console.log("numero introducido: "+numero);
    console.log("suma: "+suma);
    console.log("media: "+suma/i);

}while(numero >= 0)

alert("la suma es: "+ suma);
alert("la media es: "+ suma / i);
