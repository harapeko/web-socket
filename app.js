const express = require('express');
const app = express();
// NOTE: なぜlistenではなくhttpを使うのか
// socketには簡易なhttpを使い
// 一般的なHTTPの処理はexpressで行うため
// https://teratail.com/questions/8894
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket) {
  console.log('connected');

  // NOTE: onはイベントの検知(データ受信)
  socket.on('disconnect', function() {
    console.log('user disconnected')
  })
  .on('chat message', function(message) {
    console.log(`message: ${message}`)
  });
});

http.listen(PORT, function() {
  console.log(`listeing on *:${PORT}`);
})
