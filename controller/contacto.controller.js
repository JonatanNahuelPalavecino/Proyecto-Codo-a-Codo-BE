const db = require("../conexion/db")

const index = (req, res) => {

    const {nombre, telefono, email, mensaje, opcion_de_contacto} = req.body

    const sql = "INSERT INTO consultas (nombre, telefono, email, mensaje, opcion_de_contacto) VALUES (?, ?, ?, ?, ?)"

    db.query(sql, [nombre, telefono, email, mensaje, opcion_de_contacto], (err, result) => {

        if (err) {
            console.log("Hubo un problema con guardar la consulta en la base de datos");
            return res.status(500).json({
                estado: "Error",
                mensaje: "Hubo un problema con guardar la consulta en la base de datos"
            })
        }
        
        console.log("Se ha registrado la consulta en la base de datos.");
        res.status(200).json({
            estado: "Success",
            mensaje: "Se ha registrado la consulta en la base de datos."
        })
    })
    
}

module.exports = {
    index,
}