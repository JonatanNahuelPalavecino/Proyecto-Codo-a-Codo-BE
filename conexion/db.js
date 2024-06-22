
//--------------------------

//Importada la libreria de SQLite3 !!!
const sqlite3 = require('sqlite3').verbose();
// Aca la ruta para da database.db -
const DB_PATH = '../conexion/database.db';



// abrir conexion con la base de datos! SQLite fue salvo en DB_Path
async function openDb() {

  //.open_readwrite para lectura y escritura juntamente com call (err)
  return new sqlite3.Database(DB_PATH, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    } else {
      console.log('Conexão com o banco de dados SQLite estabelecida.');
    }
  });
}

// por aca logramos traer los contactos!

async function obterContatos() {
  let db = await openDb();
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM contactos', (err, rows) => { 
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}


// exportamos funciones 

module.exports = { openDb, obterContatos };
