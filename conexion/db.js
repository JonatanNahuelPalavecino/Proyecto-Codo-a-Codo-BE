const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "basededatosdeprueba"
})

connection.connect((err) => {
    if (err) {
        return console.log("Error al conectarse a la base de datos: ", err)
    }

    console.log("Conectado a la base de datos.");
})

module.exports = connection