const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pagosSchema = new Schema({
    
    id_corto:  { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    banco_emisor: { type: String, required: true },
    referencia_bancaria: { type: String, required: true },
    cedula_pagador: { type: String, required: true },
    telefono_contacto: { type: String, required: true },
    concepto:  { type: String, required: true },
    monto_pagado: { type: String, required: true },
    fecha_registro: { type: Date, default: Date.now },
    estatus_verificacion    : { type: String, required: true },
    banco_destino : { type: String, required: true },
});
const Pagos  = mongoose.model("Pagos", pagosSchema);

module.exports = Pagos;
