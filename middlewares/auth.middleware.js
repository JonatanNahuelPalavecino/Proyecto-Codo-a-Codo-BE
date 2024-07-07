// const jwt = require("jsonwebtoken")

// module.exports = (req, res, next) => {

//     const authHeader = req.headers["authorization"]

//     if (!authHeader)
//         return res
//             .status(403)
//             .send({
//                 estado: "error",
//                 auth: false,
//                 mensaje: "Falta el token"
//             })

//     const token = authHeader.split(" ")[1]

//     if (!token)
//         return res
//             .status(403)
//             .send({
//                 estado: "error",
//                 auth: false,
//                 mensaje: "No existe o error de token"
//             })

//     jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {

//         if (error)
//             return res
//                 .status(500)
//                 .send({
//                     estado: "error",
//                     auth:false,
//                     mensaje: "Error en la autenticacion del token"
//                 })

//         req.userId = decoded.id

//         next()
//     })
// }


/////////////////////////////

const jwt = require('jsonwebtoken');

// Middleware para verificar y decodificar el token JWT
const authMiddleware = (req, res, next) => {
    // Obtener el token del encabezado 'Authorization'
    const token = req.headers['authorization'];

    // Verificar si existe el token
    if (!token) {
        return res.status(401).json({ exito: false, mensaje: "Acceso denegado. No se proporcionó token." });
    }

    try {
        // Verificar y decodificar el token utilizando el secreto JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Asignar el userId decodificado al objeto de solicitud (req)
        req.userId = decoded.userId;

        // Continuar con la siguiente función middleware o controlador
        next();
    } catch (error) {
        // Capturar errores de verificación del token (token inválido, expirado, etc.)
        return res.status(401).json({ exito: false, mensaje: "Token inválido." });
    }
};

module.exports = authMiddleware;

