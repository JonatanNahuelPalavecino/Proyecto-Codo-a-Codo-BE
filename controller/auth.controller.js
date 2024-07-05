const db = require("../conexion/db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userExists = (email, callback) => {
    
    const checkUserSql = "SELECT * FROM usuarios WHERE email = ?";
    
    db.query(checkUserSql, [email], (error, results) => {
        
        if (error) {
            return callback(error, null);
        }
        
        if (results.length > 0) {
            return callback(null, results[0])
        } else {
            return callback(null, null)
        }
    });
};

const signIn = (req, res) => {

    const {email, password} = req.body

    userExists(email, (error, user) => {

        if (error) {
            
            return res.status(500).json({
                estado: "error",
                auth: false,
                mensaje: 'Error al verificar el usuario',
                token: null
            });
        }

        if (!user) {

            return res.status(404).json({
                estado: "error",
                auth: false,
                mensaje: 'Usuario no encontrado',
                token: null
            });

        } 

        const validacion = bcrypt.compareSync(password, user.password)

        if (!validacion) {

            return res.status(401).json({
                estado: "error",
                auth: false,
                mensaje: 'Contraseña Incorrecta',
                token: null
            })

        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: process.env.DURATION_TOKEN });

        res.json({
            estado: "success",
            auth: true,
            mensaje: 'Inicio de Sesion correcto',
            token: token
        });
    })

}

const signUp = (req, res) => {

    const { nombre, email, password } = req.body;

    userExists(email, (error, exists) => {

        if (error) {
            
            return res.status(500).json({
                estado: "error",
                auth: false,
                mensaje: 'Error al verificar el usuario',
                token: null
            });
        }

        if (exists) {

            return res.status(404).json({
                estado: "error",
                auth: false,
                mensaje: 'El usuario ya está registrado',
                token: null
            });

        } else {

            console.log(exists);
            const passHasheado = bcrypt.hashSync(password, 10);

            const insertUserSql = "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)";

            db.query(insertUserSql, [nombre, email, passHasheado], (error, results) => {

                if (error) {
                    
                    return res.status(500).json({
                        estado: "error",
                        auth: false,
                        mensaje: 'Error al crear el usuario',
                        token: null
                    });
                }

                const token = jwt.sign({ email: email }, process.env.SECRET_KEY, { expiresIn: process.env.DURATION_TOKEN });

                res.status(201).json({
                    estado: "success",
                    auth: true,
                    mensaje: 'Usuario registrado con éxito',
                    token: token
                });

            });
        }
    });
};


module.exports = {
    signIn,
    signUp
}