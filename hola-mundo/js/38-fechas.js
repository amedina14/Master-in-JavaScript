'use strict'

var fecha = new Date();
var year = fecha.getUTCFullYear();
var mes = fecha.getUTCMonth();
var day = fecha.getUTCDate();
var hora = fecha.getHours();

/**Numero casual de 1 a 10,
 * aproximando los decimales */
var casual = parseInt(Math.ceil(Math.random() * 10));

var textoHora = `
El año es: ${year}
El mes es: ${mes}
El dìa es: ${day}
La hora es: ${hora}
Numero casual: ${casual}
`;

console.log(textoHora);
console.log(casual);