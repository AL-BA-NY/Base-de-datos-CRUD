const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { crearUsuario} = require('../controllers/usuarioController');

// Rutas base: /api/usuarios
router.get('/', usuarioController.obtenerTodos);
router.post('/', usuarioController.crearUsuario);

// Rutas dinámicas usando el id_corto: /api/usuarios/:id_corto
router.put('/:id_corto', usuarioController.actualizarUsuario);
router.delete('/:id_corto', usuarioController.eliminarUsuario);

module.exports = router;