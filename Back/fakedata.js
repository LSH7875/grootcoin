function jin (){
    for( i=0; i<=30; i++ ){
        let price = 100+ i
        let id = 0+i
        let id2 = 1+i
        let ma = 100*i
        
       //console.log(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("da","${price}","${price}","0","${price}","1","0");`); 
       //console.log(`insert into coin_orderbook (userid,price,qty,ordertype,rest,coin_id,state) values("do","${price}","${price}","0","${price}","1","0");`); 
       console.log(`insert into transaction (a_orderid,a_amount,a_commission,b_orderid,b_amount,b_commission,coin_id,payment) values("${id}","${ma}","${id}","${id2}","${ma}","${id}","1","${price}");`);
    }
}

jin()