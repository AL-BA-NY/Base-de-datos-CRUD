const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id_corto: { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    cedula: { type: String, required: true },
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    password:  { type: String, required: true },
    telefono: { type: String, required: true },
    correo: { type: String, required: true },

});
const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;