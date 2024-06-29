const express = require('express');
const router = express.Router();
const checkTurnoController = require('../controller/turno.controller');

router.post('/chequear-turno', checkTurnoController.checkTurno);

router.post("/create-turno", checkTurnoController.createTurno)

module.exports = router;