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
    },
    /**
     * Listar proyecto por ID
     * @param {pide los datos del id de la url} req 
     * @param {devuelve el proyecto si lo encuentra} res 
     */
    getProject: function(req, res){
        let projectId = req.params.id;

        // Si el id es opcional, validar con esta condicion
        if(projectId == null) return res.status(404).send({message: 'Datos del ID proyecto vacio.'});

        // findById: metodo de mongoose.
        Project.findById(projectId, (err, project) => {

            if (err) return res.status(500).send({message: 'Error al retornar los datos.'});

            if(!project) return res.status(404).send({message: 'El proyecto no exixte'});

            return res.status(200).send({project});
        });
    },
    /**
     * Metodo para listar todos los proyectos
     */
    getProjects: function(req, res){

        // Saca todos los documentos de una entidad o coleccion de datos
        /**
         * find({year:2020}) = Es como un where, busca en base a condicion.
         * sort('-name') = Ordenar de Z a A (de reciente a antiguo).
         * sort('name') = Ordenar de A a Z (antiguo a reciente).
         * sort('-year') = Ordenar de año reciente a antiguo (mayor a menor).
         * sort('year') = Ordenar de año antiguo al màs reciente (menor a mayor).
         */
        Project.find({}).sort('-name').exec((err, projects) => {
            
            if(err) return res.status(500).send({message: "Error al devolver los datos"});

            if(!projects) return res.status(404).send({message: "no hay proyectos para mostrar"});

            return res.status(200).send({
                projects
            });

        });
    },
};

module.exports = controller;