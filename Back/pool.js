const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'jh951128',
=======
    password: '0000',
>>>>>>> 9e71c9a0156ed3c086e21a42c2b26a5a3e54a538
    database: 'grootcoin',
    connectionLimit: 100
})


module.exports = {
    pool
}






