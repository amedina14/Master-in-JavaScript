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
    // Es menor de edad
    console.log("Es menor de edad.")
}

var year = 2020;

if(year != 2016){
    console.log("Year is not 2016. Actually: "+year);
}

if(year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era postmoderna");
}

if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("Year ends in 8");
}else{
    console.log("Year doesn't registered")
}