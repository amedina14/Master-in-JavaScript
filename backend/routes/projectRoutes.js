'use strict'

/**
 * Configuracion de rutas:
 * Contenido de rutas importado de projectController.
 * Definicion de rutas exportadas en app.js.
 */

const express = require('express');
const projectController = require('../controllers/ProjectController');

const router = express.Router();

router.get(['/','/home'], projectController.home);
router.post('/test', projectController.test);

module.exports = router;