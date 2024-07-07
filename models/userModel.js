// trago a base de datos
const db = require("../conexion/db");


// aca hago las funciones para operar el CRUD e autenticacion de los usuarios...
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios", (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios WHERE id = ?", [id], (err, results) => {
            if (err) return reject(err);
            resolve(results[0]);
        });
    });
};


// CRIAR UN USUARIO

const create = ({ nombre, usuario, contrasena }) => {
    return new Promise((resolve, reject) => {
        // trago el modulo bcrypt !!!
        const hashedPassword = require("bcrypt").hashSync(contrasena, 10);
        db.query("INSERT INTO usuarios (nombre, usuario, contrasena) VALUES (?, ?, ?)", 
        [nombre, usuario, hashedPassword], 
        (err, results) => {
            if (err) return reject(err);
            resolve({ id: results.insertId, nombre, usuario });
        });
    });
};


// SUBIR EL USUARIO

const update = (id, { nombre, usuario, contrasena }) => {
    return new Promise((resolve, reject) => {
        const hashedPassword = require("bcrypt").hashSync(contrasena, 10);
        db.query("UPDATE usuarios SET nombre = ?, usuario = ?, contrasena = ? WHERE id = ?", 
        [nombre, usuario, hashedPassword, id], 
        (err, results) => {
            if (err) return reject(err);
            resolve({ id, nombre, usuario });
        });
    });
};


// DELETAR EL USUARIO
const remove = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM usuarios WHERE id = ?", [id], (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};


// LOGAR EL USUARIO

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM usuarios WHERE usuario = ?", [username], (err, results) => {
            if (err) return reject(err);
            if (results.length === 0) return resolve(null);
            const user = results[0];
            const isValidPassword = require("bcrypt").compareSync(password, user.contrasena);
            if (!isValidPassword) return resolve(null);
            resolve(user);
        });
    });
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};
