const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'jh951128',
=======
    password: '0000',
>>>>>>> f2e350e24440e56f0234200e46e95d9667a1418c
    database: 'grootcoin',
    connectionLimit: 100
})


module.exports = {
    pool
}






