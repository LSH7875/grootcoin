import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

function wsinit(){
    wss.on('connection', function connection(ws) {
        ws.on('message', function incoming(data, isBinary) {
          wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
              client.send(data, { binary: isBinary });
            }
          });
        });
      });
}

function socketSend(data,func){
    const message=func? {data,func} : {data}
    wss.send(message);
}

module.exports={wsinit,socketSend}