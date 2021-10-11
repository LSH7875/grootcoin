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
       
        let graph = 
        [
        {
            time:1538778600000,
            half_start:6629.81,
            half_max:6650.5,
            half_min:6623.04,
            half_last:6633.33
        },
          {
            time:1538780400000,
            half_start:6632.01,
            half_max:6643.5,
            half_min:6620,
            half_last:6630.11
          },
          {
            time:1538782200000,
            half_start:6630.71,
            half_max:6648.9,
            half_min:6623.34,
            half_last:6635.65
          },
          {
            time:1538784000000,
            half_start:6635.65,
            half_max:6651,
            half_min:6629.67,
            half_last:6638.24
          },
          {
            time:1538785800000,
            half_start:6638.24,
            half_max:6640,
            half_min:6620,
            half_last:6624.47
          },
          {
            time:1538787600000,
            half_start:6624.53,
            half_max:6636.0,
            half_min:6621.68,
            half_last:6624.31
          },
          {
            time:1538789400000,
            half_start:6624.61,
            half_max:6632.2,
            half_min:6617,
            half_last:6626.02
          },
          {
            time:1538791200000,
            half_start:6627,
            half_max:7.62,
            half_min:6584.22,
            half_last:6603.02
          },
          {
            time:1538793000000,
            half_start:6605,
            half_max:668.03,
            half_min:6598.95,
            half_last:6604.01
          },
          {
            time:1538794800000,
            half_start:6604.5,
            half_max:614.4,
            half_min:6602.26,
             half_last:6608.02
          },
          {
            time:1538796600000,
            half_start:6608.02,
            half_max:6610.6,
            half_min:6601.99,
            half_last:6608.91
          },
          {
            time:1538798400000,
            half_start:6608.91,
            half_max:6618.9,
            half_min:6608.0,
            half_last:6612
          },
          {
            time:1538800200000,
            half_start:6612,
            half_max:665.13,
            half_min:6605.0,
            half_last:6612
          },
          {
            time:1538802000000,
            half_start:6612,
            half_max:664.12,
            half_min:6608.43,
            half_last:6622.95
          },
          {
            time:1538803800000,
            half_start:6623.91,
            half_max:6623.9,
            half_min:6615,
            half_last:6615.67
          },
          {
            time:1538805600000,
            half_start:6618.69,
            half_max:6618.7,
            half_min:6610,
            half_last:6610.4
          },
          {
            time:1538807400000,
            half_start:6611,
            half_max:662.78,
            half_min:6610.4,
            half_last:6614.9
          },
          {
            time:1538809200000,
            half_start:6614.9,
            half_max:626.2,
            half_min:6613.33,
            half_last:6623.45
          },
          {
            time:1538811000000,
            half_start:6623.48,
            half_max:6627,
            half_min:6618.38,
            half_last:6620.35
          },
          {
            time:1538812800000,
            half_start:6619.43,
            half_max:6620.3,
            half_min:6610.05,
            half_last:6615.53
          },
          {
            time:1538814600000,
            half_start:6615.53,
            half_max:6617.9,
            half_min:6610,
            half_last:6615.19
          },
          {
            time:1538816400000,
            half_start:6615.19,
            half_max:6621.6,
            half_min:6608.2,
            half_last:6620
          },
          {
            time:1538818200000,
            half_start:6619.54,
            half_max:6625.1,
            half_min:6614.1,
            half_last:6620
          },
          {
            time:1538820000000,
            half_start:6620.33,
            half_max:6634.1,
            half_min:6617.24,
            half_last:6624.61
          },
          {
            time:1538821800000,
            half_start:6625.95,
            half_max:6626,
            half_min:6611.66,
            half_last:6617.58
          },
          {
            time:1538823600000,
            half_start:6619,
            half_max:5.97,
            half_min:6595.27,
            half_last:6598.86
          },
          {
            time:1538825400000,
            half_start:6598.86,
            half_max:6598.8,
            half_min:6570,
            half_last:6587.16
          },
          {
            time:1538827200000,
            half_start:6588.86,
            half_max:6600,
            half_min:6580,
            half_last:6593.4
          },
          {
            time:1538829000000,
            half_start:6593.99,
            half_max:6598.8,
            half_min:6585,
            half_last:6587.81
          },
          {
            time:1538830800000,
            half_start:6587.81,
            half_max:6592.7,
            half_min:6567.1,
            half_last:6578
          },
          {
            time:1538832600000,
            half_start:6578.35,
            half_max:6581.7,
            half_min:6567.3,
            half_last:6579
          },
          {
            time:1538834400000,
            half_start:6579.38,
            half_max:6580.9,
            half_min:6566.77,
            half_last:6575.96
          },
          {
            time:1538836200000,
            half_start:6575.96,
            half_max:6589,
            half_min:6571.77,
            half_last:6588.92
          },
          {
            time:1538838000000,
            half_start:6588.92,
            half_max:6594,
            half_min:6577.55,
            half_last:6589.22
          },
          {
            time:1538839800000,
            half_start:6589.3,
            half_max:598.89,
            half_min:6589.1,
            half_last:6596.08
          },
          {
            time:1538841600000,
            half_start:6597.5,
            half_max:6006,
            half_min:588.39,
            half_last:6596.25
          },
          {
            time:1538843400000,
            half_start:6598.03,
            half_max:6600,
            half_min:6588.73,
            half_last:6595.97
          },
          {
            time:1538845200000,
            half_start:6595.97,
            half_max:6602.0,
            half_min:6588.1,
            half_last:6602
          },
          {
            time:1538847000000,
            half_start:6602,
            half_max:6607,
            half_min:6358,
            half_last:6599.95
          },
          {
            time:1538848800000,
            half_start:6600.63,
            half_max:6601.2,
            half_min:6590.39,
            half_last:6591.02
          },
          {
            time:1538850600000,
            half_start:6591.02,
            half_max:6603.0,
            half_min:6591,
            half_last:6591
          },
          {
            time:1538852400000,
            half_start:6591,
            half_max:6603.32,
            half_min:6585,
            half_last:6592
          }
        ]

        let ckeck_data = await connection.query(`select * from transaction ORDER BY regdate ASC`)
        if (ckeck_data[0][0] !== undefined) {
            // 하루전까지 데이터가 있는지 체크  없으면 마지막 기점으로 24시간 거래 체크 
            //let check_last = await connection.query(`select max(regdate) as last from transaction ORDER BY regdate ASC`);
            for (i = 0; i < ckeck_data.length; i ++) {
                //let search_holfhour = ckeck_data[0][0].payment !== undefined ? ago_day + i : last_time - one_day +i
                let halfhour_data = await connection.query(`select payment,regdate from transaction ORDER BY regdate ASC`)
                let halfhour_price = await connection.query(`select max(payment) as max, min(payment) as min from transaction ORDER BY regdate ASC`)
                //30분 마다 고가 저가 시가 종가
                graph.shift()
                graph.push({
                    half_max: halfhour_price[0][i].max,
                    half_min: halfhour_price[0][i].min,
                    half_start: halfhour_data[0][i].payment,
                    half_last: halfhour_data[0][i].payment,
                    time: halfhour_data[0][i].regdate
                })
            }
            console.log(graph[0])
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