const express = require('express');
const router = express.Router();
const calendarioController = require('../controllers/calendarioController');

// Rutas correctas
router.get('/',calendarioController.obtenerTodos);
router.post('/', calendarioController.crearEvento);
router.put('/:id_corto', calendarioController.actualizarEvento);
router.delete('/:id_corto', calendarioController.eliminarEvento);

module.exports = router;
