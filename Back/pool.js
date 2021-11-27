const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'grootcoinsuccess',
    database: 'grootcoin',
    connectionLimit: 100
})


module.exports = {
    pool
}
 
