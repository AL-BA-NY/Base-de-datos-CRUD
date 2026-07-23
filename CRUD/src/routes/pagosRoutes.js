const express = require('express');
const router = express.Router();
const pagosController = require('../controllers/pagosController');

// RUTAS PRINCIPALES ///
router.get('/', pagosController.obtenerTodos);
router.post('/', pagosController.crearPago);

// RUTAS DINAMICAS USANDO id_corto ///
router.put('/:id_corto', pagosController.actualizarPago);
router.delete('/:id_corto', pagosController.eliminarPago);

module.exports = router;