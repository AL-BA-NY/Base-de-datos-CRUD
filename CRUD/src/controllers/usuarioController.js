const usuario = require('../models/usuario.js'); // Ajusta la ruta según carpeta

// Obtener todos los usuarios
exports.obtenerTodos = async (req, res) => {
    try {
        const listaUsuarios = await usuario.find();
        res.status(200).json(listaUsuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los usuarios', error: error.message });
    }
};

// Crear un nuevo usuario
exports.crearUsuario = async (req, res) => {
    try {
        const nuevousuario = new usuario(req.body);
        await nuevousuario.save();
        res.status(201).json({ mensaje: 'Usuario creado con éxito', usuario: nuevousuario });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al crear el usuario', error: error.message });
    }
};

// Actualizar usuario
exports.actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await usuario.findOneAndUpdate(
            { id_corto: req.params.id_corto },
            req.body,
            { new: true, runValidators: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario actualizado con éxito', usuario: usuarioActualizado });
    } catch (error) {
        res.status(400).json({ mensaje: 'Error al actualizar el usuario', error: error.message });
    }
};

// Eliminar usuario
exports.eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await usuario.findOneAndDelete({ id_corto: req.params.id_corto });
        if (!usuarioEliminado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el usuario', error: error.message });
    }
};