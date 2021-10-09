
const { pool } = require('../../pool');
const { wsinit } = require('../../websocket');
const ws = require('../../websocket');
const request = require("request");

let rpc = (account, amount) => {
    let headers = { "Content-type": "application/json" };
    let body = `{"method":"sendtoaddress","parms":["${account}","${amount}"]}`;

    const options = {
        url: `http://8964218c89d13fad02874e43bcf9875f6b7ee1c9:83ea2f21781686a88e00c3da12df28a6d3b86654@127.0.0.1:3010`,
        method: "POST",
        headers,
        body
    }
    const callback = (err, response, data) => {
        if (err == null && resoinse.statusCode == 200) {
            const body = JSON.parse(data);
            return body;
        } else {
            return err
        }
    }
    return request(options, callback)
}

// 매수 
let buy_order = async (req, res) => {
    let { userid, price, qty, ordertype, rest, coin_id } = req.body;
    let connection;
    let sum_commission;
    let signed_amount;
    let total_price;
    let transaction;
    let minus_rest;
    let sell_rest;
    let this_order_update;

    try {
        connection = await pool.getConnection(async conn => conn);
        // 매수주문 coin_orderbook 에 등록
        let add_buy = await connection.query(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values('${userid}','${price}','${qty}','${ordertype}','${rest}','${coin_id}','0')`)
        let buy_pk = add_buy[0].insertId;
        //매수 가격에 맞는게 있는지 검색 (ordertype 이 매도면서 수량이 0이 아니고 가격이 낮은 수 부터 체결하기 위해서 낮은값이 같은게 있를경우 등록 먼저한 순서대로)
        let serch_buy = await connection.query(`select * from coin_orderbook where state = 0 AND coin_id = ${coin_id} AND ordertype = 1 AND rest != 0 AND price <= ${price} ORDER BY price ASC, time ASC`)
        let serch_buy_law = serch_buy[0].filter((law) => { return law })
        console.log(serch_buy_law.length);
        let check_wallet = await connection.query(`select wallet from user where userid = "${userid}"`);
        if (serch_buy[0] !== undefined) {
            // 매수 가격과 맞는게 있을경우
            // console.log("test++++++++++", results.length);
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            if (serch_buy[0].length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_buy_law.length; i++) {
                    //매수의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
                    let use_rest = check_rest[0][0].rest
                    //매수량이 매도보다 많을때    : 매수량이 같거나 매도보다 적을때
                    sum_commission = use_rest > serch_buy_law[i].rest ? coin_commission[0][0].commission * serch_buy_law[i].rest : coin_commission[0][0].commission * use_rest
                    total_price = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest * serch_buy_law[i].price : use_rest * serch_buy_law[i].price
                    transaction = use_rest > serch_buy_law[i].rest ? 1 : 0
                    signed_amount = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest - sum_commission : use_rest - sum_commission
                    sell_rest = use_rest >= serch_buy_law[i].rest ? 0 : serch_buy_law[i].rest - use_rest
                    minus_rest = use_rest > serch_buy_law[i].rest ? use_rest - serch_buy_law[i].rest : serch_buy_law[i].rest - use_rest
                    this_order_update = use_rest > serch_buy_law[i].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}` : `update coin_orderbook set rest = 0 where pk = ${buy_pk}`

                    let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)

                    await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_pk[0].insertId}')`)
                    await connection.query(this_order_update)
                    await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[i].pk}`)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[i].userid}','${total_price}','0','${transaction_pk[0].insertId}')`)

                    if (use_rest == 0) {
                        break;
                    }
                }
            } else if (serch_buy_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
                let use_rest = check_rest[0][0].rest
                //매수량이 매도보다 많을때    : 매수량이 같거나 매도보다 적을때
                sum_commission = use_rest > serch_buy_law[0].rest ? coin_commission[0][0].commission * serch_buy_law[0].rest : coin_commission[0][0].commission * use_rest
                total_price = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest * serch_buy_law[0].price : use_rest * serch_buy_law[0].price
                transaction = use_rest > serch_buy_law[0].rest ? 1 : 0
                signed_amount = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest - sum_commission : use_rest - sum_commission
                minus_rest = use_rest > serch_buy_law[0].rest ? use_rest - serch_buy_law[0].rest : serch_buy_law[0].rest - use_rest
                sell_rest = use_rest >= serch_buy_law[0].rest ? 0 : serch_buy_law[0].rest - use_rest
                this_order_update = use_rest > serch_buy_law[0].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}` : `update coin_orderbook set rest = 0 where pk = ${buy_pk}`

                let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
            
                await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_pk[0].insertId}')`)
                await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[0].pk}`)
                await connection.query(this_order_update)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[0].userid}','${total_price}','0','${transaction_pk[0].insertId}')`)
                res.json('거래완료')
            } else {
                // 매수가격과 맞는게 없을경우
                console.log("맞는게 없음으로 대기");
            }
        }
        let history = await connection.query(`select * from coin_orderbook where userid = "${userid}"`)
        res.json({
            "msg": "정상적으로 적으로 주문 되었습니다",
            "history": history[0]
        })

        ws.join()
    } catch (error) {
        console.log(error);
    }
    ws.wsinit()
}



