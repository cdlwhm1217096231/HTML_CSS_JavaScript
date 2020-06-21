// 导入系统模块fs
const fs = require('fs');

// 2.通过fs模块内部的readFile读取文件内容
fs.readFile('./01_helloworld.js', 'utf-8', (err, doc) => {
    // 如果文件读取错误，err是一个对象，它包含错误信息

    // 如果文件读取正确，err是null
    // doc是文件读取的结果
    console.log(err);
    console.log(doc);
});
