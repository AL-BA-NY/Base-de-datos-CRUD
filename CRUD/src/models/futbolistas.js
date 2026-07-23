const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const futbolistasSchema = new Schema({
    
    id_corto: { type: Number, required: [true, 'El id_corto es obligatorio'], unique: true },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    cedula  : { type: String, required: true },
    fecha_nacimiento: { type: String, required: true },
    lugar_de_nacimiento: { type: String, required: true },
    edad: { type: Number, required: true },
    altura: { type: mongoose.Schema.Types.Decimal128, required: true },
    peso: { type: String, required: true },
    grado:  {type: String, required: true },
    institucion: { type: String, required: true },
    direccion: { type: String, required: true },
    enfermedad: { type: String, required: false },
    discapacidad: { type: String, required: false },
    grupo_sanguineo: { type: String, required: true },
    genero: { type: String, required: true },
    posicion_principal: { type: String, required: true },
    perfil: { type: String, required: true },
    correo_futbolista: { type: String, required: true },
    categoria: { type: String, required: true },
    fecha_registro: { type: String, required: true },
    nombre_y_apellido_representante: { type: String, required: true },
    cedula_del_representante: { type: String, required: true },
    parentesco_con_la_representante: { type: String, required: true },
    telefono_del_representante: { type: String, required: true },
    ocupacion_de_la_representante: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const Futbolistas = mongoose.model("Futbolistas", futbolistasSchema);

module.exports = Futbolistas;
