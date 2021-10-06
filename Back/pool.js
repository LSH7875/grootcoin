const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'root',
=======
    password: '0000',
>>>>>>> fbe8b105b020369285250a55bfe32cae9de26832
    database: 'grootcoin',
    connectionLimit: 100
})


module.exports = {
    pool
}






