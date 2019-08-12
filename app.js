const express = require('express');
const swagger = require('swagger-ui-express');
const swaggerFile = require('./swagger.json');

const app = express();

app.use('/api-docs', swagger.serve, swagger.setup(swaggerFile));
app.get('/getTicket', (req, resp) => {
    resp.status(200).send(getTicket());
});
app.get('/getTickets', (req, resp) => {
    let tickets = [];
    for (let i = 0; i < req.query.count; i++) {
        tickets.push(getTicket());
    }
    resp.status(200).send(tickets);
});

app.listen(3000);

console.log("Application started");

function getTicket() {
    const BASE34_ALPHABET = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    var ticket = '';
    while (ticket.length < 13) {
        ticket += BASE34_ALPHABET.charAt(Math.floor(Math.random() * BASE34_ALPHABET.length));
    }
    return ticket;
}