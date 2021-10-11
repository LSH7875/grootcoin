const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
const { pool } = require('./pool')

async function wsinit() {

    wss.on('connection', async function connection(ws) {

        let connection;
        let content = []

        connection = await pool.getConnection(async conn => conn);
        let assets = await connection.query(`select * from assets`)
        
        let assetsArr = []
        let assets_result = 0
        
        for(let i=0; i<assets[0].length; i++)
        {
            assets_result = assets_result + assets[0][i].input
            // assets_result = assets_result - assets[0][i].output
        }
        for(let i=0; i<assets[0].length; i++)
        {
            // assets_result = assets_result + assets[0][i].input
            // assets_result = assets_result - assets[0][i].output
        }
        console.log(assets_result)
        assetsArr.push(assets_result)

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
            regdate.push(`${new Date(transaction[0][i].regdate*1000).getFullYear()}-${new Date(transaction[0][i].regdate*1000).getMonth()+1}-${new Date(transaction[0][i].regdate*1000).getDate()} ${("0" + new Date(transaction[0][i].regdate*1000).getHours()).slice(-2)}:${("0" + new Date(transaction[0][i].regdate*1000).getMinutes()).slice(-2)}`)

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
                let search_holfhour = ckeck_data[0][0].payment !== undefined ? ago_day + i : last_time - one_day +i
                let halfhour_data = await connection.query(`select payment,regdate from transaction where regdate >= "${search_holfhour}" ORDER BY regdate ASC`)
                let halfhour_price = await connection.query(`select max(payment) as max, min(payment) as min from transaction where regdate >= "${search_holfhour}" ORDER BY regdate ASC`)
                //30분 마다 고가 저가 시가 종가
                graph.push({
                    half_max: halfhour_price[0][0].max,
                    half_min: halfhour_price[0][0].min,
                    half_start: halfhour_data[0][0].payment,
                    half_last: halfhour_data[0][0].payment,
                    time: halfhour_data[0][0].regdate
                })
            }
            console.log(graph[0])
        } 
        else {
            graph.push({
                "msg": "데이터 베이스에 겨래내역이 없습니다."
            })
        }

        // ws.send( JSON.stringify({
        //     "graph":graph,
        // "price":price, "time":time, "qty":qty, "regdate":regdate, "payment":payment, "a_amount":a_amount, "assets":assetsArr
        // }))
        wss.clients.forEach((e) => {
            e.send( JSON.stringify({"price":price, "time":time, "qty":qty, "regdate":regdate, "payment":payment, "a_amount":a_amount, "assets":assetsArr,"graph":graph}))
        })
        });
}

async function join() {

    let connection;
    let content = []
    
    connection = await pool.getConnection(async conn => conn);
      
    let assets = await connection.query(`select * from assets`)
        
    let assetsArr = []
    let assets_result = 0
    
    for(let i=0; i<assets[0].length; i++)
    {
        assets_result = assets_result + assets[0][i].input
        // assets_result = assets_result - assets[0][i].output
    }
    for(let i=0; i<assets[0].length; i++)
    {
        // assets_result = assets_result + assets[0][i].input
        // assets_result = assets_result - assets[0][i].output
    }
    console.log(assets_result)
    assetsArr.push(assets_result)

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
        regdate.push(`${new Date(transaction[0][i].regdate*1000).getFullYear()}-${new Date(transaction[0][i].regdate*1000).getMonth()+1}-${new Date(transaction[0][i].regdate*1000).getDate()} ${("0" + new Date(transaction[0][i].regdate*1000).getHours()).slice(-2)}:${("0" + new Date(transaction[0][i].regdate*1000).getMinutes()).slice(-2)}`)
        payment.push(transaction[0][i].payment)
        a_amount.push(transaction[0][i].a_amount)
    }

wss.clients.forEach((e) => {
    e.send( JSON.stringify({"price":price, "time":time, "qty":qty, "regdate":regdate, "payment":payment, "a_amount":a_amount, "assets":assetsArr}))
})

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