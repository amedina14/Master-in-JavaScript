$(document).ready(function () {

    // Slider
    // Comprueba si en el location de la web està index y carga slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 900,
            responsive: true,
            pager: true
        });
    }

    // Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: "Prueba de titulo 1",
                date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas tellus vitae tincidunt pellentesque. Fusce ultrices, velit et feugiat venenatis, metus elit imperdiet turpis, euismod imperdiet ligula massa eu massa. Suspendisse a consequat odio, id hendrerit orci. Nullam euismod faucibus augue. Cras pulvinar nec urna et pulvinar. Pellentesque tempus interdum arcu. Nunc ligula ante, molestie nec metus id, sagittis hendrerit nibh. Nulla massa leo, aliquam eu velit viverra, auctor pulvinar est.',
            },
            {
                title: "Prueba de titulo 2",
                date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas tellus vitae tincidunt pellentesque. Fusce ultrices, velit et feugiat venenatis, metus elit imperdiet turpis, euismod imperdiet ligula massa eu massa. Suspendisse a consequat odio, id hendrerit orci. Nullam euismod faucibus augue. Cras pulvinar nec urna et pulvinar. Pellentesque tempus interdum arcu. Nunc ligula ante, molestie nec metus id, sagittis hendrerit nibh. Nulla massa leo, aliquam eu velit viverra, auctor pulvinar est.',
            },
            {
                title: "Prueba de titulo 3",
                date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas tellus vitae tincidunt pellentesque. Fusce ultrices, velit et feugiat venenatis, metus elit imperdiet turpis, euismod imperdiet ligula massa eu massa. Suspendisse a consequat odio, id hendrerit orci. Nullam euismod faucibus augue. Cras pulvinar nec urna et pulvinar. Pellentesque tempus interdum arcu. Nunc ligula ante, molestie nec metus id, sagittis hendrerit nibh. Nulla massa leo, aliquam eu velit viverra, auctor pulvinar est.',
            },
            {
                title: "Prueba de titulo 4",
                date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas tellus vitae tincidunt pellentesque. Fusce ultrices, velit et feugiat venenatis, metus elit imperdiet turpis, euismod imperdiet ligula massa eu massa. Suspendisse a consequat odio, id hendrerit orci. Nullam euismod faucibus augue. Cras pulvinar nec urna et pulvinar. Pellentesque tempus interdum arcu. Nunc ligula ante, molestie nec metus id, sagittis hendrerit nibh. Nulla massa leo, aliquam eu velit viverra, auctor pulvinar est.',
            },
            {
                title: "Prueba de titulo 5",
                date: 'Publicado el ' + moment().format("dddd") + " " + moment().date() + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam egestas tellus vitae tincidunt pellentesque. Fusce ultrices, velit et feugiat venenatis, metus elit imperdiet turpis, euismod imperdiet ligula massa eu massa. Suspendisse a consequat odio, id hendrerit orci. Nullam euismod faucibus augue. Cras pulvinar nec urna et pulvinar. Pellentesque tempus interdum arcu. Nunc ligula ante, molestie nec metus id, sagittis hendrerit nibh. Nulla massa leo, aliquam eu velit viverra, auctor pulvinar est.',
            },
        ];

        posts.forEach((item, index) => {
            var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer màs</a>
                </article>
        `;

            $('#posts').append(post);
        });
    }

    // Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });

    // Scroll arriba de la web
    $('.subir').click(function (e) {
        // evita que redirija el href a otra pagina
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        // evita que redirija el href a otra pagina
        return false;
    });

    // Login falso

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if (form_name != null && form_name != undefined) {
        var about_parrafo = $('#about p');
        about_parrafo.html("<strong>Bienvenido, " + form_name + ".</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");

        $('#login').hide();

        $('#logout').click(function () {
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon

    if (window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj

    if (window.location.href.indexOf('reloj') > -1) {

        // Funcion que ejecuta en bucle, cada x tiempo indicado, la instrucciòn
        setInterval(function(){
            var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
            $("#reloj").html(reloj);    
        }, 1000);
    }

});