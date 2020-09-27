'use strict'

/**
 * Cargo el modulo/clase/libreria mongoose
 * Para realizar la conexion al DB con promise.
 */
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conectado al DB con exito!");

        // Creacion del servidor mientras conecte al DB, metodo express.
        app.listen(port,
            ()=>{
                console.log("Conectado en puerto localhost:3700");
        });
    })
    .catch(err => {
        console.log(err);
    });