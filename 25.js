
//http://localhost:7000/?username=honggildong
//get방식으로 주소뒤에?username=honggildong 유저네임으로 홍길동을 전달하면
//파라미터가 전달된다.
var express = require('express');
var http = require('http');

var app = express();

http.createServer(app).listen(7000,function () {
  console.log('7000포트에서 서버 실행');
});

app.use(function (req,res,next) {
  var username =req.query.username;
  res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
  res.write("<h1>전달된 username파라미터 : "+username+"</h1>")
  res.end();
});
