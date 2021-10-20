const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv');
const cors = require('cors');
const PORT = 4000;

dotenv.config()

// Crear el servidor 
const app = express();

// Habilitar cors
app.use(cors());

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.TUPROFE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log("Data base connected..."));

// Habilitar el body-parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

// Habilitar routing
app.use('/', routes())

// Puerto y arrancar el servidor
app.listen((process.env.PORT || 4000), () => {
    console.log('Servidor funcionando...');
})
