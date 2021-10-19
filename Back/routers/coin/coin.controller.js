const { pool } = require('../../pool');
const ws = require('../../websocket');
// const request = require("request");

let rpc = async (userid, account, amount, transaction_id) => {
    let headers = { "Content-type": "text/plain" };
    let body = `{"method":"sendfrom","params":["${userid}","${account}","${amount}"]}`;
    let connection = await pool.getConnection(async conn => conn);
    const options = {
        //url: `http://8964218c89d13fad02874e43bcf9875f6b7ee1c9:83ea2f21781686a88e00c3da12df28a6d3b86654@127.0.0.1:3010`,
        url: `http://grootcoin2:1234@127.0.0.1:3011`,
        method: "POST",
        headers,
        body
    }
    const callback = async (err, response, data) => {
        if (err == null && response.statusCode == 200) {
            let txid = JSON.parse(data);
            let new_txid = txid.result;
            await connection.query(`update transaction set txid = "${new_txid}" where id = "${transaction_id}"`)
            console.log("TXID-----성공");
        } else {
            console.log(err);

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
        let serch_buy_law = serch_buy[0]

        if (serch_buy_law[0] !== undefined) {
            // 매수 가격과 맞는게 있을경우
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            if (serch_buy_law.length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_buy_law.length; i++) {
                    //매수의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
                    let use_rest = check_rest[0][0].rest
                    if (use_rest == 0) {
                        break;
                    }
                    let wallet_check = await connection.query(`select wallet from user where userid = "${serch_buy_law[i].userid}"`)
                    let wallet = wallet_check[0][i].wallet;

                    //매수량이 매도보다 많을때    : 매수량이 같거나 매도보다 적을때
                    sum_commission = use_rest > serch_buy_law[i].rest ? coin_commission[0][0].commission * serch_buy_law[i].rest : coin_commission[0][0].commission * use_rest
                    total_price = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest * serch_buy_law[i].price : use_rest * serch_buy_law[i].price
                    transaction = use_rest > serch_buy_law[i].rest ? 1 : 0
                    signed_amount = use_rest > serch_buy_law[i].rest ? serch_buy_law[i].rest - sum_commission : use_rest - sum_commission
                    sell_rest = use_rest >= serch_buy_law[i].rest ? 0 : serch_buy_law[i].rest - use_rest
                    minus_rest = use_rest > serch_buy_law[i].rest ? use_rest - serch_buy_law[i].rest : serch_buy_law[i].rest - use_rest
                    this_order_update = use_rest > serch_buy_law[i].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}` : `update coin_orderbook set rest = 0 where pk = ${buy_pk}`


                    let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)
                    let transaction_id = transaction_pk[0].insertId;
                    rpc(wallet, userid, signed_amount, transaction_id)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_id}')`)
                    await connection.query(this_order_update)
                    await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[i].pk}`)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[i].userid}','${total_price}','0','${transaction_id}')`)


                }
            } else if (serch_buy_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
                let use_rest = check_rest[0][0].rest
                let wallet_check = await connection.query(`select wallet from user where userid = "${serch_buy_law[0].userid}"`)
                let { wallet } = wallet_check[0][0];
                //매수량이 매도보다 많을때    : 매수량이 같거나 매도보다 적을때
                sum_commission = use_rest > serch_buy_law[0].rest ? coin_commission[0][0].commission * serch_buy_law[0].rest : coin_commission[0][0].commission * use_rest
                total_price = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest * serch_buy_law[0].price : use_rest * serch_buy_law[0].price
                transaction = use_rest > serch_buy_law[0].rest ? 1 : 0
                signed_amount = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest - sum_commission : use_rest - sum_commission
                minus_rest = use_rest > serch_buy_law[0].rest ? use_rest - serch_buy_law[0].rest : serch_buy_law[0].rest - use_rest
                sell_rest = use_rest >= serch_buy_law[0].rest ? 0 : serch_buy_law[0].rest - use_rest
                this_order_update = use_rest > serch_buy_law[0].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}` : `update coin_orderbook set rest = 0 where pk = ${buy_pk}`

                let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
                let transaction_id = transaction_pk[0].insertId
                rpc(wallet, userid, signed_amount)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_id}')`)
                await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[0].pk}`)
                await connection.query(this_order_update)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[0].userid}','${total_price}','0','${transaction_id}')`)
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
        let serch_sell = await connection.query(`select * from coin_orderbook where state = 0 AND coin_id = ${coin_id} AND ordertype = 0 AND rest != 0 AND price >= ${price} ORDER BY price DESC, time ASC`)
        let serch_sell_law = serch_sell[0].filter((law) => { return law })

        if (serch_sell_law !== undefined) {
            // 매도 가격과 맞는게 있을경우
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            if (serch_sell_law.length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_sell_law.length; i++) {
                    //매도의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${sell_pk}`)
                    let use_rest = check_rest[0][0].rest
                    if (use_rest == 0) {
                        break;
                    }
                    let wallet_check = await connection.query(`select wallet from user where userid = "${serch_sell_law[i].userid}"`)
                    let { wallet } = wallet_check[0][i];
                    //매도량이 매수보다 많을때    : 매수량이 같거나 매도보다 적을때
                    sum_commission = use_rest > serch_sell_law[i].rest ? coin_commission[0][0].commission * serch_sell_law[i].rest : coin_commission[0][0].commission * use_rest
                    total_price = use_rest > serch_sell_law[i].rest ? serch_sell_law[i].rest * serch_sell_law[i].price : use_rest * serch_sell_law[i].price
                    transaction = use_rest > serch_sell_law[i].rest ? 1 : 0
                    signed_amount = use_rest > serch_sell_law[i].rest ? serch_sell_law[i].rest - sum_commission : use_rest - sum_commission
                    buy_rest = use_rest >= serch_sell_law[i].rest ? 0 : serch_sell_law[i].rest - use_rest
                    minus_rest = use_rest > serch_sell_law[i].rest ? use_rest - serch_sell_law[i].rest : serch_sell_law[i].rest - use_rest
                    this_order_update = use_rest > serch_sell_law[i].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}` : `update coin_orderbook set rest = 0 where pk = ${sell_pk}`


                    let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[i].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[i].price}')`)
                    let transaction_id = transaction_pk[0].insertId
                    rpc(userid, wallet, signed_amount, transaction_id)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','${total_price}','0','${transaction_id}')`)
                    await connection.query(this_order_update)
                    await connection.query(`update coin_orderbook set rest = ${buy_rest} where pk = ${serch_sell_law[i].pk}`)
                    await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_sell_law[i].userid}','0','${total_price}','${transaction_id}')`)


                }
            } else if (serch_sell_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${sell_pk}`)
                let use_rest = check_rest[0][0].rest
                let wallet_check = await connection.query(`select wallet from user where userid = "${serch_sell_law[0].userid}"`)
                let { wallet } = wallet_check[0][0];
                //매도량이 매수보다 많을때    : 매수량이 같거나 매도보다 적을때
                sum_commission = use_rest > serch_sell_law[0].rest ? coin_commission[0][0].commission * serch_sell_law[0].rest : coin_commission[0][0].commission * use_rest
                total_price = use_rest > serch_sell_law[0].rest ? serch_sell_law[0].rest * serch_sell_law[0].price : use_rest * serch_sell_law[0].price
                transaction = use_rest > serch_sell_law[0].rest ? 1 : 0
                signed_amount = use_rest > serch_sell_law[0].rest ? serch_sell_law[0].rest - sum_commission : use_rest - sum_commission
                buy_rest = use_rest >= serch_sell_law[0].rest ? 0 : serch_sell_law[0].rest - use_rest
                minus_rest = use_rest > serch_sell_law[0].rest ? use_rest - serch_sell_law[0].rest : serch_sell_law[0].rest - use_rest
                this_order_update = use_rest > serch_sell_law[0].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}` : `update coin_orderbook set rest = 0 where pk = ${sell_pk}`


                let transaction_pk = await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[0].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[0].price}')`)
                let transaction_id = transaction_pk[0].insertId
                rpc(userid, wallet, signed_amount.transaction_id)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','${total_price}','0','${transaction_id}')`)
                await connection.query(this_order_update)
                await connection.query(`update coin_orderbook set rest = ${buy_rest} where pk = ${serch_sell_law[0].pk}`)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_sell_law[0].userid}','0','${total_price}','${transaction_id}')`)

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

        res.json({
            "msg": "OK",
            "assets": assets[0],
            "in_out": in_out[0],
            "total": total[0]
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
        data = await connection.query(`select * from coin_orderbook where userid = "${userid}" AND rest = "0" OR state != "0" ORDER BY time DESC`)
    }  //취소
    res.json({
        "data": data[0]
    })
}

module.exports = {
    buy_order,
    sell_order,
    coin_cancle,
    search_assets,
    search_deal,
    contract
} 