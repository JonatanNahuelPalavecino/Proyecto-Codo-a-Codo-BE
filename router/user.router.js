const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// ruta de usuarios, hay que probar !!!!

// Obtener todos los usuarios
router.get("/", userController.getAllUsers);

// Buscar un usuario por su ID
router.get("/:id", userController.getUserById);

// Crear un nuevo usuario
router.post("/", userController.createUser);

// Actualizar un usuario existente por su ID
router.put("/:id", userController.updateUser);

// Eliminar un usuario por su ID
router.delete("/:id", userController.deleteUser);

// Iniciar sesión de usuario
router.post("/login", userController.loginUser);

module.exports = router;
