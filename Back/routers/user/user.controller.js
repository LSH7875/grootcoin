
 const { createToken, createPW } = require("../../jwt");
const mysql = require('mysql');


const config = {

    host:'localhost',
    user:'root',
    password:'root',
    database:'grootcoin',

}

const pool = mysql.createPool(config);


let login_success = async (req, res, next) => {

    const {userid, userpw} = req.query
    const jwtuserpw = createPW(userpw);
    const Token = createToken('userid');

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`select * from user where userid = '${userid}' and userpw = '${jwtuserpw}'`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;
            
            if(results.length == 0){
                res.json({msg:'가입되어 있지 않습니다', boolean:false})
            }else{
                res.cookie('AccessToken', Token);
                res.json({msg:`${userid}님 로그인 되셨습니다`, boolean:true, content:results})
                
            }
        })

    });   



}


let login_check = async (req, res, next) => {

    const {userid} = req.query

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`select * from user where userid = '${userid}'`, (error, results, fields) => {
            connection.release();
            if(error) throw error;

            if(results.length == 0){
                res.json('사용 가능한 아이디입니다')
            }else{
                res.json('사용 불가능한 아이디입니다')
            }
        })
    })

}

let join_success = async (req, res, next) => {

    const {userid, username, userpw, account , wallet} = req.body
    console.log(req.body)
    const jwtuserpw = createPW(userpw);

    console.log(userid)
    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`insert into user (userid, username, userpw, account, wallet) values ('${userid}', '${username}', '${jwtuserpw}', '${Number(account)+Number(1000000)}', '${wallet}')`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

        })

    });   

    

}

let income_change = async (req, res, next) => {

    const {userid, now, income} = req.body

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`update user set account = ${Number(now)+Number(income)} where userid = '${userid}'`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;
        })

    });   

}

let outcome_change = async (req, res, next) => {

    const {userid, now, outcome} = req.body

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`update user set account = ${Number(now)-Number(outcome)} where userid = '${userid}'`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            res.json(results)
        })

    });   

}

let order = async (req, res, next) => {

    const {userid, sell, sell_unit_send, buy, buy_unit_send, ordertype} = req.body

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`insert into order_table (userid, sell, sell_unit, buy, buy_unit, ordertype, active) values ('${userid}', '${sell}', '${sell_unit_send}', '${buy}', '${buy_unit_send}', '${ordertype}', 5)`, (error,results,fields)=>{
            if(error) throw error;


        })

    });   
}

let transaction = async (req, res, next) => {

    const {sell, ordertype} = req.query

    pool.getConnection((err,connection)=>{

        if(err) throw err;


    if(ordertype == 0) {
        connection.query(`select * from order_table where ordertype = 1 and sell < ${sell}`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;
            
            res.json(results[0])
        })            
    }
    })
}

let orderlist = async (req, res, next) => {

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`select * from order_table`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            res.json(results)
        })

    });   
}
module.exports = {
    join_success,
    login_check,
    login_success,
    income_change,
    outcome_change,
    order,
    orderlist,
    transaction
}