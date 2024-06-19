const express = require("express")
const cors = require("cors")
const rutaContacto = require("./router/contacto.router")
const app = express()

const port = 3000

app.listen(port)
app.use(cors())
app.use(express.json())
app.use(rutaContacto)
console.log("Servidor prendido en puerto: ", port);