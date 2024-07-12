const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DB_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE
})

connection.connect((err) => {
    if (err) {
        return console.log("Error al conectarse a la base de datos: ", err)
    }

    console.log("Conectado a la base de datos.");
})

module.exports = connection