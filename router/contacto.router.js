 


// OK!

const express = require("express");
const contacto = require("../controller/contacto.controller");
const router = express.Router(); 


router.get("/", (req, res) => {
    res.send("Endpoint de prueba para verificar funcionalidad!");
});

router.post("/contacto", contacto.index);

module.exports = router;
