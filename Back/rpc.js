const {pool} = require('./pool')

let getransaction = async (txid,id) => {
    let headers = { "Content-type": "hson/application" };
    let body = `{"method":"gettransaction","params":["${txid}"]}`;
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
            let new_state = txid.result.blockindex;
            if(new_state == undefined){
                console.log("처리 아직 안됨");
            }else if(new_state > 0){
                await connection.query(`update transaction set txid_state = "1" where id = "${id}"`)
            }

            console.log("TXID-----성공");
        } else {
            console.log(err);

        }
    }
    return request(options, callback)
}

module.exports = {
    getransaction
}