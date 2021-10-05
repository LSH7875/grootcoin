const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

function wsinit(){
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(data, isBinary) {
            const {type} = data;
            switch (type){
                case 'Server':{
                    wss.clients.forEach(client=>{
                        if(client.readyState===ws.OPEN && client._socket._peername.port ==3000){
                            client.send(data)
                        }
                    })
                }
                case 'Client':{

                }
            }
            wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
            });
        });
      });
}

function socketSend(data,func){
    const message=func? {func,data} : {data}
    wss.send(message);
}

module.exports={wsinit,socketSend}