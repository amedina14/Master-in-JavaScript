'use strict'

//Fetch (ajax) y peticiones a servicios / aps rest

var div_usuarios = document.querySelector("#usuarios");
var usuarios = [];
window.addEventListener('load', function () {
    //alert("hola");
    //https://jsonplaceholder.typicode.com/users
    fetch('https://reqres.in/api/users')
        .then(datos => datos.json())
        .then(users => {
            usuarios = users.data;
            console.log(usuarios);

            usuarios.map((user, i) => {
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
                div_usuarios.appendChild(nombre);

                document.querySelector(".loading").style.display = "none";
            });
        });
});