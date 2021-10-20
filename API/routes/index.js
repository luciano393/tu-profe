const express = require('express');
const clasesControllers = require('../controllers/clasesControllers');
const router = express.Router();

module.exports = function() {

    // Agrega nuevas clases
    router.post('/clases',
        clasesControllers.nuevaClase
    );

    // Obtiene todas las clases
    router.get('/clases',
        clasesControllers.obtenerClases
    );

    // Obtiene clase por ID
    router.get('/clases/:id',
        clasesControllers.obtenerClase
    );

    // Actualiza clase por ID
    router.put('/clase/:id',
        clasesControllers.actualizarClase
    );

    // Elimina una clase por su ID
    router.delete('/clases/:id',
        clasesControllers.eliminarClase
    )

    return router;
}