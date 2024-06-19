const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

async function openDb() {
    return open({
        filename: '../database.db',
        driver: sqlite3.Database
    });
}

module.exports = { openDb };