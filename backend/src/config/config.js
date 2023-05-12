const mongoose = require('mongoose');

const initMongoose = mongoose.connect('mongodb://localhost:27017/inmobiliaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });


module.exports = initMongoose;