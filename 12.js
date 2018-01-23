 var fs = require('fs');
 fs.rename('output_copy.txt','output.txt',function (err) {
   if(err){
     throw err;
   }
   console.log('파일 rename 실행 완료');
 });
