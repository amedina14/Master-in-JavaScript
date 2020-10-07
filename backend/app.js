'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Cargar archivos de rutas.

const projectRoutes = require('./routes/projectRoutes');

// Middleware
/**
 * 1. Config necesaria para bodyParser.
 * 2. Convierte lo que llegue a json
 * 3. Con app.use() se crean los middleware
 * 4. Config midd per i cors su nodejs (Frontend-backend)
 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
/**
 * Permite acceso de un dominio/origen a otro. Compatibilidades con frontend.
 */
app.use((req,res,next) => {
    const allowedOrigins = ['http://localhost:3700','http://127.0.0.1:3700'];
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin)){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin:','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

// Rutas
app.use('/api', projectRoutes);
/*
app.get('/', (req, res) => {
    res.status(200).send(
        "<h1>Home page</h1>"
    );
});

app.post('/test/:id', (req, res) => {
    console.log(req.body.name);
    console.log(req.query.web);
    console.log(req.params.id);

    res.status(200).send({
        message:"Ciao mondo dalla mia api NodeJs"
    });
});
*/


// Exportar app.js
module.exports = app;