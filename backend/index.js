'use strict'

/**
 * Cargo el modulo/clase/libreria mongoose
 * Para realizar la conexion al DB con promise.
 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conectado al DB con exito!");
    })
    .catch(err => {
        console.log(err);
    });