const express = require('express');
const server = express(); // carrega server
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

server.listen(7000, () => {
    console.log('Api online')
});


