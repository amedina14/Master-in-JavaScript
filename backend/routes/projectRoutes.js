'use strict'

/**
 * Configuracion de rutas:
 * Contenido de rutas importado de projectController.
 * Definicion de rutas exportadas en app.js.
 */

const express = require('express');

// Contenido de rutas
const projectController = require('../controllers/ProjectController');

// Definicion de rutas
const router = express.Router();

router.get(['/','/home'], projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);
router.get('/project/:id?', projectController.getProject);
router.get('/projects', projectController.getProjects);
// Para actualizar recursos en un API se usa PUT
router.put('/update/:id', projectController.updateProject);
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;