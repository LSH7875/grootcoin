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
    const Token = createToken(userid);

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`select * from users where userid = ${userid} and userpw = ${jwtuserpw}`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            if(results == undefined){
                res.json({'msg':'회원이 존재하지 않습니다.', 'boolean':'false'})
            }else{
                res.cookie('AccessToken', Token, { httpOnly: true, secure: true });
                res.cookie('userid', userid);
                res.json({'msg':'로그인 되셨습니다', 'boolean':'true'})
            }
            
        })

    });   

}



let join_success = async (req, res, next) => {

    const {userid, username, userpw, account , wallet} = req.body
    const jwtuserpw = createPW(userpw);

    pool.getConnection((err,connection)=>{

        if(err) throw err;

        connection.query(`insert into users (userid, username, userpw, account, wallet) values ('${userid}', '${username}', '${jwtuserpw}', '${account}', '${wallet}')`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;
            
        })

    });   

}

module.exports = {
    join_success,
    login_success
}