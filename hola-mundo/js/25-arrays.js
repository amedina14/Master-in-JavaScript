'use strict'

// Arrays, arreglos, vectores, matrices.

var nombre = "Adrian";
var nombres = ["Riko", "Honey", "Miel", "Qiubyk", "Varey", 52, true];

var languages = new Array("PHP", "JS", "Go", "Java", "C", "C#", "Python");

console.log("nombre 1:", nombres[1]);
console.log("chars nombre 1:", nombres[1].length);
console.log("languages: ", languages.length);
console.log("chars nombre:", nombre.length);

/*
var elemento = parseInt(prompt("elemento: ",""));
if (elemento >= nombres.length){
    alert("no hay.. ("+nombres.length+")");
}else{
    console.log("El usuario seleccionado es:",nombres[elemento]);
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
*/

document.write("<h1>Lenguajes de programacion del 2018: </h1>");
document.write("<ul>");

/* 
// Forma clasica de recorrer un array

for (var i = 0; i < languages.length; i++) {
    document.write("<li> " + languages[i] + "</li>");
}
*/

// Forma elegante de recorrer: forEach()

languages.forEach((elemento, index, data)=>{
    console.log(data);
    document.write("<li> "+ index + " - " + elemento + "</li>");
});

document.write("</ul>");