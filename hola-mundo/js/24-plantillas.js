'use strict'

// Plantillas de texto

var id = prompt("ID sitio: ");
var nombre = prompt("nombre sitio: ");
var causa = prompt("Causa: ");
var solucion = prompt("Solucion: ");

//var texto = ""+nombre+""+apellidos;
var texto = `
    <h1>Plantilla</h1>
    <h3>ID sitio: ${id}</h3>
    <h3>Nombre sitio: ${nombre}</h3>
    <h3>Causa: ${causa}</h3>
    <h3>Solucion: ${solucion}</h3>
`;

document.write(texto);