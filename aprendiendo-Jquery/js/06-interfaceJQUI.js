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

    //Drop
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro de el area");
        }
    });

    //Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("scale",4000);
    });

    //Tooltip: estan aplicados generalmente, no a un sngular elemento, sino a toda la pagina con el document.
    $(document).tooltip();

    // Dialog
    $("#lanzar-popup").click(function(){
        $("#popup").dialog();
    });

    // Calendario / Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestanas").tabs();
});