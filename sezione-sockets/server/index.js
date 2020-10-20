'use strict'

// Importar modulo de node.
const express = require('express');

// Declaro la aplicacion de express
const app = express();

/**
 * Creo un servidor que recive la aplicacion.
 * Importo los metodos http en el servidor 
 * declarado.
 */
const server = require('http').Server(app);

/**
 * El socket recibe el server.
 */
const io = require('socket.io')(server);

/**
 * Definiendo la route.
 */
app.get('/get', (req, res) => {
    res.status(200).send("Hello world from home route");

})


/**
 * Creacion de server con express.
 */
server.listen(6677, () => {
    console.log("Server On! http://localhost:6677");
});