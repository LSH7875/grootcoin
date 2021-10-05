const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'jh951128',
    database: 'grootcoin',
    connectionLimit: 100
})


module.exports = {
    pool
}






