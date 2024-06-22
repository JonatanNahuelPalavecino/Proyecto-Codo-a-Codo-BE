// const db = require("../conexion/db")

// const index = (req, res) => {

//     const {nombre, telefono, mensaje, opcion_de_contacto} = req.body

    

//     console.log("Entro a la consulta", nombre, telefono, mensaje, opcion_de_contacto);

//     res.status(200).json({mensaje: "Todo ok"})
// }

// module.exports = {
//     index,
// }



// TESTEO 1 


// const db = require("../conexion/db");

// const index = async (req, res) => {
//     const { nombre, telefono, mensaje, opcion_de_contacto } = req.body;

//     try {

//         const resultadoInsercao = await db.inserirContato(nombre, telefono, mensaje, opcion_de_contacto);

//         console.log("Dados inseridos no banco:", resultadoInsercao);

//         res.status(200).json({ mensaje: "Dados inseridos com sucesso no banco de dados" });
//     } catch (error) {
//         console.error("Erro ao inserir dados no banco:", error);
//         res.status(500).json({ error: "Erro interno ao processar a requisição" });
//     }
// };

// module.exports = {
//     index,
// };


// TESTEO 2

// const { openDb } = require("../conexion/db");

// const index = async (req, res) => {
//     const { nombre, telefono, mensaje, opcion_de_contacto } = req.body;

//     try {
//         const db = await openDb();
        
//         const sql = `INSERT INTO contatos (nombre, telefono, mensaje, opcion_de_contacto) VALUES (?, ?, ?, ?)`;
//         const values = [nombre, telefono, mensaje, opcion_de_contacto];

//         await db.run(sql, values);

//         console.log("Dados inseridos com sucesso");

//         res.status(200).json({ mensaje: "Dados inseridos com sucesso no banco de dados" });
//     } catch (error) {
//         console.error("Erro ao inserir dados no banco:", error);
//         res.status(500).json({ error: "Erro interno ao processar a requisição" });
//     }
// };

// module.exports = {
//     index,
// };



// contacto.controller.js

async function index(req, res) {
    const { nombre, telefono, email, mensaje, opcion_de_contacto } = req.body;

    console.log("Datos del Cliente");
    console.log("Nombre:", nombre);
    console.log("Telefono:", telefono);
    console.log("Email:", email);
    console.log("Mensaje:", mensaje);
    console.log("Opcion de contacto:", opcion_de_contacto);

    let db;
    try {
        db = await openDb();

        await db.run(`INSERT INTO contactos (nombre, telefono, email, mensaje, opcion_de_contacto) VALUES (?, ?, ?, ?, ?)`,
            [nombre, telefono, email, mensaje, opcion_de_contacto]);

        res.json({ message: "Datos insertados correctamente!" });
    } catch (error) {
        console.error("Error al insertar datos en la base de datos:", error);
        res.status(500).json({ error: error.message });
    } finally {
        if (db) {
            await db.close();
        }
    }
}

module.exports = {
    index
};
