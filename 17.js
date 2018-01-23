

var fs = require('fs');

fs.mkdir('./newDirectory',777,function(err){
  if(err){throw err}
  console.log('새로운디렉토리가 생성되었습니다.')
})
