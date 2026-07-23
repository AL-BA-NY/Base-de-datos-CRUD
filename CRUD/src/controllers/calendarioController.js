const calendario = require('../models/calendario.js');


/////////OBTENER TODOS LOS DATOS DEL CALENDARIO//////////

exports.obtenerTodos = async (req, res) => {
    try {
        const eventos = await calendario.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los eventos del calendario', error });
    }
};

////CREAR///

exports.crearEvento = async (req, res) => {
    try {
        const nuevoEvento = new calendario(req.body);
        await nuevoEvento.save();
        res.status(201).json({ message: 'Evento creado exitosamente', evento: nuevoEvento });
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el evento', error });
    }
};

/////ACTUALIZAR CALENDARIO POR SU ID_CORTO)

exports.actualizarEvento = async (req, res) => {
    try {
        const eventoActualizado = await calendario.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );
        if (!eventoActualizado) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
        res.status(200).json({ mensaje: 'Evento actualizado con éxito', evento: eventoActualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el evento', error: error.message });
    }
};

// Eliminar un evento
exports.eliminarEvento = async (req, res) => {
    try {
        const eventoEliminado = await calendario.findOneAndDelete({ id_corto: req.params.id_corto });
        if (!eventoEliminado) {
            return res.status(404).json({ mensaje: 'Evento no encontrado' });
        }
        res.status(200).json({ mensaje: 'Evento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el evento', error: error.message });
    }
};

