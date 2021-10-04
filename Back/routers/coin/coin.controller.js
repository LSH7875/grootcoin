const { pool } = require('../../pool')

// 매수 
let buy_order = async (req, res) => {
    let { userid, price, qty, ordertype, rest, coin_id, cash_id, input, output, reservation } = req.body;

    let connection;
    connection = await pool.getConnection(async conn => conn);
    let output_price = price * rest
    let buy_assets = await connection.query(`insert into assets (userid,input,output,reservation) values('${userid}','${input}','${output_price}','${reservation}')`)
    // assets 에 정상 처리 되었을때
    if (buy_assets[0] !== undefined) {
        // assets 에 pk 값을 가져와서 cash_id
        let new_cashid = buy_assets[0].insertId;
        // 매수주문 coin_orderbook 에 등록
        let add_buy = await connection.query(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,cash_id) values('${userid}','${price}','${qty}','${ordertype}','${rest}','${coin_id}','${new_cashid}')`)
        let buy_pk = add_buy[0].insertId;
        //매수 가격에 맞는게 있는지 검색 (ordertype 이 매도면서 수량이 0이 아니고 가격이 낮은 수 부터 체결하기 위해서 낮은값이 같은게 있를경우 등록 먼저한 순서대로)
        let serch_buy = await connection.query(`select * from coin_orderbook where coin_id = ${coin_id} AND ordertype = 1 AND rest != 0 AND price <= ${price} ORDER BY price ASC, time ASC`)
        let serch_buy_law = serch_buy[0].filter((law) => { return law })

        if (serch_buy[0] !== undefined) {
            // 매수 가격과 맞는게 있을경우
            // console.log("test++++++++++", results.length);
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            let sum_commission;
            let signed_amount;
            if (serch_buy[0].length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_buy_law.length; i++) {
                    //매수의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${buy_pk}`)
                    let use_rest = check_rest[0][0].rest
                    console.log(use_rest);

                    if (use_rest == serch_buy_law[i].rest && use_rest !== 0) {
                        //매수 물량 과 매도 물량이 같을때 (transaction 만들어주고 coin_orderbook 2개 수정 후 매도하는 쪽에 assets 추가)
                        sum_commission = coin_commission[0][0].commission * serch_buy_law[i].rest;
                        signed_amount = use_rest - sum_commission
                        console.log('+++++++++++++1',sum_commission,signed_amount);
                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${buy_pk}`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_buy_law[i].pk}`)
                        await connection.query(`update assets set reservation = 0 where pk = ${buy_assets[0].insertId}`)
                        await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[i].userid}','${serch_buy_law[i].price}','0','0')`)
                        break;
                    } else if (use_rest > serch_buy_law[i].rest && use_rest !== 0) {
                        //매수 물량이 매도 물량보다 많을때 
                        let minus_rest = use_rest - serch_buy_law[i].rest
                        sum_commission = coin_commission[0][0].commission * serch_buy_law[i].rest;
                        signed_amount = serch_buy_law[i].rest - sum_commission
                        console.log('+++++++++++++2',sum_commission,signed_amount);
                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_buy_law[i].pk}`)
                        //await connection.query(`update assets set reservation = 0 where pk = ${buy_assets.insertId}`)
                        await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[i].userid}','${serch_buy_law[i].price}','0','0')`)

                        console.log(`매수 물량이 매도 물량보다 많을때 : ${use_rest} - ${serch_buy_law[i].rest} `, minus_rest);

                    } else if (use_rest < serch_buy_law[i].rest && use_rest !== 0) {
                        //매수 물량이 매도 물량보다 적을때
                        let minus_rest = serch_buy_law[i].rest - use_rest
                        sum_commission = coin_commission[0][0].commission * use_rest;
                        signed_amount = use_rest - sum_commission
                        //console.log(`매수 물량이 매도 물량보다 적을때 :${serch_buy_law[i].rest} - ${use_rest} `, minus_rest);
                        console.log('+++++++++++++2',sum_commission,signed_amount);
                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[i].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${buy_pk}`)
                        await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${serch_buy_law[i].pk}`)
                        await connection.query(`update assets set reservation = 0 where pk = ${buy_assets[0].insertId}`)
                        await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[i].userid}','${serch_buy_law[i].price}','0','1')`)
                    }
                }
                res.send('ok')
            } else if (serch_buy_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                if (rest == serch_buy_law[0].rest && rest !== 0) {
                    //매수 물량 과 매도 물량이 같을때 (transaction 만들어주고 coin_orderbook 2개 수정 후 매도하는 쪽에 assets 추가)
                    sum_commission = coin_commission[0][0].commission * serch_buy_law[0].rest
                    signed_amount = rest - sum_commission
                    console.log('+++++++++++++4',sum_commission,signed_amount);
                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${buy_pk}`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_buy_law[0].pk}`)
                    await connection.query(`update assets set reservation = 0 where pk = ${buy_assets[0].insertId}`)
                    await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[0].userid}','${serch_buy_law[0].price}','0','0')`)
                    console.log('성공');

                } else if (rest > serch_buy_law[0].rest && rest !== 0) {
                    //매수 물량이 매도 물량보다 많을때 
                    let minus_rest = rest - serch_buy_law[0].rest

                    sum_commission = coin_commission[0][0].commission * serch_buy_law[0].rest
                    signed_amount = serch_buy_law[0].rest - sum_commission
                    console.log('+++++++++++++5',sum_commission,signed_amount);
                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}',' ${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${buy_pk}`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_buy_law[0].pk}`)
                    //await connection.query(`update assets set reservation = 0 where pk = ${buy_assets.insertId}`)
                    await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[0].userid}','${serch_buy_law[0].price}','0','0')`)

                    console.log(`매수 물량이 매도 물량보다 많을때 : ${rest} - ${serch_buy_law[0].rest} `, minus_rest);

                } else if (rest < serch_buy_law[0].rest && rest !== 0) {
                    //매수 물량이 매도 물량보다 적을때
                    let minus_rest = serch_buy_law[0].rest - rest
                    sum_commission = coin_commission[0][0].commission * rest
                    signed_amount = rest - sum_commission
                    console.log('+++++++++++++6',sum_commission,signed_amount);
                    console.log(`매수 물량이 매도 물량보다 적을때 :${serch_buy_law[0].rest} - ${rest} `, minus_rest);

                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${buy_pk}','${signed_amount}','${sum_commission}','${serch_buy_law[0].pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_buy_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${buy_pk}`)
                    await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${serch_buy_law[0].pk}`)
                    await connection.query(`update assets set reservation = 0 where pk = ${buy_assets[0].insertId}`)
                    await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_buy_law[0].userid}','${serch_buy_law[0].price}','0','1')`)

                }
                res.send('거래완료')
            } else {
                // 매수가격과 맞는게 없을경우
                res.send('맞는 가격이 없으므로 대기')
            }
        }
    } else {
        //assets 에 error 났을때
        res.json({ 'msg': '거래 주문이 처리되지 않았습니다', 'boolean': 'false' })
    }
}



