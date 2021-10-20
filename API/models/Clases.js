const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClasesSchema = new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    tipo: {
        type: String
    },
    forma: {
        type: String
    },
    materias: {
        type: String
    },
    precio: {
        type: String
    }
});

module.exports = mongoose.model('clases', ClasesSchema);