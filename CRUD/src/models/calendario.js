const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calendarioSchema = new mongoose.Schema({

    id_corto: { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    hora: { type: String, required: true },
    tipo_recurrencia: { type: String, required: true },
    dias_semana: { type: String, required: true },
    dia_inicio_mes: { type: String, required: true },
    dia_fin_mes: { type: String, required: true },
    fecha_especifica: { type: String, required: true },

});
const Calendario = mongoose.model("Calendario", calendarioSchema);

module.exports = Calendario;
