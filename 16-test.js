var fs = require('fs');

var inStreamFile = fs.createReadStream('A.txt', {
  flags: 'r'
});
var outStreamFile = fs.createWriteStream('B.txt', {
  flags: 'w'
});

fs.exists('./B.txt') {

  console.log('B.txt파일이 존재 합니다.');
};
fs.appendFile('B.txt','A.txt',function (err) {
  console.log('복사되나요?');
});

var readBtxt=fs.readFileSync('./B.txt');
console.log(readBtxt);
