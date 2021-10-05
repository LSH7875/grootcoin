const { pool } = require('../../pool')

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
    connection = await pool.getConnection(async conn => conn);
    // 매수주문 coin_orderbook 에 등록
    let add_buy = await connection.query(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values('${userid}','${price}','${qty}','${ordertype}','${rest}','${coin_id}','0')`)
    let buy_pk = add_buy[0].insertId;
    //매수 가격에 맞는게 있는지 검색 (ordertype 이 매도면서 수량이 0이 아니고 가격이 낮은 수 부터 체결하기 위해서 낮은값이 같은게 있를경우 등록 먼저한 순서대로)
    let serch_buy = await connection.query(`select * from coin_orderbook where state = 0 AND coin_id = ${coin_id} AND ordertype = 1 AND rest != 0 AND price <= ${price} ORDER BY price ASC, time ASC`)
    let serch_buy_law = serch_buy[0].filter((law) => { return law })

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
                console.log(transaction_pk[0].insertId);
                await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_pk[0].insertId}')`)
                await connection.query(this_order_update)
                await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[i].pk}`)
                await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[i].userid}','${total_price}','0','${transaction_pk[0].insertId}')`)

                if (use_rest == 0) {
                    break;
                }
            }
        }
        res.json('ok')
    } else if (serch_buy_law.length == 1) {
        //results.length == 1
        //맞는게 1개일 경우
        let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
        let use_rest = check_rest[0][0].rest
        //매수량이 매도보다 많을때    : 매수량이 같거나 매도보다 적을때
        sum_commission = use_rest > serch_buy_law[0].rest ? coin_commission[0][0].commission * serch_buy_law[0].rest : coin_commission[0][0].commission * use_rest
        total_price = use_rest > serch_buy_law[0].rest ? serch_buy_law[i].rest * serch_buy_law[i].price : use_rest * serch_buy_law[i].price
        transaction = use_rest > serch_buy_law[0].rest ? 1 : 0
        signed_amount = use_rest > serch_buy_law[0].rest ? serch_buy_law[0].rest - sum_commission : use_rest - sum_commission
        minus_rest = use_rest > serch_buy_law[0].rest ? use_rest - serch_buy_law[i].rest : serch_buy_law[0].rest - use_rest
        sell_rest = use_rest >= serch_buy_law[i].rest ? 0 : serch_buy_law[i].rest - use_rest
        this_order_update = use_rest > serch_buy_law[0].rest ? `update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}` : `update coin_orderbook set rest = 0 where pk = ${buy_pk}`

        let transaction_pk = await connection.query(`insert into assets (userid,input,output,transaction) values('${userid}','0','${total_price}','${transaction_pk[0].insertId}')`)
        console.log(transaction_pk);
        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
        await connection.query(`update coin_orderbook set rest = ${sell_rest} where pk = ${serch_buy_law[i].pk}`)
        await connection.query(this_order_update)
        await connection.query(`insert into assets (userid,input,output,transaction) values('${serch_buy_law[0].userid}','${total_price}','0','${transaction_pk[0].insertId}')`)
        res.json('거래완료')
    } else {
        // 매수가격과 맞는게 없을경우
        res.json({ 'msg': '거래에 맞는 가격이 없음으로 대기' })
    }
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
        }
        res.json('ok')
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
        res.json({ 'msg': '거래에 맞는 가격이 없음으로 대기' })
    }
}

let coin_cancle = async (req, res) => {
    let connection;
    connection = await pool.getConnection(async conn => conn);
    let { pk } = req.body

    await connection.query(`update coin_orderbook set state = '1' where pk = ${pk}`)

    res.json({ 'msg': '정상 취소 되셨습니다.' })
}

let serch_assets = async (req,res) =>{
let connection ;
connection = await pool.getConnection(async conn => conn)

let {userid} = req.body;
let assets = await connection.query(`select * from assets where userid = ${userid}`)
let in_out = await connection.query(`select sum(input),sum(output) from where userid = ${userid}`)
let total = await connection.query(`select (add.a-add.b) as assets from (select sum(input)as a,sum(output)as b from where userid = ${userid}) as add`)

console.log(assets);
console.log(in_out);
console.log(total);

}




module.exports = {
    buy_order,
    sell_order,
    coin_cancle,
    serch_assets
}