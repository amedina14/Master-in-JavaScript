'use strict'

// Importar modulo de node.
const express = require('express');

// Declaro la aplicacion de express
const app = express();

/**
 * Creo un servidor que recive la aplicacion.
 * Importo los metodos http en el servidor 
 * declarado.
 */
const server = require('http').Server(app);

/**
 * El socket recibe el server.
 */
const io = require('socket.io')(server);

/**
 * Middleware express para 
 * carga una vista estatica por defecto.
 * 
 * Cargar la vista de la chat.
 * 
 * Para usar un MIDDLEWARE se usa USE()
 */
app.use(express.static('client'));

/**
 * Definiendo la route.
 */
app.get('/get', (req, res) => {
    res.status(200).send("Hello world from home route");

})

const messages = [
    {
        id: 1,
        text: "Welcome to the chatroom",
        nickName: "Adrian Bot"
    }
]

/**
 * Conexion al socket
 * Lanzar evento connection para los clientes.
 * La conexion es llamada y recibe las conexiones de los clientes.
 * Detecta cada vez que un cliente se conecta.
 * 
 * Parametro socket lleva toda la informacion del mismo.
 */
io.on('connection', (socket) => {
    console.log("El cliente con IP: "+ socket.handshake.address +" se ha conectado.");

    /**
     * Envia msj al cliente.
     */
    socket.emit("messages", messages);

    /**
     * Recibe msg del cliente 
     * y guarda en array.
     * Emite msjs actualizados a todos los clientes conectados.
     */
    socket.on('add-message', (data) => {
        messages.push(data);

        // Emite msjs a todos los clientes conectados.
        io.sockets.emit('messages', messages);
    });
});

/**
 * Creacion de server con express.
 */
server.listen(6677, () => {
    console.log("Server On! http://localhost:6677");
});