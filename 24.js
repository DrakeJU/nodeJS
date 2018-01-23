

var express = require('express');
var http = require('http');

var app = express();

http.createServer(app).listen(7000,function () {
  console.log('7000포트에서 서버 실행');
});

app.use(function (req,res,next) {
  console.log('첫뻔째 모듈 실행');
  res.redirect('http://www.daum.net');
});
