

//npm install express 설치해야 express를 사용 할수있음
var express = require('express');
var http = require('http');

var app = express();

http.createServer(app).listen(7000,function () {
  console.log("7000포트에서 서버 실행");
});

app.use(function (req, res, next) {
  console.log("서비스 내용 처리");
  res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
  res.end("<h1>Express 서버를 활용하여 내용 처리</h1>")
});
//삭제하고싶으면
//npm uninstall express
