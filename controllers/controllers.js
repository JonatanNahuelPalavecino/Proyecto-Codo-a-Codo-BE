
const db = require('../db/db');


const createTurno = (req, res) => {
    const { nombre,  apellido, telefono, direccion, service, fecha, hour } = req.body;
    const sql = 'INSERT INTO turnos ( nombre,  apellido, telefono, direccion, service, fecha, hour) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre,  apellido, telefono, direccion, service, fecha, hour], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error al crear el Turno' });
        }
        res.status(201).json({ message: 'Turno creado con éxito', userId: results.insertId });
    });
};

module.exports = {
    createTurno,
};