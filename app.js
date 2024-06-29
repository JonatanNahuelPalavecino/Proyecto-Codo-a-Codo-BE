
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const checkRecordRoutes = require('./routes/checkRecord');



// Middleware para parsear JSON
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Importar las rutas
const turnoRoutes = require('./routes/inicio.routes');

// Usar las rutas
app.use('/turnos', turnoRoutes); // Prefijo opcional '/api'
app.use('/', checkRecordRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});