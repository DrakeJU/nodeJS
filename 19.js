
var http = require('http');

var server = http.createServer();

server.listen(7000,function () {
  console.log("서버를 실행하였습니다.");
});
server.on('connection',function (socket) {
  console.log('사용자 접속 주소',socket.remoteAddress);
  console.log('사용자 접속 포트',socket.remotePort);
});

server.on('request',function (req,res) {
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

  res.write("<html>");
  res.write(" <body>");
  res.write("   노드 서버에서 내용을 보냅니다.");
  res.write(" </body>");
  res.write("</html>");
  res.end();

});

server.on("close",function () {
  console.log("서버가 종료되었습니다.");
});
