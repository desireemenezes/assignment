const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json()); // recebe e manda informações pra api em formato json

//Importa usuario_controller para verificar token
const controller = require('./controller/UserController');

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const UserRoutes = require('./routes/UserRoutes');
server.use('/user', UserRoutes);

server.listen(3333, () => {
    console.log('Api online')
});