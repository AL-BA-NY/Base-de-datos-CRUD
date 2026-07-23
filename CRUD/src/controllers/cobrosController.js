const cobros = require('../models/cobros.js'); // Ajusta la ruta según tus carpetas

// Obtener todos los cobros
exports.obtenerTodos = async (req, res) => {
    try {
        const listaCobros = await cobros.find();
        res.status(200).json(listaCobros);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los cobros', error: error.message });
    }
};

// Crear un nuevo cobro
exports.crearCobro = async (req, res) => {
    try {
        const nuevoCobro = new cobros(req.body);
        await nuevoCobro.save();
        res.status(201).json({ mensaje: 'Cobro registrado con éxito', cobro: nuevoCobro });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar el cobro', error: error.message });
    }
};

// Actualizar cobro por id_corto
exports.actualizarCobro = async (req, res) => {
    try {
        const cobroActualizado = await cobros.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );

        if (!cobroActualizado) {
            return res.status(404).json({ mensaje: 'Cobro no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Cobro actualizado con éxito', cobro: cobroActualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el cobro', error: error.message });
    }
};

// Eliminar cobro por id_corto
exports.eliminarCobro = async (req, res) => {
    try {
        const cobroEliminado = await cobros.findOneAndDelete({ id_corto: req.params.id_corto });

        if (!cobroEliminado) {
            return res.status(404).json({ mensaje: 'Cobro no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Cobro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el cobro', error: error.message });
    }
};