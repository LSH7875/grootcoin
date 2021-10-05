const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routers/index');
const ws = require('./websocket');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session')

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
const mysql = require('mysql')

// let connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'0000',
//     database:'grootcoin'
// })
// connection.connect();

app.get('/',(req,res)=>{
    // res.cookie('userid', 'userid');
    res.send('백 서버')
})

app.listen(PORT,()=>{
    console.log(`server port ${PORT}`)
})

ws.wsinit();

