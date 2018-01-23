var nconf =require('nconf');
nconf.env();

console.log('운영체제 환경변수 값', nconf.get('OS'));

var os = require('os');
console.log('호스트명',os.hostname);
console.log('컴퓨터 전체 메모리',os.totalmem());
console.log('컴퓨터 사용가능 메모리',os.freemem());
console.log('컴퓨터 cpu정보',os.cpus());
