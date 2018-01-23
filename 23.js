

var express = require('express');
var http = require('http');
var app = express();

http.createServer(app).listen(7000,function () {
  console.log('7000번 포트에서 서버 실행');
});

app.use(function (req, res, next) {
  console.log('첫번째 모듈에서 실행');
  req.user = "홍길동";
  next();
});

app.use(function (req, res, next) {
  console.log('두번째 모듈에서 실행');
  res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
  res.write("<h1>express 서버 활용한 내용처리 : "+req.user+"</h1>");
  res.end();
});
