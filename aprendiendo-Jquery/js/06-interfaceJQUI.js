$(document).ready(function(){

    //Mover elemento por la pagina
    $(".elemento").draggable();

    //Redimensionar elementos
    $(".elemento").resizable();

    //Seleccionar Elemnetos
    //$(".lista-seleccionable").selectable();

    //Ordenar Elemnetos
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("ha cambiado la lista");
        }
    });
});