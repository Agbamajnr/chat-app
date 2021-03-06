var express = require('express');
var app =  express();
var socket = require('socket.io')

var server= app.listen(4000, ()=> {
    console.log('listening  to request')
})

app.use(express.static('public'));

var io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })
    socket.on('typing', (data) =>  {
        socket.broadcast.emit('typing', data)
    })
})

