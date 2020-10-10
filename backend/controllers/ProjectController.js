'use strict'

/**
 * Creacion del contenido de rutas.
 * Exportar en projectRoutes.
 * Importar el modelo project
*/

// Modelo
const Project = require('../models/project');

// Import lib (file system) para borrar img de ./uploads
const fs = require('fs');

// Modulo/libreria de Nodejs que exporta el path del file system
const path = require('path'); 

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
        
        /**
         * Agarra las propiedades del modelo/schema proyecto 
         * y en esta clase controlador las usa como params.
        */
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
    /**
     * Actualizar documento de la base de datos
     */
    updateProject: function(req, res){
        // Recoger id del projecto a actualizar
        let projectId = req.params.id;
        // Recoger contenido que se va a actualizar
        let update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdate) => {

            if(err) return res.status(500).send({message:"Error al actualizar el proyecto"});

            // (facultativo)
            if(!projectId) return res.status(404).send({message:"Proyecto no encontrado"});

            if(!projectUpdate) return res.status(404).send({message:"Nuevo Proyecto no encontrado para actualizar"});

            return res.status(200).send({
                project: projectUpdate
            });
        });
    },
    /**
     * Delete project
    */
    deleteProject: function(req, res){
        let projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (err, projectDeleted) => {

            if(err) return res.status(500).send({message: "Error al borrar el proyecto"});

            if(!projectDeleted) return res.status(404).send({message: "id del proyecto no encontrado"});

            return res.status(200).send({
                project: projectDeleted
            });
        });
    },
    /**
     * Metodo per caricare immagini
     */
    uploadImage: (req, res) => {
        /**
         * El params.id se refiere a las propiedades del schema proyecto.
         * Seran usadas como parametros de la api en la url
         */
        const projectId = req.params.id;
        const fileName = 'Imagen no subida...';

        /**
         * 1. Para usar req.files es necesario usar un plugin como connect-multiparty.
         * 2. Luego configurar el multiparti.
         * 3. Recoger la imagen y guardarla en el DB
         * 4. fileSplit[1]: recorta y agarra solo el nombre del file en el indice 1.
         * 5. Invocar metodo del ORM findByIdAndUpdate con parametros
         * (prId, {objImg: val}, (callback))
         * 6. Con {new: true} devuelve el ultimo obj guadado en la DB
         * 7. Validar imagen con extension correcta: jpg,png,jpeg,gif.
         */
        if(req.files){

            const filePath = req.files.image.path;
            const fileSplit = filePath.split('\\');
            const fileName = fileSplit[1];
            // Divido la stringa en vector
            const extensionSplit = fileName.split('\.');
            // Y agarro el indice
            const extFile = extensionSplit[1];

            
            if(extFile == 'png' || extFile == 'jpg' || extFile == 'jpeg' || extFile== 'gif'){

                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
                                        
                    if(err) return res.status(500).send({message: 'Error al cargar la imagen'});
                    
                    if(!projectUpdated) return res.status(404).send({message:'El projecto no existe. Imagen no cargada.'});
                    
                    return res.status(200).send({
                        project: projectUpdated
                        //files: fileName 
                        //files: req.files
                    });
                });

            }else{
                // En caso de no ser correcta la extension, borro el archivo con methd de nodejs
                fs.unlink(filePath, (err) => {
                    return res.status(200).send({message: 'La extension no es valida'});
                });
            }

        }
        else{
            return res.status(200).send({
                message: fileName
            });
        }
    },
    getImageFile(req, res){
        // El nombre del schema propiedad, se usa en el parametro de la ruta /get-image. 
        let file = req.params.image;
        // Entrar a la carpeta de imagenes del DB
        let path_file = './uploads/'+file;

        fs.stat(path_file, (error)=>{
            // Si no hay ningun error muestra
            if(!error){
                return res.sendFile(path.resolve(path_file));
            } else {
                return res.status(200).send({message: "Image not found."});
            }
        });

    }
};

module.exports = controller;