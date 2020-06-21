const path = require('path');
const fs = require('fs');

console.log(__dirname);  // 获取当前文件所在的绝对路径即E:\前端开发\JavaScript\练习代码\Node.js
console.log(path.join(__dirname, '01_helloworld.js'));


fs.readFile(path.join(__dirname, '01_helloworld.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
});