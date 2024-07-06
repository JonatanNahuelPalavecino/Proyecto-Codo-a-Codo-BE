// const express = require("express");
// const router = express.Router();
// const userController = require("../controller/userController");


// // CRIAMOS LAS RUTAS PARA EL USUARIO

// //TENER TODOS LOS USUARIOS
// router.get("/", userController.getAllUsers);
// // BUSCAR UN USUARIO POR EL ID
// router.get("/:id", userController.getUserById);
// // CREAR UN NUEVO USUARIO
// router.post("/", userController.createUser);
// // ACTUALIZAR UN USUARIO QUE YA EXISTE
// router.put("/:id", userController.updateUser);
// // ELEMINAR UN USUARIO
// router.delete("/:id", userController.deleteUser);
// //INICIAR SESION DE USUARIO
// router.post("/login", userController.loginUser);



// module.exports = router;

// user.Routers.js

const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// Rutas para el manejo de usuarios

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
