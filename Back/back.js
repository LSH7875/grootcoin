const { pool } = require('../Back/pool')

async function back(){
    let connection;
    connection = pool.getConnection(async conn => conn);
    let login_success = await connection.query(`select * from user where userid = 'co@naver.com' `)
    // console.log(login_success[0][0])  
    
    return login_success[0][0]
}
