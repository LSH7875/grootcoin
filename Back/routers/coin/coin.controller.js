const {pool} = require('../../pool')

let buy_order = (req,res)=>{
    let {userid,price,qty,ordertype,rest} = req.body;
    pool.getConnection((err,connection)=>{
        if(err) throw err;
     connection.query(`insert into cash_transaction (userid,price,qty,ordertype,rest,regdate) values('${userid}','${price}','${qty}','${ordertype}','${rest}',NOW())`,
         (error,results,fields)=>{
            connection.release(); //반환하는 부분
            if(error) throw error;

            if(results == undefined){
                res.json({'msg':'거래 주문이 처리되지 않았습니다', 'boolean':'false'})
            }else{
                res.json({'msg':'거래 주문이 정상처리 되었습니다.', 'boolean':'true'})
            }
            
        })

    });   

}
let sell_order = (req,res)=>{
    let {userid,price,qty,ordertype,rest} = req.body;
    pool.getConnection((err,connection)=>{
        if(err) throw err;
        connection.query(`insert into cash_transaction (userid,price,qty,ordertype,rest,regdate) values('${userid}','${price}','${qty}','${ordertype}','${rest}',NOW())`, (error,results,fields)=>{
            connection.release();
            if(error) throw error;

            if(results == undefined){
                res.json({'msg':'거래 주문이 처리되지 않았습니다', 'boolean':'false'})
            }else{
                res.json({'msg':'거래 주문이 정상처리 되었습니다.', 'boolean':'true'})
            }
            
        })

    });   

}

let start_price = (req,res) =>{
    let today = new Date();
    pool.getConnection((err,conection)=>{
        connection.query(`select price from transaction where regdate = '${today}`, (error,result,fields)=>{
            connection.release();
            if(errpr) throw error;

            if(results == undefined){
                res.json({'msg':'시가가 조회되지 않습니다'})
            }else{
                res.json({'msg':'시가가 정상 조회 되었습니다'})
            }
        })
    })
}

let transaction =(req,res)=>{
    pool.getConnection((err,conection)=>{
        connection.query(`select price from transaction where regdate = '${today}`, (error,result,fields)=>{
            connection.release();
            if(errpr) throw error;

            if(results == undefined){
                res.json({'msg':'시가가 조회되지 않습니다'})
            }else{
                res.json({'msg':'시가가 정상 조회 되었습니다'})
            }
        })
    })
}



module.exports={
    buy_order,
    sell_order,
    start_price,
    transaction
}