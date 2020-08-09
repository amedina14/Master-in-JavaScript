$(document).ready(function(){

    var caja = $('#caja');
    var mostrar = $('#mostrar');
    var ocultar = $('#ocultar');
    var toggle = $('#toggle');

    mostrar.hide();
    
    mostrar.click(function(){
        $(this).hide();
        ocultar.show();
        caja.fadeTo('slow',0.8,function(){
            console.log("Cartel mostrado");
        });
    });

    /**
     * fadeIn('slow')
     * fadeOut('fast')
     * show('fast')
     * hide('low')
     * slideUp('') //ocultar
     * slideDown('') //mostrar
     */

    ocultar.click(function(){
        $(this).hide();
        mostrar.show();
        caja.fadeTo('slow',0.2,function(){
            console.log("Cartel ocultado");
        });
    });

    // Togle
    toggle.click(function(){
        caja.slideToggle('fast', function(){
            var estilosCaja = caja.css('display');

            console.log(estilosCaja);
            
            if($(this).css('display') == 'block'){
                console.log("Cartel mostrado");
            } else {
                console.log("Cartel ocultado");
            }

            /*
            if(caja.attr('style') == 'block'){
                console.log(caja.attr('style'));
                console.log("Cartel ocultado");
                //caja.attr('style','display');
            } else {
                console.log(caja.attr('style','display'));
                console.log("Cartel ocultado");
            }



            if(caja.toggle === 'block'){
                caja.slideToggle('fast', function(){
                    console.log("Cartel ocultado");
                });
            } else {
                caja.slideToggle('fast', function(){
                    console.log("Cartel mostrado");
                });
            }
            */

        });
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