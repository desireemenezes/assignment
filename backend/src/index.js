const express = require('express');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json()); // recebe e manda informações pra api em formato json

//Importa usuario_controller para verificar token
/* const controller = require('./controller/UserController');
const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', controller.validateUser, TaskRoutes); */

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/task', TaskRoutes);

const TypeRoutes = require('./routes/TypeRoutes');
server.use('/type', TypeRoutes);

server.listen(3333, () => {
    console.log('Api online')
});