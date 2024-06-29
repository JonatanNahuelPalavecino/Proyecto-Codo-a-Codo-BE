//db/db.js

const mysql = require('mysql2');

const db = {
  host: 'localhost',    // Cambia esto si tu DB no está en localhost
  user: 'root',   // Usuario de tu base de datos
  password: '', // Contraseña de tu base de datos
  database: 'serviciosaires' // Nombre de tu base de datos
};

const connection = mysql.createConnection(db);

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err.stack);
    return;
  }
  console.log('Base de datos conectada.');
});

module.exports = connection;
