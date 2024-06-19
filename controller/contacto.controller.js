const db = require("../conexion/db")

const index = (req, res) => {

    const {nombre, telefono, mensaje, opcion_de_contacto} = req.body

    

    console.log("Entro a la consulta", nombre, telefono, mensaje, opcion_de_contacto);

    res.status(200).json({mensaje: "Todo ok"})
}

module.exports = {
    index,
}