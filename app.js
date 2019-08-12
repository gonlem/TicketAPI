const express = require('express');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

const app = express();

// Expose OpenAPI service specification in Swagger UI
app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));

// Expose the 'getTicket' method which generates a single ticket
app.get('/getTicket', (req, resp) => {
    resp.status(200).send(getTicket());
});

// Expose the 'getTickets' method which generates as many tickets as it is requested by the 'count' query parameter 
app.get('/getTickets', (req, resp) => {
    let tickets = [];
    for (let i = 0; i < req.query.count; i++) {
        tickets.push(getTicket());
    }
    resp.status(200).send(tickets);
});

// Listen on port 3000
app.listen(3000);

console.log("Application started");

// Function which generate a single ticket
function getTicket() {
    const BASE34_ALPHABET = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    var ticket = '';
    while (ticket.length < 13) {
        ticket += BASE34_ALPHABET.charAt(Math.floor(Math.random() * BASE34_ALPHABET.length));
    }
    return ticket;
}