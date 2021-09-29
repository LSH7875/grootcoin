const express = require('express');
const app = express();
require('dotenv');
const PORT = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server port ${PORT}`)
})
