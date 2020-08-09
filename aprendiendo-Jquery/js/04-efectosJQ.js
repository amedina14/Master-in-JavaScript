$(document).ready(function(){

    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var toggle = $('#toggle');

    mostrar.hide();
    
    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        caja.fadeTo('slow',0.8);
    });

    /**
     * fadeIn('slow')
     * fadeOut('fast')
     * show('fast')
     * hide('low')
     * slideUp() //ocultar
     * slideDown() //mostrar
     */

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        caja.fadeTo('slow',0.2);
    });

    // Togle
    toggle.click(function(){
        caja.slideToggle('fast');
        /**
         * toggle
         * fadeToggle
         * slideToggle
         */
        /*
        if(caja.hide()){
            caja.show();
        } else {
            caja.hide();
        }
        */
    });

    // Animaciones

    $('#animar').click(function(){
        caja.animate({
            marginLeft: '500',
            fontSize: '40'
        }, 'slow')
        .animate({
            borderRadius: '900',
            marginTop: '80',
        },'slow')
        .animate({
            borderRadius: '0',
            marginLeft: '0',
        },'slow')
        .animate({
            borderRadius: '100',
            marginTop: '0',
        },'slow')
        .animate({
            marginLeft: '500',
            fontSize: '40'
        }, 'slow')
        ;
    });
});