const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routers/index');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(cors());
app.use('/api', router)



app.listen(port,()=>{
    console.log(`server port ${PORT}`)
})
