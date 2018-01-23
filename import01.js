//import01.js
//require(); 모듈을 가져다 쓸때
//exprots는 모듈을 생성할때
exports.getStr = function(inputVal) {
  return inputVal;
}
function getName() {
  return "Hello";
}
module.exports.getName = getName;
module.exports.importModuleString = 'improt01에서 정의된 변수값';
