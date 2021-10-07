const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const wss  = new WebSocketServer({ port: 8080 });
const { pool } = require('../Back/pool')

async function wsinit(){

    wss.on('connection', async function connection(ws) {
        
        let connection;
        let content = []
        
        connection = await pool.getConnection(async conn => conn);
        let login_success = await connection.query(`select * from user`)
        let buy_order = await connection.query(`select price,sum(rest)as total_qty from coin_orderbook where state = "0" AND ordertype = "0" group by price`)
        let sell_order = await connection.query(`select price,sum(rest)as total_qty from coin_orderbook where state = "0" AND ordertype = "1" group by price`)
        let total_amount = await connection.query(`select a.rest,b.rest from (select sum(rest) as rest from coin_orderbook where rest !="0" AND state != "1") as a,(select sum(rest) as rest from coin_orderbook where rest !="0" AND state != "1") as b`)
        //let transaction = await connection.query(`select a_amomunt,payment,regdate from transaction`)

         content.push(buy_order[0],sell_order[0],total_amount[0])

        for(let i=0; i<login_success[0].length; i++)
        {
            price.push(coin_orderbook[0][i].price)
            time.push(coin_orderbook[0][i].time)
            qty.push(coin_orderbook[0][i].coin_id)
        }

        let transaction = await connection.query(`select * from transaction`)
        
        let regdate = []
        let payment = []
        let a_amount = []
        for(let i=0; i<transaction[0].length; i++)
        {
            regdate.push(new Date(transaction[0][i].regdate*1000))
            payment.push(transaction[0][i].payment)
            a_amount.push(transaction[0][i].a_amount)
        }

        ws.send( JSON.stringify({"userid":userid, "price":price, "time":time, "qty":qty, "regdate":regdate, "payment":payment, "a_amount":a_amount}))
        // ws.send(JSON.stringify('{"data":"go"}'))
        

        // ws.on('message', function incoming(data, isBinary) {

        //     ws.clients.forEach((e) => {
        //         e.send('ewrewkljrew')
        //     }   )            
        //     // function each(client) {
        //     //         client.send('ewrewkljrew')
        //     // if (client !== ws && client.readyState === WebSocket.OPEN) {
        //     //     client.send(data);
        // });
      });
}


async function join() {

    let connection;
        connection = await pool.getConnection(async conn => conn);

        let user = await connection.query(`select * from user`)

        let userid = []
        for(let i=0; i<user[0].length; i++)
        {
            userid.push(user[0][i].userid)
        }

        let coin_orderbook = await connection.query(`select * from coin_orderbook`)
        
        let price = []
        let time = []
        let qty = []
        for(let i=0; i<coin_orderbook[0].length; i++)
        {
            price.push(coin_orderbook[0][i].price)
            time.push(coin_orderbook[0][i].time)
            qty.push(coin_orderbook[0][i].coin_id)
        }

        let transaction = await connection.query(`select * from transaction`)
        
        let regdate = []
        let payment = []
        let a_amount = []
        for(let i=0; i<transaction[0].length; i++)
        {
            regdate.push(new Date(transaction[0][i].regdate*1000))
            payment.push(transaction[0][i].payment)
            a_amount.push(transaction[0][i].a_amount)
        }

    wss.clients.forEach((e) => {
        e.send( JSON.stringify({"userid":userid, "price":price, "time":time, "qty":qty, "regdate":regdate, "payment":payment, "a_amount":a_amount}))
    })

}

function socketSend(data,func){
    const message=func? {func,data} : {data}
    wss.send(message);
}



module.exports={wsinit,socketSend,join,asset}