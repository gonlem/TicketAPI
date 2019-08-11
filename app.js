const express = require('express');

const app = express();

app.get('/api/v1/ticket', (req, resp) => {
    resp.status(200).send({
        ticket: getTicket()
    });
});

app.listen(3000);

console.log("Application started");

function getTicket() {
    const BASE34_ALPHABET = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    var ticket = '';
    for (let i = 0; i < 13; i++) {
        ticket += BASE34_ALPHABET.charAt(Math.floor(Math.random() * BASE34_ALPHABET.length));
    }
    return ticket;
}