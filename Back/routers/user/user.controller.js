
 const { createToken, createPW } = require("../../jwt");
const mysql = require('mysql');


const config = {
    
    host:'localhost',
    user:'root',
    password:'root',
    database:'exchange',

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
                res.json('가입되어 있지 않습니다')
            }else{
                res.cookie('AccessToken', Token);
                res.json('로그인 되셨습니다')
            }
        })

    });   



}



let join_success = async (req, res, next) => {

    const {userid, username, userpw, account , wallet} = req.body
    console.log(req.body)
    const jwtuserpw = createPW(userpw);

    console.log(userid)
    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`insert into user (userid, username, userpw, account, wallet) values ('${userid}', '${username}', '${jwtuserpw}', '${account}', '${wallet}')`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            res.json(results)
        })

    });   

}

module.exports = {
    join_success,
    login_success
}