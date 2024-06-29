
const express = require('express');
const router = express.Router();

const { createTurno }= require('../controllers/controllers');
/*
router.get('/', (req,res) => {

    //res.send("Listado general");
   // res.json("Listado general");
});

router.get("/", controller.getallmax);
*/

router.post('/', createTurno);
module.exports = router;

