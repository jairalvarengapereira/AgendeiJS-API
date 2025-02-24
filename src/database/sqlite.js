import sqlite3 from 'sqlite3';

const path = require('path');

const SQLite3 = sqlite3.verbose();

// Facilitador de consultas SQL
function query(command, params, method = 'all'){
  return new Promise((resolve, reject) => {
    db[method](command, params, function (err, result) {
      if (err)
        reject(err);
      else
        resolve(result);
    });
  });
}

const dbPath = process.env.DB_URL || path.join(__dirname,'banco.db')

const db = new SQLite3.Database("./src/database/banco.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err)
    return console.error(`Erro ao conectar o banco de dados: ${err.message}`);
});

export {db, query};