let sell_order = async (req, res) => {
    let { userid, price, qty, ordertype, rest, coin_id } = req.body;
    let sum_commission;
    let signed_amount;
    let total_price;
    let transaction;
    let minus_rest;
    let buy_rest;
    let this_order_update;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        // 매도주문 coin_orderbook 에 등록
        let add_sell = await connection.query(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values('${userid}','${price}','${qty}','${ordertype}','${rest}','${coin_id}','0')`)
        let sell_pk = add_sell[0].insertId;
        //매도 가격에 맞는게 있는지 검색 (ordertype 이 매도면서 수량이 0이 아니고 가격이 낮은 수 부터 체결하기 위해서 낮은값이 같은게 있를경우 등록 먼저한 순서대로)
        let serch_buy = await connection.query(`select * from coin_orderbook where state = 0 AND coin_id = ${coin_id} AND ordertype = 0 AND rest != 0 AND price >= ${price} ORDER BY price DESC, time ASC`)
        let serch_buy_law = serch_buy[0].filter((law) => { return law })

        if (serch_buy[0] !== undefined) {
            // 매도 가격과 맞는게 있을경우
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            if (serch_buy[0].length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_buy_law.length; i++) {
                    //매도의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${sell_pk}`)
                    let use_rest = check_rest[0][0].rest
                    //매도량이 매수보다 많을때    : 매수량이 같거나 매도보다 적을때
                    sum_commission = use_rest > serch_buy_law[i].rest ? coin_commission[0][0].commission * serch_buy_law[i].rest : coin_commission[0][0].commission * use_rest
                    total_price = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest * serch_buy_law[i].price : use_rest * serch_buy_law[i].price
                    transaction = use_rest > serch_buy_law[i].rest ? 1 : 0
                    signed_amount = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest - sum_commission : use_rest - sum_commission
                    buy_rest = use_rest >= serch_buy_law[i].rest ? 0 : serch_buy_law[i].rest - use_rest
                    minus_rest = use_rest > serch_buy_law[i].rest ? use_rest - serch_buy_law[i].rest : serch_buy_law[i].rest - use_rest
                    this_order_update = use_rest > serch_buy_law[i].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}` : `update coin_orderbook set rest = 0 where pk = ${sell_pk}`

                    let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','${total_price}','0','${transaction_pk[0].insertId}')`)
                    await connection.query(this_order_update)
                    await connection.query(`update coin_orderbook set rest = ${buy_rest} where pk = ${serch_buy_law[i].pk}`)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[i].userid}','0','${total_price}','${transaction_pk[0].insertId}')`)

                    if (use_rest == 0) {
                        break;
                    }
                }
            } else if (serch_buy_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${sell_pk}`)
                let use_rest = check_rest[0][0].rest
                //매도량이 매수보다 많을때    : 매수량이 같거나 매도보다 적을때
                sum_commission = use_rest > serch_buy_law[0].rest ? coin_commission[0][0].commission * serch_buy_law[i].rest : coin_commission[0][0].commission * use_rest
                total_price = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest * serch_buy_law[i].price : use_rest * serch_buy_law[i].price
                transaction = use_rest > serch_buy_law[0].rest ? 1 : 0
                signed_amount = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest - sum_commission : use_rest - sum_commission
                buy_rest = use_rest >= serch_buy_law[0].rest ? 0 : serch_buy_law[0].rest - use_rest
                minus_rest = use_rest > serch_buy_law[0].rest ? use_rest - serch_buy_law[0].rest : serch_buy_law[0].rest - use_rest
                this_order_update = use_rest > serch_buy_law[0].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}` : `update coin_orderbook set rest = 0 where pk = ${sell_pk}`

                let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','${total_price}','0','${transaction_pk[0].insertId}')`)
                await connection.query(this_order_update)
                await connection.query(`update coin_orderbook set rest = ${buy_rest} where pk = ${serch_buy_law[0].pk}`)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[0].userid}','0','${total_price}','${transaction_pk[0].insertId}')`)

            } else {
                // 매도가격과 맞는게 없을경우
                //res.json({ 'msg': '거래에 맞는 가격이 없음으로 대기' })
            }
            // res.json('ok')
        }
        let history = await connection.query(`select * from coin_orderbook where userid = "${userid}"`)
        res.json({
            "msg": "정상적으로 적으로 주문 되었습니다",
            "history": history[0]
        })
        ws.join()
    } catch (error) {
        console.log(error);
    }
    ws.wsinit()
}

