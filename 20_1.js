
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
  console.log('사용자의 요청이 들어왔습니다.');
  fs.readFile('007.jpg',function (err,data) {
    res.writeHead(200,{"Content-Type":"image/jpeg"});
    res.write(data);
    res.end();
  });
});

server.listen(7000,function () {
  console.log("서버를 실행하였습니다.");
});
server.on('connection',function (socket) {
  console.log('사용자 접속 주소',socket.remoteAddress);
  console.log('사용자 접속 포트',socket.remotePort);
});


server.on("close",function () {
  console.log("서버가 종료되었습니다.");
});
