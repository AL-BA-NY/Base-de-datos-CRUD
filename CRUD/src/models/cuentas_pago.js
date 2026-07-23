const mongoose = require('mongoose');

const cuentas_pagoSchema = new mongoose.Schema({
    id_corto: { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    banco: { type: String, required: true },
    telefono: { type: String, required: true },
    cedula: { type: String, required: true },

});

const Cuentas_pago = mongoose.model("Cuentas_pago", cuentas_pagoSchema);

module.exports = Cuentas_pago;
