process.on('tackle',function() {
  console.log('tackle 이벤트 발생');
});
setTimeout(function(){
  console.log('2초후에 태클발생');
  process.emit('tackle');
},2000);
