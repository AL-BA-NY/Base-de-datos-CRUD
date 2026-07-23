const express = require('express');
const router = express.Router();
const cuentasPagoController = require('../controllers/cuentas_pago');

// Rutas base: /api/cuentas-pago
router.get('/', cuentasPagoController.obtenerTodas);
router.post('/', cuentasPagoController.crearCuenta);

// Rutas dinámicas usando el id_corto: /api/cuentas-pago/:id_corto
router.put('/:id_corto', cuentasPagoController.actualizarCuenta);
router.delete('/:id_corto', cuentasPagoController.eliminarCuenta);

module.exports = router;