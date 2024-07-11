const express = require('express');
const router = express.Router();
const checkTurnoController = require('../controller/turno.controller');

router.post('/chequear-turno', checkTurnoController.checkTurno);

router.post("/create-turno", checkTurnoController.createTurno)

router.post("/ver-turnos", checkTurnoController.verTurno)

router.put("/actualizar-turno", checkTurnoController.updateTurno)

router.delete("/eliminar-turno", checkTurnoController.deleteTurno)

module.exports = router;