var fs = require('fs');

var inStreamFile = fs.createReadStream('output.txt',{flags:'r'});
var outStreamFile = fs.createWriteStream('output2.txt',{flags:'w'});

//data : 읽은 파일 스트림 정보 리턴
inStreamFile.on('data',function (data) {
  console.log('스트림으로 읽은 데이타',data);
  outStreamFile.write(data);
});
//error: 에러시
//end:파일 스트림 읽기 완료시
inStreamFile.on('end',function () {
  console.log('파일 읽기 완료');
  outStreamFile.end(function () {
    console.log('파일 쓰기 완료');
  })
});
