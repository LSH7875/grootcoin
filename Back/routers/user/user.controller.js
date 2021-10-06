
const { createToken, createPW } = require("../../jwt");
const mysql = require('mysql');

const config = {

    host:'localhost',
    user:'root',
    password:'root',
    database:'grootcoin',

}

const pool = mysql.createPool(config);

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

let login_success = async (req, res, next) => {

    const {userid, userpw} = req.body.data
    console.log(userid,userpw)
    const jwtuserpw = createPW(userpw);
    const Token = createToken(userpw);

    pool.getConnection((err,connection)=>{

        if(err) throw err;
        connection.query(`select * from user where userid = '${userid}' and userpw = '${jwtuserpw}'`, (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            if(results.length == 0){
                res.json({msg:'가입되어 있지 않습니다', boolean:false})
            }else{
                res.cookie('userid', userid);
                res.cookie('AccessToken', Token);
                console.log(req.cookies)
                res.json({msg:`${userid}님 로그인 되셨습니다`, boolean:true, content:results})
                
            }
        })
    });   
}


module.exports = {
    join_success,
    login_success
}