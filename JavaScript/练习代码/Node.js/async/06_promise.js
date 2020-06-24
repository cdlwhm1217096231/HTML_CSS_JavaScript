const fs = require('fs');

// resolve参数本质上就是一个函数：如果当前异步API调用成功了，则调用resolve函数返回异步API的结果
// reject参数本质上就是一个函数：如果当前异步API调用失败了，则调用reject函数返回异步API的结果
let promise = new Promise((resolve, reject) => {
    fs.readFile('./1.txt', 'utf8', (err, result) => {
        if (err != null) {
            reject(err);
        }else{
            resolve(result);
        }
    });
});

promise.then((result) => {
    console.log(result);
})
// 链式编程
    .catch((err) => {
    console.log(err);
})