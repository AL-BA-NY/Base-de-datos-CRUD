const express = require('express');
const router = express.Router();
const futbolistasController = require('../controllers/futbolistasController');


router.get('/', futbolistasController.obtenerTodos);
router.post('/', futbolistasController.crearFutbolista);

router.put('/:id_corto', futbolistasController.actualizarFutbolista);
router.delete('/:id_corto', futbolistasController.eliminarFutbolista);

module.exports = router;