'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto molde para crear nuevos documentos de tipo "proyecto"
const ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

/**
 * 1. Para poder exportar
 * 2. Agarra este schema y lo usa como modelo
 * 3. param1 nombre entidad
 *    param2 nombre schema
 * 4. mongoose parsea minuscola y en plural 
 * la entidad. Save docments in collections
 * (registros en tablas).
 */
module.exports = mongoose.model('Project', ProjectSchema);