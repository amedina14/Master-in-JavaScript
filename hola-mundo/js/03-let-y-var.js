'use strict'

// Prueba con var
var numero = 40;
console.log(numero); //valor 40

if(true){
    numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

// Prueba con let
var texto = "Master JS"
console.log(texto); //valor "js"

if(true){
    let texto = "Master Frameworks JS";
    console.log(texto); //valor "frameworks"
}

console.log(texto); //valor "js"