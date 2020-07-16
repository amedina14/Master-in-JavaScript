'use strict'

/*
Programa que muestre todos los numeros que hay entre 
dos numeros introducidos por teclado.
*/

var i = 0;
var numero1 = parseInt(prompt("introduce primer numero: ", 0));
var numero2 = parseInt(prompt("introduce segundo numero: ", 0));

document.write("<h1>Los numeros entre " + numero1 + " y " + numero2 + " son:</h1>");

if (numero1 > numero2) {
    numero1 -= 1;
    for (i = numero1; i > numero2; i--) {
        document.write(i + "<br/>");
    }
} else if (numero2 > numero1) {
    numero1 += 1;
    for (i = numero1; i < numero2; i++) {
        document.write(i + "<br/>");
    }
} else if (numero1 == numero2) {
    alert("The numbers are equals");
} else {
    alert("insert correct numbers");
}


/*

var i = 0;
var numero1 = parseInt(prompt("introduce primer numero: ",0));
var numero2 = parseInt(prompt("introduce segundo numero: ",0));

if(numero1 < numero2){
    for(i = numero1; i < numero2; i++){
        console.log("The number beetween two numbers are: "+i);
    }
} else if (numero1 > numero2){
    for(i = numero1; i > numero2; i--){
        console.log("Numbers beetween two numbers are: "+i);
    }
} else if (numero1 == numero2){
    alert("The numbers are equals");
} else {
    alert("insert correct numbers");
}




while(var ii>=){

}
for(var ii=10; ii>=0;ii--){
    console.log(ii);
}
*/
