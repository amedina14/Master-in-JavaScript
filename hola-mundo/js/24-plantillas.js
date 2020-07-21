'use strict'

// Plantillas de texto

var nombre = prompt("Inserta nombre: ");
var apellidos = prompt("Inserta apellidos: ");

//var texto = ""+nombre+""+apellidos;
var texto = `
    <h1>Plantilla</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellidos son: ${apellidos}</h3>
`;

document.write(texto);