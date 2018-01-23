var result = 0;
console.time('duration Time');
for(var i = 0; i<10000; i++){
  result =result + i ;
}
console.timeEnd('duration Time');
console.log('결과 합 : ',result);
