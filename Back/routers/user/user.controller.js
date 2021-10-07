
const { createToken, createPW } = require("../../jwt");
const { pool } = require('../../pool')
const ws = require('../../websocket')

let join_success = async (req, res, next) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);

    const {userid, username, userpw, account , wallet} = req.body
    const jwtuserpw = createPW(userpw);

    let join_success = await connection.query(`insert into user (userid, username, userpw, account, wallet) values ('${userid}', '${username}', '${jwtuserpw}', '${Number(account)+Number(1000000)}', '${wallet}')`)
    
    ws.join()


}

let login_success = async (req, res, next) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);

    const {userid, userpw} = req.body.data
    console.log(userid,userpw)
    const jwtuserpw = createPW(userpw);
    const Token = createToken(userpw);

        let login_success = await connection.query(`select * from user where userid = '${userid}' and userpw = '${jwtuserpw}'`)
            console.log(login_success[0][0])
            let content = login_success[0][0]
            if(login_success.length == 0){
                res.json({msg:'가입되어 있지 않습니다', boolean:false})
            }else{
                res.cookie('userid', userid);
                res.cookie('AccessToken', Token);
                res.json({msg:`${userid}님 로그인 되셨습니다`, boolean:true, content:content})
                
            }
}


module.exports = {
    join_success,
    login_success
}