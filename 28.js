//npm install express-session 설치해야함
var express = require('express');
var http = require('http');
var session = require('express-session');

var app = express();

http.createServer(app).listen(7000,function () {
  console.log('서버 실행');
});

app.use(session({
  secret:'741852963qwe'//아무 숫자 글자 다됨
  ,resave:false
  ,saveUninitialized:true
}));


app.get('/',function (req, res) {
  sess = req.session;
});

app.get('/set',function (req,res) {
  sess = req.session;
  sess.username ="Drake";
  res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
  console.log('세션값 세팅완료');
  res.redirect('/view');
});

app.get('/view',function (req,res) {
  sess =req.session;
  res.write("<h1>서버에서 가져온 세션 username : "+sess.username+"</h1>");
  res.end();
});

app.get('/del',function (req,res) {
  req.session.destroy(function (err) {

  });
  res.write("세션이 종료되었습니다.");
  res.end();
})
