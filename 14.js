var fs = require('fs');

fs.appendFile('output.txt','append content',function (err) {
  if(err){throw err}
  console.log('정상적으로 파일에 추가되었습니다.');
});
