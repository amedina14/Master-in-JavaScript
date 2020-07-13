'use strict'

// Conditional if
// Si A es igual a B has algo.

var edad1 = 30;
var edad2 = 12;

//si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log("edad1 es mayor que edad2")
} else {
    //sino
    console.log("edad1 es inferior que edad2")
}

var edad = 34;
var nombre = "Arandom xiv";

if (edad >= 18) {
    //es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

    if (edad <= 33) {
        console.log('Todavia eres millenial');
    } else if (edad >= 70) {
        console.log('Eres anciano');
    } else {
        console.log("Ya no eres millenial");
    }

} else {
    console.log("Es menor de edad.")
}