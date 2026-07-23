const futbolistas = require('../models/futbolistas.js'); 


// Obtener todos los futbolistas registrados

exports.obtenerTodos = async (req, res) => {
    try {
        const listaFutbolistas = await futbolistas.find();
        res.status(200).json(listaFutbolistas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la lista de futbolistas', error: error.message });
    }
};

// Registrar un nuevo futbolista
exports.crearFutbolista = async (req, res) => {
    try {
        const nuevoFutbolista = new futbolistas(req.body);
        await nuevoFutbolista.save();
        res.status(201).json({ mensaje: 'Futbolista registrado con éxito', futbolista: nuevoFutbolista });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar al futbolista', error: error.message });
    }
};

// Actualizar los datos de un futbolista por su id_corto
exports.actualizarFutbolista = async (req, res) => {
    try {
        const futbolistaActualizado = await futbolistas.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );

        if (!futbolistaActualizado) {
            return res.status(404).json({ mensaje: 'Futbolista no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Datos del futbolista actualizados con éxito', futbolista: futbolistaActualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar los datos del futbolista', error: error.message });
    }
};

// Eliminar un futbolista por su id_corto
exports.eliminarFutbolista = async (req, res) => {
    try {
        const futbolistaEliminado = await futbolistas.findOneAndDelete({ id_corto: req.params.id_corto });

        if (!futbolistaEliminado) {
            return res.status(404).json({ mensaje: 'Futbolista no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Registro del futbolista eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el registro del futbolista', error: error.message });
    }
};

