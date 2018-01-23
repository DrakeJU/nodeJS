process.on('exit',function(){
  console.log("exit 실행");
});

setTimeout(function(){
  console.log("3초후에 프로그램 종료");
  process.exit();
},3000);
