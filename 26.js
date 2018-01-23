


var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

http.createServer(app).listen(7000,function () {
  console.log('7000포트에서 서버 실행');
});
app.use(bodyParser.urlencoded({extended:false}));
//false:String,array,  true:모든타입가능

var router = express.Router();//경로관련
router.route('/login').post(function (req,res) {
    console.log("/login경로 진입");
    var username = req.body.username;
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    res.write("<h1>전달받은 username : "+username+"</h1>");
    res.end;
});
