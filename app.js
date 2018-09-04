const express = require('express');
const app = express();
// NOTE: なぜlistenではなくhttpを使うのか
// socketには簡易なhttpを使い
// 一般的なHTTPの処理はexpressで行うため
// https://teratail.com/questions/8894
const http = require('http').Server(app);
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('hello world');
});

http.listen(PORT, function() {
  console.log(`PORT: ${PORT}`)
})