const express = require("express")
const cors = require("cors")
const rutaContacto = require("./router/contacto.router")
const rutaTurno = require("./router/turno.router")
const app = express()

const port = 3000

app.listen(port)
app.use(cors())
app.use(express.json())
app.use(rutaContacto)
app.use(rutaTurno)
console.log("Servidor prendido en puerto: ", port);