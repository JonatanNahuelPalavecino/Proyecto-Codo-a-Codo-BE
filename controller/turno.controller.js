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

    const { nombre,  apellido, usuario_id, telefono, direccion, service, fecha, hour } = req.body;

    // console.log(nombre,  apellido, telefono, direccion, service, fecha, hour);
    // console.log(req.body);
    const sql = 'INSERT INTO turnos ( nombre,  apellido,  usuario_id, telefono, direccion, tipo_de_servicio, fecha, rango_horario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [nombre,  apellido, usuario_id, telefono, direccion, service, fecha, hour], (error, results) => {

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

const verTurno = (req, res) => {
  const {id} = req.body

  const sql = "SELECT * FROM turnos WHERE usuario_id = ?"

  db.query(sql, [id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ 
          estado: "error",
          mensaje: 'Error al traer los turnos' 
      });
    }

    if (results.length === 0) {
      return res.status(201).json({ 
        estado: "success",
        mensaje: "No hay turnos de este usuario"
      });
    }

    res.status(201).json({ 
        estado: "success",
        turnos: results
    });
  })
}

const updateTurno = (req, res) => {
  const { nombre,  apellido, telefono, direccion, tipo_de_servicio, fecha, rango_horario, id  } = req.body;
  const sql = 'UPDATE turnos SET nombre = ?, apellido = ?, telefono = ?, direccion = ?, tipo_de_servicio = ?, fecha = ?, rango_horario = ? WHERE id = ?';

  db.query(sql, [nombre,  apellido, telefono, direccion, tipo_de_servicio, fecha, rango_horario, id], (err, result) => {
    if (err) {
      console.error('Error actualizando el registro:', err);
      res.status(500).send('Error actualizando el registro');
      return;
    }
    res.send('Registro Actualizado');
  });
}

const deleteTurno = (req, res) => {
  const {id} = req.body
  const sql = 'DELETE FROM turnos WHERE id = ?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error eliminando el registro:', err);
      res.status(500).send('Error eliminando el registro');
      return;
    }
    res.send('Registro eliminado');
  });
}

module.exports= {
     checkTurno,
     createTurno,
     updateTurno,
     deleteTurno,
     verTurno
}  