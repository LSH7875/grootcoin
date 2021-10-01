const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routers/index');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(cors());
app.use('/api', router)

require('dotenv');
const mysql = require('mysql')



// let connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'0000',
//     database:'grootcoin'
// })
// connection.connect();

app.listen(PORT,()=>{
    console.log(`server port ${PORT}`)
})
