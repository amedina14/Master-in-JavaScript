$(document).ready(function(){

    // Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 900,
        responsive: true,
        pager: true
    });

    // Posts
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

    // Selector de tema
    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });

    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });

    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });

});