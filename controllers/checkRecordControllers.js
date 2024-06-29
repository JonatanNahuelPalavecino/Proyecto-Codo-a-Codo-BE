const db = require('../db/db');

const checkRecord = (req, res) => {
  const { fecha, hour } = req.body;

  const query = 'SELECT COUNT(*) as count FROM turnos WHERE fecha = ? AND hour = ?';
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

module.exports= {
     checkRecord,
}  