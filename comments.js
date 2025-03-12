// Create Web Server
var express = require('express');
var app = express();

// Create a server
var server = require('http').createServer(app);

// Create a WebSocket server
var io = require('socket.io').listen(server);

// Create a connection
io.sockets.on('connection', function(socket) {
  console.log('Client connected');

  // Receive a message
  socket.on('message', function(message) {
    console.log('Message received: ' + message);

    // Send the message to all clients
    io.sockets.emit('message', message);
  });

  // Disconnect
  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });
});

// Listen on port 8080
server.listen(8080);
console.log('Server running on http://localhost:8080');