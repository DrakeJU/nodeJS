var fs = require('fs');

fs.writeFile('./output.txt','welcom node js world!',function (err) {
  if(err){
    console.log("file write error");
  }
  console.log("정상적으로 파일을 작성하였습니다.");
});
