// 1.引入系统模块http
// 2.创建网站服务器
// 3.为网站服务器对象添加请求事件
// 4.实现路由功能
    // (1).获取客户端的请求方式
    // (2).获取客户端的请求地址
const http = require('http');
const app = http.createServer();
const url = require('url');


app.on('request', (req, res) => {
    // 获取请求方式
    const method = req.method.toLowerCase();
    // 获取请求地址
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    })

    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到首页');
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页');
        } else {
            res.end('您访问的页面不存在');
        }
    } else if (method == 'post') {
        
    }
});

app.listen(3000);
console.log('服务器启动成功');
