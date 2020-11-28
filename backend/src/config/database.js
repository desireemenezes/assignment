const mongoose =  require('mongoose');

//conect database

const url = 'mongodb://localhost:27017/todo';

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(()=> {
    console.log('BD conectado');
  })
  .catch((error)=> {
    console.log('Error ao conectar ao BD');
  });

module.exports = mongoose;