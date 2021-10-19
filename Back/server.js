const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routers/index');
const ws = require('./websocket');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')
const { pool } = require('./pool')
const { getransaction } = require('./rpc')

app.use(cors({ origin: true, credentials: true }));

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use('/api', router)


// app.use(expressSession({
//     resave:false,
//     saveUninitialized:false,
//     secret:"asdfasdf",
//     cookie:{
//         httpOnly:true,
//         secure:false,
//     },
//     name:'token'
// }))


require('dotenv');
// const mysql = require('mysql')

// let connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'grootcoin'
// })
// connection.connect();

app.get('/', (req, res) => {
    // res.cookie('userid', 'userid');
    res.send('백 서버')
})

let check_rpc = async () => {
    console.log("checke");
    let connection = await pool.getConnection(async conn => conn);
    let result = await connection.query(`select * from transaction where txid_state = "0"`)
    if (result[0].length > 0) {
        for (let i = 0; i < result[0].length; i++) {
            let transaction = result[0][i]
            if (transaction.txid_state == "0") {
                getransaction(transaction.txid,transaction.id)
            }
        }
    }
}
// check_rpc()
// setInterval(check_rpc,10000)


app.listen(PORT, () => {
    console.log(`server port ${PORT}`)
})


ws.wsinit();
