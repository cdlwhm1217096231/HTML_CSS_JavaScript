// 静态资源的访问
const http = require("http");
const app = http.createServer();
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

app.on("request", (req, res) => {
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    pathname = pathname == '/' ? '/index.html' : pathname;
    // 将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join(__dirname, 'public' + pathname);
    let type = mime.getType(realPath);
    // 读取文件
    fs.readFile(realPath, 'utf8', (err, result) => {
        // 如果文件读取失败
        if (err != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败');
            return;
        }
        res.writeHead(200, {
            'content-type': type
        })
        res.end(result);
    });
});

app.listen(3000);
console.log("服务器启动成功");