// 주문 취소하기 
let coin_cancle = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);
    try {
        let { pk } = req.body
        await connection.query(`update coin_orderbook set state = '1' where pk = ${pk}`)
        res.json({ 'msg': '정상 취소 되셨습니다.' })

        ws.join()
    } catch (error) {
        console.log(error);
    }
    ws.wsinit()
}

// 내 자산 확인하기 
let search_assets = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn)
    let { userid } = req.body;
    try {
        let assets = await connection.query(`select * from assets where userid = "${userid}"`)
        let in_out = await connection.query(`select sum(input) as total_input,sum(output) as total_output from assets where userid ="${userid}"`)
        let total = await connection.query(`select (adde.a-adde.b) as total_assets from (select sum(input)as a,sum(output)as b from assets where userid = "${userid}") as adde`)
        //let cancle_cahrge = await connection.query(`select * from coin_orderbook where state = "1"`)
        let book_pay = await connection.query(`select * from coin_orderbook where rest != "0" AND state != "1"`)
        // let total_cancle = 0;
        let total_book = 0;

        // for(let i=0; i <cancle_cahrge.length; i++){
        //     total_cancle += cancle_cahrge[0][i].price * cancle_cahrge[0][i].rest
        // }
        for (let i = 0; i < book_pay.length; i++) {
            total_book += book_pay[0][i].price * book_pay[0][i].rest
        }

        let all_total = Number(total[0][0].total_assets) - total_book;

        res.json({
            "msg": "OK",
            "assets": assets[0],
            "in_out": in_out[0],
            "total": all_total
        })
    } catch (error) {
        console.log(error);
    }
}

// 체결 내역
let search_deal = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn)
    let { userid } = req.body;
    try {
        let deal = await connection.query(` select * from transaction as a join coin_orderbook as b on a.a_orderid = b.pk or a.b_orderid = b.pk where b.userid = "${userid}";`)
        res.json({
            "msg": "OK",
            "deal": deal[0]
        })
    } catch (error) {
        console.log(error);
    }
}

// 주문내역 
let contract = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn)
    let { userid, id } = req.body;

    let data;
    if (id == 0) {
        //미체결
        data = await connection.query(`select * from coin_orderbook where userid = "${userid}" AND rest != "0" AND state = "0" ORDER BY time DESC`)
    } else {
        //취소
        data = await connection.query(`select * from coin_orderbook where userid = "${userid}" AND rest = "0" OR state != "0" ORDER BY time DESC`)
    }
    res.json({
        "data": data[0]
    })
}

//그래프에 필요한 값
let graph = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn)
    let one_day = 24 * (60 * 60)
    let now = Math.floor(+ new Date() / 1000);
    let ago_day = now - one_day
    // 트랜젝션 기록이 있는지 체크 
    let first_check = await connection.query(`select * from transaction`);
    let data = []
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
            data.push({
                half_max: halfhour_price[0][0].max,
                half_min: halfhour_price[0][0].min,
                half_start: halfhour_data[0][0].payment,
                half_last: halfhour_data[0][halfhour_data.length - 1].payment,
                time: search_holfhour
            })
        }
    } else {
        data.push({
            "msg": "데이터 베이스에 겨래내역이 없습니다."
        })
    }
    res.json({
        "data": data
    })
}



module.exports = {
    buy_order,
    sell_order,
    coin_cancle,
    search_assets,
    search_deal,
    graph,
    contract,

}