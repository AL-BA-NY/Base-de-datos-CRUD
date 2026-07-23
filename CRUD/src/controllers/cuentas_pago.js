const cuentas_pago = require('../models/cuentas_pago.js');

// Obtener todas las cuentas de pago

exports.obtenerTodas = async (req, res) => {
    try {
        const cuentas = await cuentas_pago.find();
        res.status(200).json(cuentas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener las cuentas de pago', error: error.message });
    }
};

// Registrar una nueva cuenta de pago
exports.crearCuenta = async (req, res) => {
    try {
        const nuevaCuenta = new cuentas_pago(req.body);
        await nuevaCuenta.save();
        res.status(201).json({ mensaje: 'Cuenta de pago registrada con éxito', cuenta: nuevaCuenta });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al registrar la cuenta de pago', error: error.message });
    }
};

// Actualizar una cuenta de pago por su id_corto
exports.actualizarCuenta = async (req, res) => {
    try {
        const cuentaActualizada = await cuentas_pago.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );

        if (!cuentaActualizada) {
            return res.status(404).json({ mensaje: 'Cuenta de pago no encontrada con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Cuenta de pago actualizada con éxito', cuenta: cuentaActualizada });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar la cuenta de pago', error: error.message });
    }
};

// Eliminar una cuenta de pago por su id_corto
exports.eliminarCuenta = async (req, res) => {
    try {
        const cuentaEliminada = await cuentas_pago.findOneAndDelete({ id_corto: req.params.id_corto });

        if (!cuentaEliminada) {
            return res.status(404).json({ mensaje: 'Cuenta de pago no encontrada con ese id_corto' });
        }
        res.status(200).json({ mensaje: 'Cuenta de pago eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la cuenta de pago', error: error.message });
    }
};

