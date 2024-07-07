require("dotenv").config()

const express = require("express")
const cors = require("cors")
const rutaContacto = require("./router/contacto.router")
const rutaTurno = require("./router/turno.router")
const rutaAuth = require("./router/auth.router")


const app = express()

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

app.use(cors())
app.use(express.json())
app.use(rutaContacto)
app.use(rutaTurno)
app.use("/auth", rutaAuth)


