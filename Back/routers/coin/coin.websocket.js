const WebSocket = require('ws');
const mysql = require('mysql');


router.get('/check_balance/:id',controller2.check_balance);
//유저의 예약금 조회하기---웹소켓
router.get('/check_reservation/:id',controller2.check_reservation);
//유저의 미체결 주문 내역---웹소켓
router.get('/unexecuted_transaction/:id/:coin',controller2.check_unexecuted);
//유저의 체결 주문 내역---웹소켓


//내 체결 내역 조회 :id/:coin
const check_executed=async(req,res)=>{
    const {id,coin} = req.params;
    await connetcion.query(`SELECT * FROM transaction WHERE (a_orderid=${id} OR b_orderid=${id}) AND coin_id=${coin} ORDER BY regtime DESC`,(err,result)=>{
        const ws= new WebSocket(`ws://localhost:8080/check_executed/${id}/${coin}`);
        ws.on('open',()=>{
            ws.send({result})
        });        
    })
}
//내 비체결 내역 조회
const check_unexecuted=()=>{
    const {id,coin} = req.params;
    await connection.query(`SELECT price,time,qty FROM coin_orderbook WHERE userid=${id} AND coin_id=${coin} AND rest>0`,(err,result)=>{
        const ws = new WebSocket(`ws://localhost:8080/check_executed/${id}/${coin}`);
        ws.on('open',async()=>{
            ws.send({result});
        })
    })
}
//내 예약금 조회
const check_reservation=()=>{
    const {id}= req.params;
    await connection.query(`SELECT * FROM assets WHERE userid = ${id} reservation=1`)
}
//내 자산 조회
const check_balance =async()=>{
    const {id}=req.params;
    //내 코인
        await connection.query(`SELECT buy-sell from ((SELECT SUM(amount) FROM transaction WHERE a_orderid=${id})as sell AND (SELECT SUM(amount) FROM transaction WHERE b_orderid=${id})as buy`)
    //내 현금
        await connection.query(`SELECT a.in-a.out from (select userid,SUM(input),reservation as in,SUM(output) as out FROM assets GROUP BY userid) as a WHERE userid=${id} AND reservation=0`)
}

module.exports={check_balance,check_reservation,check_unexecuted,check_executed}