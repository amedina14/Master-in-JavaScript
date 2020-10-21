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

/**
 * Visualizza i messaggi
 */
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
    const div_messages = document.getElementById('messages');
    div_messages.innerHTML = html;
    div_messages.scrollTop = div_messages.scrollHeight;
}

/**
 * fx que envia msj de client a server
 */
function addMessage(e){
    let message = {
        nickName: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';
    document.getElementById('text').value = '';
    socket.emit("add-message",message);

    return false;
}