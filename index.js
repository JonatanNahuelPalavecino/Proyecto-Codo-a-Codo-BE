const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./router/user.router');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.use('/api/user', userRouter);



// Inicia el servidor
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});