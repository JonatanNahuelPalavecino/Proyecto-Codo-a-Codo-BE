const express = require('express');
const router = express.Router();
const checkRecordController = require('../controllers/checkRecordControllers.js');

router.post('/check-record', checkRecordController.checkRecord);

module.exports = router;
