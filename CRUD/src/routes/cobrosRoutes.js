const express = require('express');
const router = express.Router();
const cobrosController = require('../controllers/cobrosController');

// RUTAS GENERALES ///
router.get('/', cobrosController.obtenerTodos);
router.post('/', cobrosController.crearCobro);

// RUTAS ESPECIFICAS USANDO id_corto ///
router.put('/:id_corto', cobrosController.actualizarCobro);
router.delete('/:id_corto', cobrosController.eliminarCobro);

module.exports = router;