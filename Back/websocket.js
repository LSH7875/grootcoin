const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
const { pool } = require('./pool')

async function wsinit() {

    wss.on('connection', async function connection(ws) {

        let connection;
        let content = []

        connection = await pool.getConnection(async conn => conn);
        let login_success = await connection.query(`select * from user`)

        //호가창에 필요한 데이터 50번째 줄 까지
        let buy_order = await connection.query(`select price,sum(rest)as total_qty from coin_orderbook where state = "0" AND ordertype = "0" group by price`)
        let sell_order = await connection.query(`select price,sum(rest)as total_qty from coin_orderbook where state = "0" AND ordertype = "1" group by price`)
        let buy_total_amount = await connection.query(`select sum(rest) as rest from coin_orderbook where ordertype = "0" AND rest != "0" AND state != "1"`)
        let sell_total_amount = await connection.query(`select sum(rest) as rest from coin_orderbook where ordertype = "1" AND rest != "0" AND state != "1"`)
        //let transaction = await connection.query(`select a_amomunt,payment,regdate from transaction`)

        let buy_price = []
        let buy_qty = []
        let sell_price = []
        let sell_qty = []
        let buy_total = []
        let sell_total = []
        for (let i = 0; i < buy_order[0].length; i++) {
            buy_price.push(buy_order[0][i].price)
            buy_qty.push(buy_order[0][i].total_qty)
        }
        for (let i = 0; i < sell_order[0].length; i++) {
            sell_price.push(sell_order[0][i].price)
            sell_qty.push(sell_order[0][i].total_qty)
        }
        buy_total.push(buy_total_amount[0][0])
        sell_total.push(sell_total_amount[0][0])

        let transaction = await connection.query(`select * from transaction`)

        let regdate = []
        let payment = []
        let a_amount = []
        for (let i = 0; i < transaction[0].length; i++) {
            regdate.push(new Date(transaction[0][i].regdate * 1000))
            payment.push(transaction[0][i].payment)
            a_amount.push(transaction[0][i].a_amount)
        }
        //그래프에 필요한값
        let one_day = 24 * (60 * 60)
        let now = Math.floor(+ new Date() / 1000);
        let ago_day = now - one_day
        // 트랜젝션 기록이 있는지 체크 
        let first_check = await connection.query(`select * from transaction`);
        let graph = []
        if (first_check[0][0] !== undefined) {
            // 하루전까지 데이터가 있는지 체크  없으면 마지막 기점으로 24시간 거래 체크 
            let ckeck_data = await connection.query(`select * from transaction where regdate >="${ago_day}"`)
            let check_last = await connection.query(`select max(regdate) as last from transaction`);
            let last_time = check_last[0][0].last;
            for (i = 0; i < 1440; i += 30) {
                let search_holfhour = ckeck_data[0][0].payment !== undefined ? ago_day + i : last_time
                let halfhour_data = await connection.query(`select payment,regdate from transaction where regdate >= "${search_holfhour}" ORDER BY regdate ASC`)
                let halfhour_price = await connection.query(`select max(payment) as max, min(payment) as min from transaction where regdate >= "${search_holfhour}" ORDER BY regdate ASC`)
                //30분 마다 고가 저가 시가 종가
                graph.push({
                    half_max: halfhour_price[0][0].max,
                    half_min: halfhour_price[0][0].min,
                    half_start: halfhour_data[0][0].payment,
                    half_last: halfhour_data[0][halfhour_data.length - 1].payment,
                    time: search_holfhour
                })
            }
        } else {
            graph.push({
                "msg": "데이터 베이스에 겨래내역이 없습니다."
            })
        }

        // "userid":userid, 
        ws.send(JSON.stringify({

            "regdate": regdate,
            "payment": payment,
            "a_amount": a_amount,
            "buy_price": buy_price,
            "buy_qty": buy_qty,
            "sell_price": sell_price,
            "sell_qty": sell_qty,
            "buy_total": buy_total,
            "sell_total": sell_total,
            "graph":graph

        }))
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
    for (let i = 0; i < user[0].length; i++) {
        userid.push(user[0][i].userid)
    }

    let coin_orderbook = await connection.query(`select * from coin_orderbook`)
}

function socketSend(data, func) {
    const message = func ? { func, data } : { data }
    wss.send(message);
}

function transaction(data) {
    if (data.length) {

    } else if (data.length) {

    } else if (data.length) {

    }
    wss.send()
}


module.exports = {
    wsinit, socketSend, join, transaction
}