let sell_order = async (req, res) => {
    let { userid, price, qty, ordertype, rest, coin_id, cash_id, input, output, reservation } = req.body;

    let connection;
    connection = await pool.getConnection(async conn => conn);

    let sell_assets = await connection.query(`insert into assets (userid,input,output,reservation) values('${userid}','${input}','${output}','${reservation}')`)
    // assets 에 정상 처리 되었을때
    if (sell_assets[0] !== undefined) {
        // assets 에 pk 값을 가져와서 cash_id
        let new_cashid = sell_assets[0].insertId;
        // 매도주문 coin_orderbook 에 등록
        let add_sell = await connection.query(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,cash_id) values('${userid}','${price}','${qty}','${ordertype}','${rest}','${coin_id}','${new_cashid}')`)
        let sell_pk = add_sell[0].insertId;
        //매도 가격에 맞는게 있는지 검색 (ordertype 이 매도면서 수량이 0이 아니고 가격이 낮은 수 부터 체결하기 위해서 높은값이 같은게 있를경우 등록 먼저한 순서대로)
        let serch_sell = await connection.query(`select * from coin_orderbook where coin_id = ${coin_id} AND ordertype = 0 AND rest != 0 AND price >= ${price} ORDER BY price DESC, time ASC`)
        let serch_sell_law = serch_sell[0].filter((law) => { return law })
        if (serch_sell[0] !== undefined) {
            // 매도 가격과 맞는게 있을경우
            let coin_commission = await connection.query(`select commission from coin where coin_id = ${coin_id}`)
            let sum_commission;
            let signed_amount;
            if (serch_sell[0].length > 1) {
                // 맞는게 여러개일경우
                for (let i = 0; i < serch_sell_law.length; i++) {
                    //매수의 qry 0 될때까지 반복
                    let check_rest = await connection.query(`select rest from coin_orderbook where pk = ${sell_pk}`)
                    let use_rest = check_rest[0][0].rest
                    if (use_rest == serch_sell_law[i].rest && use_rest !== 0) {
                        //매도 물량 과 매수 물량이 같을때 (transaction 만들어주고 coin_orderbook 2개 수정 후 매도하는 쪽에 assets 추가)
                        sum_commission = coin_commission[0][0].commission * serch_sell_law[i].rest;
                        signed_amount = use_rest - sum_commission
                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[i].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${sell_pk}`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_sell_law[i].pk}`)
                        await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                        //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','0')`)
                        break;
                    } else if (use_rest > serch_sell_law[i].rest && use_rest !== 0) {
                        //매도 물량이 매수 물량보다 많을때 
                        let minus_rest = use_rest - serch_sell_law[i].rest
                        sum_commission = coin_commission[0][0].commission * serch_sell_law[i].rest;
                        signed_amount = serch_sell_law[i].rest - sum_commission
                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[i].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_sell_law[i].pk}`)
                        await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                        //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','0')`)

                        console.log(`매수 물량이 매도 물량보다 많을때 : ${use_rest} - ${serch_sell_law[i].rest} `, minus_rest);

                    } else if (use_rest < serch_sell_law[i].rest && use_rest !== 0) {
                        //매도 물량이 매수 물량보다 적을때
                        let minus_rest = serch_sell_law[i].rest - use_rest
                        sum_commission = coin_commission[0][0].commission * use_rest;
                        signed_amount = use_rest - sum_commission
                        console.log(`매도 물량이 매수 물량보다 적을때 :${serch_sell_law[i].rest} - ${use_rest} `, minus_rest);

                        await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[i].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[i].price}')`)
                        await connection.query(`update coin_orderbook set rest = 0 where pk = ${sell_pk}`)
                        await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${serch_sell_law[i].pk}`)
                        await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                        //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','1')`)
                    }
                }
                res.send('ok')
            } else if (serch_sell_law.length == 1) {
                //results.length == 1
                //맞는게 1개일 경우
                if (rest == serch_sell_law[0].rest && rest !== 0) {
                    //매도 물량 과 매수 물량이 같을때 (transaction 만들어주고 coin_orderbook 2개 수정 후 매도하는 쪽에 assets 추가)
                    sum_commission = coin_commission[0][0].commission * serch_sell_law[0].rest;
                    signed_amount = serch_sell_law[0].rest - sum_commission
                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[0].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${sell_pk}`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_sell_law[0].pk}`)
                    await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                    //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','0')`)

                } else if (rest > serch_sell_law[0].rest && rest !== 0) {
                    //매도 물량이 매수 물량보다 많을때 
                    let minus_rest = rest - serch_sell_law[i].rest
                    sum_commission = coin_commission[0][0].commission * serch_sell_law[0].rest;
                    signed_amount = serch_sell_law[0].rest - sum_commission
                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[0].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${sell_pk}`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${serch_sell_law[0].pk}`)
                    await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                    //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','0')`)

                    console.log(`매수 물량이 매도 물량보다 많을때 : ${rest} - ${serch_sell_law[i].rest} `, minus_rest);

                } else if (rest < serch_sell_law[0].rest && rest !== 0) {
                    //매도 물량이 매수 물량보다 적을때
                    let minus_rest = serch_sell_law[0].rest - rest
                    sum_commission = coin_commission[0][0].commission * rest;
                    signed_amount = rest - sum_commission


                    await connection.query(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values('${serch_sell_law[0].pk}','${signed_amount}','${sum_commission}','${sell_pk}','${signed_amount}','${sum_commission}','${coin_id}','${serch_sell_law[0].price}')`)
                    await connection.query(`update coin_orderbook set rest = 0 where pk = ${sell_pk}`)
                    await connection.query(`update coin_orderbook set rest = ${minus_rest} where pk = ${serch_sell_law[0].pk}`)
                    await connection.query(`update assets set reservation = 0 where pk = ${sell_assets[0].insertId}`)
                    //await connection.query(`insert into assets (userid,input,output,reservation) values('${serch_sell_law[i].userid}','${serch_sell_law[i].price}','0','1')`)
                }
                res.send('거래완료')
            } else {
                // 매수가격과 맞는게 없을경우
                res.send('맞는 가격이 없으므로 대기')
            }
        }
    } else {
        //assets 에 error 났을때
        res.json({ 'msg': '거래 주문이 처리되지 않았습니다', 'boolean': 'false' })
    }

}

let start_price = async (req, res) => {
    let today = new Date();
    const serch = await pool.getConnection((err, conection) => {
        connection.query(`select price from transaction where time,coin_id = '${today}`, (error, result, fields) => {
            connection.release();
            if (errpr) throw error;

            if (results == undefined) {
                res.json({ 'msg': '시가가 조회되지 않습니다' })
            } else {
                res.json({ 'msg': '시가가 정상 조회 되었습니다' })
            }
        })
    })
}

let transaction = (req, res) => {
    pool.getConnection((err, conection) => {
        connection.query(`select price from transaction where time,coin_id = '${today}`, (error, result, fields) => {
            connection.release();
            if (errpr) throw error;

            if (results == undefined) {
                res.json({ 'msg': '시가가 조회되지 않습니다' })
            } else {
                res.json({ 'msg': '시가가 정상 조회 되었습니다' })
            }
        })
    })
}



module.exports = {
    buy_order,
    sell_order,
    start_price,
    transaction
}