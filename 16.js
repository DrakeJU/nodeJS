var fs = require('fs');

fs.exists('output.txt',function (exists) {
  console.log(exists?"파일이 존재 합니다.":"파일이 존재하지 않습니다.");
});
