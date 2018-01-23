var path = require('path');

var directroyPart =['root','main','sbu'];
var directroyView = directroyPart.join(path.sep);

console.log('디렉토리 결과',directroyView);

var directroyPath = path.join('c:\\','node');
console.log('디렉토리 결과',directroyPath);

var filePath = "c:\\node\\03.js";
var dirName = path.dirname(filePath);
var filename = path.basename(filePath);
var extName = path.extname(filePath);

console.log('디렉토리 명',dirName);
console.log('파일명 명',filename);
console.log('확장자 명',extName);
