'use strict'

/**
 * Configuracion de rutas:
 * Contenido de rutas importado de projectController.
 * Definicion de rutas exportadas en app.js.
*/

// Importo Express
const express = require('express');

// Importo Contenido de rutas
const projectController = require('../controllers/ProjectController');

// Definicion de rutas
const router = express.Router();

// Importo plugin c-mpty
const multipart = require('connect-multiparty');

/**
 * Defino Middleware que llama a connect-multiparty y guarda 
 * imagenes en directory. Este middleware va usado antes de llamar
 * al metodo. Se coloca como segundo parametro en la definicion de
 * la url para que se ejecute antes del metodo que hace la accion.
*/
const multipartMiddleware = multipart({
    uploadDir: './uploads'
});

router.get(['/','/home'], projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);
router.get('/project/:id?', projectController.getProject);
router.get('/projects', projectController.getProjects);
// Para actualizar recursos en un API se usa PUT
router.put('/update/:id', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteProject);
router.post('/uploadImage/:id', multipartMiddleware, projectController.uploadImage);

module.exports = router;