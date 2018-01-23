
var express = require('express');
var http = require('http');
var static = require('serve-static');//디렉토리 경로를 url맵핑
var path = require('path');

var app = express();


http.createServer(app).listen(7000,function () {
  console.log("7000번 포트에서 서버 실행");
});

app.use('/public',static(path.join(__dirname,'public')));
