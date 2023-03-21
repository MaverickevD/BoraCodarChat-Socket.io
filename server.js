const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);
const cors = require('cors')


app.use(express.static('public'))
app.use(cors)
app.get('/')


let oldMessages = []

io.on('connection', socket =>{
  socket.on('message', data =>{
    oldMessages.push(data)
    io.emit('recivedMessage', data)
    console.log(data)


  })
  socket.emit('oldMessage', oldMessages)

})






server.listen(3000, () => {
  console.log('listening on *:3000');
});
