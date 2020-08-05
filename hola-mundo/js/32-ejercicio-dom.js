'use strict'

/**
 *
 */

window.addEventListener('load', ()=>{
    console.log("DOM cargado");

    /*Captura el form y el dashed form */
    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    /*Captura el envio del form */
    formulario.addEventListener('submit', ()=>{
        console.log("Evento submit capturado");

        /**Captura elementos del form */
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        /**Valida elementos del form */
        if(nombre.trim() == null || nombre.trim().length == 0){
            alert("Nombre no valido");
            var msg_error_name = document.querySelector("#error_nombre");
            msg_error_name.innerHTML = "El nombre no es valido";
            return false;
        } else {
            document.querySelector("#error_nombre").style.display = "none";
        }
        if(apellidos.trim() == null || apellidos.trim().length == 0){
            alert("Apellido no valido");
            document.querySelector("#error_apellido").innerHTML = "El apellido no es valido";
            return false;
        } else {
            document.querySelector("#error_apellido").style.display = "none";
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("Edad no valido");
            document.querySelector("#error_edad").innerHTML = "El edad no es valido";
            return false;
        } else {
            document.querySelector("#error_edad").style.display = "none";
        }

        /**Activa dashed para mostrar elementos */
        box_dashed.style.display = "block";

        /**Variables JS de tags del dashed */
        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellidos = document.querySelector("#p_apellidos span");
        var p_edad = document.querySelector("#p_edad span");

        /**mete elemento form 
         * dentro de variable js,
         * dentro del html */
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;

        /*
        var datos_usuario = [nombre, apellidos, edad];

        for (var indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            box_dashed.append(parrafo);            
        }
        */

    });
});