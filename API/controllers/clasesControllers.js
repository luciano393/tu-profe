const Clases = require('../models/Clases');

// Crear una nueva clase
exports.nuevaClase = async (req, res, next) => {
    const clase = new Clases(req.body);
    
    try {
        await clase.save();
        res.json({ mensaje: "La clase ha sido añadida..."});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtener todas las clases
exports.obtenerClases = async (req, res, next) => {
    try {
        const clases = await Clases.find({})
        res.json(clases);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Obtener clase por ID
exports.obtenerClase = async (req, res, next) => {
    try {
        const clase = await Clases.findById(req.params.id);
        res.json(clase);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Actualizar clase por ID
exports.actualizarClase = async(req, res, next) => {
    try {
        const clase = await Clases.findOneAndUpdate({_id : req.params.id}, req.body, {
            new: true
        });
        res.json(clase);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Eliminar clase por su ID
exports.eliminarClase = async(req, res, next) => {
    try {
        await Clases.findOneAndDelete({_id : req.params.id});
        res.json({mensaje: "La clase ha sido eliminada..."})
    } catch (error) {
    console.log(error);
    next();
    }
}
