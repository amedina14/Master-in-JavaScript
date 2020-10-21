'use strict'

const socket = io.connect('http://192.168.1.3:6677', {'forceNew':true});

/**
 * Recibe el emit de la conexion desde el index.js
 * 
 * Se ejecuta el socket y trabaja lo que hay en su interno.
 * El socket envia el evento "messages"
 * Cuando lleguen los mensages, se ejecuta el socket.on
 * y renderiza los datos.
 */
socket.on("messages", (data) => {
    console.log(data);
    render(data);
});

function render(data){
    let html = data.map((message, index) => {
        return (`
            <div class="message">
            <b>${message.nickName}</b> says:
            <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    // Stampa il messaggio dentro il html
    document.getElementById('messages').innerHTML = html;
}