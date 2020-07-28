'use strict'

/**
 * Local storage
 */
var espacio = document.write("<br>");
var peliculas = document.querySelector("#peliculas");

// Comprobar disponibilidad del localstorage
if (typeof (Storage) !== 'undefined') {
    console.log("LocalStorage disponible");
} else {
    console.log("Incompatible con LocalStorage");
}

// Guardar datos
localStorage.setItem("titulo","Curso JS");

// Recuperar datos planos, elemento.
console.log(localStorage.getItem("titulo"));
var objetoLScurso = localStorage.getItem("titulo");
peliculas.append(objetoLScurso+" / ");
//peliculas.append(espacio);

// Guardar objetos
var usuario = {
    nombre: "Adrian Medina",
    email: "medinalarry96@gmail.com",
    web: "arandom.000webhostapp.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);

/*
var arrayU = [userJS];
arrayU.forEach(userJS => {
    peliculas.append(arrayU[userJS]);
    document.write("<br>");
});
*/

var datos = document.querySelector("#datos");

document.write("<br>");
datos.append(userJS.nombre+" - "+userJS.web);
localStorage.removeItem("usuario");
localStorage.clear();