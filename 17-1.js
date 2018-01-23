

var fs = require('fs');

fs.rmdir('./newDirectory',777,function(err){
  if(err){throw err}
  console.log('새로운디렉토리가 삭제 되었습니다.')
})
