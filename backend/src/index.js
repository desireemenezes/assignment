const express = require('express');
const server = express(); // carrega server

server.get('/teste', (req, res) => {
    res.send('Welcome server');
});

server.listen(7000, () => {
    console.log('Api online')
});


