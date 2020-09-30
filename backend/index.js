'use strict'

/**
 * Cargo el modulo/clase/libreria mongoose
 * Para realizar la conexion al DB con promise.
 * Importar el servidor "app.js"
 */
const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio', {useNewUrlParser:true, useUnifiedTopology:true})
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