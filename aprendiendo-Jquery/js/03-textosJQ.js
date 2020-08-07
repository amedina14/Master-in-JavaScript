$(document).ready(function(){
    var campoLink = $('#add_link');
    var addButton = $('#add_button');
    var menu_ul = $('#lista_links');
    
    reloadLinks();

    addButton
    // quita disabled al boton
    .removeAttr('disabled') // Attr: Manipula atributos
    /**
     * cuand se clica boton: 
     * selecciona valor del campo,
     * agrega a lista de links,
     * vacia el campo link,
     * carga la nueva lista actualizada.
     */
    .click(function(){
        var link = campoLink.val();
        /**
         * html: sobrepone elmento dentro un tag html (ej. dentro de menu).
         * append: coloca elemento en cola del tag.
         * prepend: coloca al inicio del tag.
         * before: coloca antes del tag.
         * after: coloca despues del tag.
         */
        menu_ul.append("<li><a href='https://"+link+".com'></a></li>");
        campoLink.val('');
        reloadLinks();

        // cuenta el nuevo numero de links
        console.log('numero de links ',$('a').length);
    });


    
});

function reloadLinks(){
    $('a').each(function(index){
        let questo = $(this);
        var enlace = questo.attr('href'); //select atributo href
        questo.attr('target','_blank')
        questo.text(enlace);
        //console.log(enlace);
    });
}