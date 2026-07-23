const pagos = require('../models/pagos.js'); 

// Obtener todos los pagos registrados
exports.obtenerTodos = async (req, res) => {
    try {
        const listaPagos = await pagos.find();
        res.status(200).json(listaPagos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la lista de pagos', error: error.message });
    }
};

// Registrar un nuevo pago
exports.crearPago = async (req, res) => {
    try {
        const nuevoPago = new pagos(req.body);
        await nuevoPago.save();
        res.status(201).json({ mensaje: 'Pago registrado con éxito', pago: nuevoPago });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar el pago', error: error.message });
    }
};

// Actualizar un pago por su id_corto

exports.actualizarPago = async (req, res) => {
    try {
        const pagoActualizado = await pagos.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );

        if (!pagoActualizado) {
            return res.status(404).json({ mensaje: 'Pago no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Datos del pago actualizados con éxito', pago: pagoActualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar los datos del pago', error: error.message });
    }
};

// Eliminar un pago por su id_corto
exports.eliminarPago = async (req, res) => {
    try {
        const pagoEliminado = await pagos.findOneAndDelete({ id_corto: req.params.id_corto });

        if (!pagoEliminado) {
            return res.status(404).json({ mensaje: 'Pago no encontrado con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Registro de pago eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el registro de pago', error: error.message });
    }
};