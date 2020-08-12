$(document).ready(function () {

    //Load
    //$('#datos').load('https://reqres.in/');

    // Get Post

    $('#formulario').submit(function (e) {
        // evita redirigir a una pagina nueva
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };

        console.log(usuario);
        $.post($(this).attr('action'), usuario, function (response) {
            console.log(response);
        }).done(function () {
            alert("Usuario añadido correctamente");
        });

        $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
            console.log(response);
            response.data.forEach((element, index) => {
                $('#datos').append('<p>' + element.first_name + " " + element.last_name + '</p>');
            });
        });

        // Asegura de no redirigir a una pagina nueva
        return false;
    });

    /*

    var id = prompt("ID sitio: ");
        var nombre = prompt("nombre sitio: ");
        var causa = prompt("Causa: ");
        var solucion = prompt("Solucion: ");

        var form = `
        <h1>Plantilla</h1>
        <h3>ID sitio: ${id}</h3>
        <h3>Nombre sitio: ${nombre}</h3>
        <h3>Causa: ${causa}</h3>
        <h3>Solucion: ${solucion}</h3>
        `;

        // Llena el link con el contenido
        var linkwapp = `whatsapp://send?text= 
        *Atención realizada*%0A
        *ID sitio:* ${id} %0A
        *Nombre sitio:* ${nombre} %0A
        *Causa:* ${causa} %0A
        *Solución:* ${solucion} %0A
        `;

        // agrega direccion wsapp
        var area = $('a');
        area.attr('href', linkwapp);

        // Muestra en html
        $('#idSitio').text(id);
        $('#nombreSitio').text(nombre);
        $('#causaFalla').text(causa);
        $('#solucionFalla').text(solucion);
    */

});