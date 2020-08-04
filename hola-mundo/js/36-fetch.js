'use strict'

//Fetch (ajax) y peticiones a servicios / aps rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");


window.addEventListener('load', function () {
    //https://jsonplaceholder.typicode.com/users
    getUsuarios()
        .then(datos => datos.json())
        .then(users => {
            console.log(usuarios);
            listadoUsuarios(users.data);

            return getJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);
        });

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + ". " + user.first_name + " " + user.last_name;
            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = "none";
        });
    }

    function mostrarJanet(user) {
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';
        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = "none";
    }

});