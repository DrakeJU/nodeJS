var fs = require('fs');
fs.unlink('output.txt',function (err) {
  if(err){throw err}
  console.log("파일이 정상적으로 삭제되었습니다.");
});
