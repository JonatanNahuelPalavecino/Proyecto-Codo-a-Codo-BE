const db = require('../conexion/db');

const checkTurno = (req, res) => {
  const { fecha, hour } = req.body;

  const query = 'SELECT COUNT(*) as count FROM turnos WHERE fecha = ? AND rango_horario = ?';

  db.query(query, [fecha, hour], (err, result) => {

    if (err) {
      res.status(500).send(err);
    } else {
      if (result[0].count > 0) {
        res.json({ exists: true });
      } else {
        res.json({ exists: false });
      }
    }
  });
};

const createTurno = (req, res) => {

    const { nombre,  apellido, telefono, direccion, service, fecha, hour } = req.body;

    // console.log(nombre,  apellido, telefono, direccion, service, fecha, hour);
    // console.log(req.body);
    const sql = 'INSERT INTO turnos ( nombre,  apellido, telefono, direccion, tipo_de_servicio, fecha, rango_horario) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [nombre,  apellido, telefono, direccion, service, fecha, hour], (error, results) => {

        if (error) {
            console.error(error);
            return res.status(500).json({ 
                estado: "error",
                mensaje: 'Error al crear el Turno' 
            });
        }
        res.status(201).json({ 
            estado: "success",
            mensaje: 'Turno creado con exito' 
        });
    });
};

module.exports= {
     checkTurno,
     createTurno
}  