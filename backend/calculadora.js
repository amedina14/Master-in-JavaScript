'use strict'

/**
 * Recive parametros por la consola,
 * a partir del elemento "2" de la entera ruta
 * del parametro en el sistema. Con respecto
 * a los parametros del script, corresponden
 * al parametro de posicion 0 del script. 
 */
var params = process.argv.slice(2);

/*
for(var i=1; i<=params[i]; i++){
    console.log(parseFloat(params[i]));
}
*/

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);

/*
console.log(params);
console.log(numero1,numero2);
console.log(numero1);
console.log(numero2);
*/

var plantilla = `
    Suma: ${numero1 + numero2},
    Resta: ${numero1 - numero2},
    Multiplicacion: ${numero1 * numero2},
    Division: ${numero1 / numero2},
`;
console.log(plantilla);
console.log("Hola mundo con Nodejs");