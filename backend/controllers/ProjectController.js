'use strict'

/**
 * Creacion del contenido de rutas.
 * Exportar en projectRoutes.
 * Importar el modelo project
*/

const Project = require('../models/project');

const controller = {

    home: function(req, res){
        return res.status(200).send({
            message: "Soy la home."
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Soy test del project controller"
        });
    },
    saveProject: function(req,res){
        const project = new Project();
        
        const params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        /**
         * Guardar datos en el DB
         */
        project.save((err, projectStored) => {
            if(err) return res.status(500).send({message: "error al guardar objeto"});

            if(!projectStored) return res.status(404).send({message: "No se ha podido guardar el proyecto"});

            return res.status(200).send({project: projectStored});
        });
        
        /*
        return res.status(200).send({
            project: project,
            message: "Metodo saveProject"
        });
        */
    }
}

module.exports = controller;