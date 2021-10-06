const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });
const { pool } = require('../Back/pool')

async function wsinit(){

    wss.on('connection', async function connection(ws) {
        
        let connection;
        connection = await pool.getConnection(async conn => conn);
        let login_success = await connection.query(`select * from user`)
        
        let content = []
        for(let i=0; i<login_success[0].length; i++)
        {
                content.push(login_success[0][i].userid)
        }
     
        console.log(content[0])
        ws.send(JSON.stringify(content))

        ws.on('message', function incoming(data, isBinary) {

            ws.clients.forEach((e) => {
                e.send('ewrewkljrew')
            }   )            
            // function each(client) {
            //         client.send('ewrewkljrew')
            // if (client !== ws && client.readyState === WebSocket.OPEN) {
            //     client.send(data);
        });
      });
}

function socketSend(data,func){
    const message=func? {func,data} : {data}
    wss.send(message);
}



module.exports={wsinit,socketSend}