
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {
  console.log('사용자의 요청이 들어왔습니다.');

  var inputStream = fs.createReadStream('001.gif',{flags:'r',autoClose: true});
  var fileTotalSize;//파일크기
  fs.stat('001.gif',function(err,stats){
    fileTotalSize = stats.size;
  });

  res.writeHead(200,{"Content-Type":"image/gif"});
  //readble:파일이 읽기 가능한 상태
  inputStream.on('readable',function () {
    var radData;
    var readFileSize=0;//읽힌 데이타 사이즈

    while((readData=inputStream.read()) != null){//데이터 존재시
      readFileSize = readFileSize + readData.length//현재까지 읽힌 데이타 사이즈
      res.write(readData,'utf8',function (err) {
        if(readFileSize >= fileTotalSize){//파일이 전체 읽혔을때 사용자에게 전달 종료

          res.end();
        }//if
      });//res,write
    };//while
  })

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
