const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {

    const authHeader = req.headers["authorization"]

    if (!authHeader)
        return res
            .status(403)
            .send({
                estado: "error",
                auth: false,
                mensaje: "Falta el token"
            })

    const token = authHeader.split(" ")[1]

    if (!token)
        return res
            .status(403)
            .send({
                estado: "error",
                auth: false,
                mensaje: "No existe o error de token"
            })

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {

        if (error)
            return res
                .status(500)
                .send({
                    estado: "error",
                    auth:false,
                    mensaje: "Sesión cerrada. Error en la autenticacion del token"
                })

        req.userId = decoded.id

        next()
    })
}