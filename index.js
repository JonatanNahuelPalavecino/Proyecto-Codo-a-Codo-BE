
// ========================================




//=============================================


// arrancando con la importacion de modulos!

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');


// configuraciones iniciales, como PORT = 3000 que esta libre.

const app = express();
const PORT = 3000;
// const DB_PATH = './conexion/database.db'; - aca era un teste , pero no funcionó! 
const DB_PATH = path.resolve(__dirname, 'conexion', 'database.db');


app.use(cors());
app.use(bodyParser.json());
// aca podemos poner archivo estaticos com html, css.....
app.use(express.static('public')); 



// Conexión a la base de datos SQLite3 y creación de tabla 'contactos' 

const db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        console.error('Error al abrir la base de datos:', err.message);
    } else {
        console.log('Conectado a SQLite.');

        db.run(`CREATE TABLE IF NOT EXISTS contactos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            telefono TEXT,
            email TEXT,
            mensaje TEXT,
            opcion_de_contacto TEXT
        )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla contactos:', err.message);
            } else {
                console.log('Tabla contactos creada correctamente.');
            }
        });
    }
});

// Ruta API => para obtener todos los registros de contactos

app.get('/api/contactos', (req, res) => {
    db.all('SELECT * FROM contactos', (err, rows) => {
        if (err) {
            console.error("Error al obtener los contactos:", err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Ruta API => para agregar un nuevo registro de contacto !!! CONFORME NOSOTROS ENVIAMOS

app.post('/api/contacto', (req, res) => {
    const { nombre, telefono, email, mensaje, opcion_de_contacto } = req.body;

    //DEJO ESO PARA IMPRIMIR EN CONSOLA!!

    console.log("Datos del Cliente: ");
    console.log("Nombre: ", nombre);
    console.log("Telefono: ", telefono);
    console.log("Email: ", email);
    console.log("Mensaje: ", mensaje);
    console.log("Opcion de Contacto: ", opcion_de_contacto);

    db.run(`INSERT INTO contactos (nombre, telefono, email, mensaje, opcion_de_contacto) VALUES (?, ?, ?, ?, ?)`,
        [nombre, telefono, email, mensaje, opcion_de_contacto], function(err) {
            if (err) {
                console.error("Error al insertar datos en la base de datos:", err.message);
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: "Datos insertados correctamente!" });
            }
        });
});

// PARA INICIAR EL SERVIDOR, DEJAMOS COM "PORT", YA QUE EL MISMO PUEDE COMBIAR! 
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
