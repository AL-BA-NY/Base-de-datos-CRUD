const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const cobrosSchema = new Schema({

    id_corto: { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    concepto: { type: String, required: true },
    monto_deuda: { type: mongoose.Schema.Types.Decimal128, required: true },
    estado: { type: String, required: true },
    fecha_emision: { type: Date, default: Date.now },
    // Add other schema fields here
});

const Cobros = mongoose.model("Cobros", cobrosSchema);

module.exports = Cobros;