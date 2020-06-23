// 用于创建网站服务器的模块
const http = require('http');

// 处理请求参数模块：将字符串转换成对象形式
const querystring = require('querystring');

// app对象就是网站服务器对象
const app = http.createServer();




// 当客户端有请求来的时候
app.on('request', (req, res) => {
    // post参数是通过事件的方式(data和end)接收的，post参数不是一次性接收完成的。所以，需要声明变量postParams，再通过变量拼接参数即可接收所有参数。
    // data:当请求参数传递时，触发data事件
    // end:当参数传递完成时，触发end事件
    let postParams = '';
    req.on('data', params => {
        postParams += params;
    });

    req.on('end', () => {
        console.log(querystring.parse(postParams));
    });
    res.end('OK');
});

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功!');
