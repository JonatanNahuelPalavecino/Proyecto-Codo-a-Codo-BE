const express = require('express');
const router = express.Router();
const checkTurnoController = require('../controller/turno.controller');
const { actualizarTurno, eliminarTurno } = require('../controller/turno.controller');

router.post('/chequear-turno', checkTurnoController.checkTurno);

router.post("/create-turno", checkTurnoController.createTurno)





// Ruta para actualizar un registro
router.put('/actualizar-turno/:id', actualizarTurno);

// Ruta para Elininar un registro
router.delete('/eliminar-turno/:id', eliminarTurno);

// module.exports = router;

module.exports = router;

