'use strict'

const socket = io.connect('http://192.168.1.3:6677', {'forceNew':true});

/**
 * Recibe el emit de la conexion desde el index.js
 * 
 * Se ejecut el socket y trabaja lo que hay en su interno.
 */
socket.on("messages", (data) => {
    console.log(data);
    render(data);
});

