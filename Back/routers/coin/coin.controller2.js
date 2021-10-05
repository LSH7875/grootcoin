const { pool } = require('../../pool')
const mysql = require('mysql');


//메인 페이지에 정보를 뿌려주는 역할
const mainpage= async(req,res) =>{
    let connection = await pool.getConnection(async conn => conn);
    console.log('들어옴')
    const transaction_result = await connection.query(`SELECT payment,regdate,coin_id,a_amount FROM transaction`);
    const order_result = await connection.query('SELECT price, ordertype, rest, coin_id FROM coin_orderbook WHERE state=0')
    res.send({transaction:transaction_result[0], order: order_result[0]})
}

module.exports={mainpage}