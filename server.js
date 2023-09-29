const WebSocket = require('ws'); // Import the 'ws' library

const server = new WebSocket.Server({ port: 8080 });

// Store the current text on the server
let currentText = 'Hello, World!';

// Handle incoming connections
server.on('connection', (socket) => {
    // Send the current text to the new client
    socket.send(currentText);

    // Handle messages from clients
    socket.on('message', (message) => {
        // Update the current text and broadcast it to all clients
        currentText = message;
        server.clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(currentText);
            }
        });
    });
});
