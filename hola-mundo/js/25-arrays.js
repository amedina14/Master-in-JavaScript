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
document.write("<ul style='margin:10px'>");

/* 
// Forma clasica de recorrer un array

for (var i = 0; i < languages.length; i++) {
    document.write("<li> " + languages[i] + "</li>");
}
*/

// Forma elegante de recorrer: forEach()

languages.forEach((elemento, index, data)=>{
    console.log(data);
    document.write("<li> "+ index 
    + " - " + elemento + "</li>");
});

document.write("<br>");    

// FOR IN

for(let language in languages){
    document.write("<li style='padding:5px'> "
    + languages[language] + "</li>");    
}

document.write("</ul>");

// Busquedas en un Array
var precios = [10, 20, 50, 80, 12];

var precios_caros = precios.some(precio => precio > 80);
console.log("Hay precios mayor a 80?",precios_caros);

var index_php = languages.findIndex(language => language.toLowerCase() == "php");
var exist_php = languages.find(language => language.toLowerCase() == "php");
console.log("Give me php Index:",index_php);
console.log("Give me php element:",exist_php);