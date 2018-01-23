var http = require('http');

var server = http.createServer();
var port = 7000;

server.listen(port,function () {
  console.log("서버가 7000포트에서 사용자를 기다리고 있습니다.");
});
server.on('connection',function (socket) {
  console.log('사용자의 접속 주소 : ',socket.remoteAddress);
  console.log('사용자의 접속 포트 : ',socket.remotePort);
});

server.on('request',function (req,res) {
  console.log('사용자의 요청이 도착하였습니다.');
});
server.on('close',function () {
  console.log('서버가 종료되었씁니다.');
})
