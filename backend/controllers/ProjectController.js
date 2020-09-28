'use strict'

/**
 * Creacion del contenido de rutas.
 * Exportar en projectRoutes.
 */
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
    }
}

module.exports = controller;