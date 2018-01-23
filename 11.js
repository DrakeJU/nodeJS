var fs = require('fs');

            //w:덮어쓰기,a:추가쓰기,r:읽기
fs.open('./output.txt','a',function (err,fd) {//file Descriptor: 시스템 파일 또는 디바이스를 구분하는 단위
//fs.open('./output.txt','w',function (err,fd) {//file Descriptor: 시스템 파일 또는 디바이스를 구분하는 단위
  if(err){
    throw err;
  }
  var buf = new Buffer('Hello Node JS wowowowowoworld');
  console.log(buf.toString());
  //파일정보(fd),파일에 쓰여질 내용(buf),파일에 쓰여질 buf시작위치(0),파일에 쓰여질 buf끝,파일에쓰여질위치
  fs.write(fd,buf,0,buf.length,0,function (err,written,buffer) {
    console.log("written : ",written);
  });
  fs.close(fd,function () {
    console.log('output.txt 파일에 내용 작성 완료');
  });
});
