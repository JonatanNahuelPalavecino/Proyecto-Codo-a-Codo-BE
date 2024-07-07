// const express = require("express")
// const router = express.Router()
// const signInController = require("../controller/auth.controller")
// const authMiddleware = require("../middlewares/auth.middleware")

// router.post("/register", signInController.signUp)

// router.post("/login", signInController.signIn)

// router.get("/protected", authMiddleware, (req, res) => {
//     res.json({userId: req.userId})
// })




// module.exports = router


const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");  
const authMiddleware = require("../middlewares/auth.middleware");

// Ruta para el registro de usuarios
router.post("/register", authController.signUp);

// Ruta para el inicio de sesión
router.post("/login", authController.signIn);

// Ruta protegida
router.get("/protected", authMiddleware, (req, res) => {
    res.json({ userId: req.userId });
});

module.exports = router;


