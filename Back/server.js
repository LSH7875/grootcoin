const express = require('express');
const app = express();
require('dotenv');
const PORT = process.env.PORT || 3000;
const mysql = require('mysql')


let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'grootcoin'
})
connection.connect();

const pool = mysql.createPool ({
    host:'localhost',
    user:'root',
    password:'0000',
    database:'grootcoin',
    connectionLimit:100
})

app.get('/',(req,res)=>{
    connection.query('create table success ( ID int not null)',(error,result)=>{
        if(error){
            console.log(error);
        }else{
            console.log(result);
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server port ${PORT}`)
})
