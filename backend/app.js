'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos de rutas.


// Middleware
/**
 * 1. Config necesaria para bodyParser.
 * 2. Convierte lo que llegue a json
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS


// Rutas
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Home page</h1>"
    );
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message:"Ciao mondo dalla mia api NodeJs"
    });
});

// Exportar app.js
module.exports = app;