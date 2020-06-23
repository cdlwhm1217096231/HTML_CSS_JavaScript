### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.服务器端基本概念

##### 1.1 网站的组成
- 网站应用程序主要分为两大部分：客户端和服务器端。
- **客户端**：在浏览器中运行的部分，就是用户看到并与之进行交互的界面程序。使用HTML、CSS、JavaScript构建。
- **服务器端**：在服务器中运行的部分，负责存储数据和处理应用逻辑。
![请求与响应.png](https://upload-images.jianshu.io/upload_images/13407176-ba6577a9673dbc01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 1.2 Node网站服务器
- 能够提供网站访问服务的机器就是网站服务器，**它能够接收客户端的请求，能够对请求作出对应的响应**。
![Node网站服务器.png](https://upload-images.jianshu.io/upload_images/13407176-2e26fc57ecf84ea7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 1.3 IP地址
- 互联网中设备的唯一标识，IP代表的是互联网协议地址。

##### 1.4 域名
- 由于IP地址难以记忆，所以产生了域名的概念。**所谓域名就是平时上网时所使用的网址**。可以通过这个网站https://www.ip138.com/查看域名所对应的IP地址。例如，www.baidu.com域名所对应的IP地址为36.152.44.96。
- 虽然在地址栏中输入的是网址，但是最终还是会将域名转换为IP才能访问到指定的网站服务器。

##### 1.5 端口
- **端口是计算机与外界通信交流的出口，用来区分服务器电脑中提供的不同服务**(例如网站服务、数据库服务、邮件服务、文件上传与下载服务等)。
![端口.png](https://upload-images.jianshu.io/upload_images/13407176-881e93cc9574b6d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 1.6 URL
- 同一资源定位符(URL)，是专为标识Internet网上资源位置而设的一种编制方式，**我们平时所说的网页地址指的即是URL**。
- **URL的组成**：传输协议://服务器IP或域名:端口/**资源所在的位置标识**。例如，https://list.jd.com/list.html?cat=9987,653,655
    - http:超文本传输协议，提供了一种发布和接收HTML页面的方法。

##### 1.7 开发过程中客户端和服务端说明
- 在开发阶段：客户端和服务端使用同一台电脑，即开发人员自己的电脑。
![开发过程中客户端和服务端说明.png](https://upload-images.jianshu.io/upload_images/13407176-7a996de69254203a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.创建web服务器

##### 2.1 创建web服务器
- 创建web服务器，如下所示：
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // app对象就是网站服务器对象
    const app = http.createServer();

    // 当客户端有请求来的时候
    app.on('request', (req, res) => {
        res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```

#### 3.Http协议

##### 3.1 Http协议的概念
- **超文本传输协议**(Http)规定了如何从网站服务器传输超文本到本地浏览器，它基于客户端/服务器架构工作，是客户端(用户)和服务器端(网站)请求和应答的标准。
![超文本传输协议.png](https://upload-images.jianshu.io/upload_images/13407176-1420ff00c7714334.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3.2 报文
- 在Http请求和响应的过程中，传递的数据块就叫报文。主要包括要传送的数据和一些附加信息，并且要遵守规定好的格式。
![报文.png](https://upload-images.jianshu.io/upload_images/13407176-a5374f5187a7dfbd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3.3 请求报文
- **(1).请求方式**：
    - GET：请求数据
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // app对象就是网站服务器对象
    const app = http.createServer();

    // 当客户端有请求来的时候
    app.on('request', (req, res) => {
        // 获取请求方式
        console.log(req.method);
        res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```
    - POST: 发送数据
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- method: 指定当前表单提交的方式 -->
        <!-- action: 指定当前表单提交的地址 -->
        <form method="POST" action="http://localhost:3000">
            <input type="submit" name="" id="">
        </form>
    </body>
    </html>
    ```
- **(2).请求地址RequestURL**：req.headers(获取请求报文)、req.url(获取请求地址)、req.method(获取请求方法)
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // app对象就是网站服务器对象
    const app = http.createServer();

    // 当客户端有请求来的时候
    app.on('request', (req, res) => {
        // 获取请求地址 req.url
        // console.log(req.url);
        if (req.url == '/index' || req.url == '/') {
            res.end('welcome to homepage');
        } else if (req.url == '/list') {
            res.end('welcome to listpage');
        } else {
            res.end('Not Found');
        }

        // 获取请求报文信息 req.headers
        console.log(req.headers['accept']);
        



        // 获取请求方式 req.method
        // console.log(req.method);

        if (req.method == 'POST') {
            res.end('post');
        } else if (req.method == 'GET') {
            res.end('get');
        }
        // res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```

##### 3.4 响应报文
- **(1).Http响应状态码** 
    - 200：请求成功
    - 404：请求的资源没有被找到
    - 500: 服务器端错误
    - 400: 客户端请求有语法错误
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // app对象就是网站服务器对象
    const app = http.createServer();




    // 当客户端有请求来的时候
    app.on('request', (req, res) => {

        res.writeHead(500);

        // 获取请求地址 req.url
        // console.log(req.url);
        if (req.url == '/index' || req.url == '/') {
            res.end('welcome to homepage');
        } else if (req.url == '/list') {
            res.end('welcome to listpage');
        } else {
            res.end('Not Found');
        }

        // 获取请求报文信息 req.headers
        console.log(req.headers['accept']);
        



        // 获取请求方式 req.method
        // console.log(req.method);

        if (req.method == 'POST') {
            res.end('post');
        } else if (req.method == 'GET') {
            res.end('get');
        }
        // res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```
- **(2).内容类型content-type**
    - text/plain(默认)
    - text/html
    - text/css
    - application/javascript
    - image/jpeg
    - application/json
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // app对象就是网站服务器对象
    const app = http.createServer();


    // 当客户端有请求来的时候
    app.on('request', (req, res) => {

        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        });

        // 获取请求地址 req.url
        // console.log(req.url);
        if (req.url == '/index' || req.url == '/') {
            res.end('<h2>欢迎来到首页</h2>');
        } else if (req.url == '/list') {
            res.end('welcome to listpage');
        } else {
            res.end('Not Found');
        }

        // 获取请求报文信息 req.headers
        console.log(req.headers['accept']);
        

        // 获取请求方式 req.method
        // console.log(req.method);

        if (req.method == 'POST') {
            res.end('post');
        } else if (req.method == 'GET') {
            res.end('get');
        }
        // res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```

#### 4.Http请求与响应处理

##### 4.1 请求参数
- 客户端向服务端发送请求时，有时需要携带一些客户信息，客户信息需要通过请求参数的形式传递到服务器端，比如登录操作。
![请求参数.png](https://upload-images.jianshu.io/upload_images/13407176-f85ae8545bee6f01.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 4.2 GET请求参数
- **参数被放置在浏览器地址栏中**，如：http://localhost:3000/**?name=CurryCoder&age=18**
    ```javascript
    // 用于创建网站服务器的模块
    const http = require('http');

    // 内置url模块：用于处理url地址
    const url = require('url');

    // app对象就是网站服务器对象
    const app = http.createServer();

    // 当客户端有请求来的时候
    app.on('request', (req, res) => {
        // 响应请求
        res.writeHead(200, {
            'content-type': 'text/html;charset=utf8'
        });

        // 获取请求地址 req.url
        console.log(req.url);  // /index?name=CurryCoder&age=18
        // req.url要解析的url地址，返回的是一个字符串形式的查询参数query; 再利用true将查询参数query解析成对象形式
        let {query, pathname} = url.parse(req.url, true);  // 对象结构
        console.log(query.name); 
        console.log(query.age); 

        if (pathname == '/index' || pathname == '/') {
            res.end('<h2>欢迎来到首页</h2>');
        } else if (pathname == '/list') {
            res.end('welcome to listpage');
        } else {
            res.end('Not Found');
        }

        // 获取请求报文信息 req.headers
        // console.log(req.headers['accept']);
        

        // 获取请求方式 req.method
        // console.log(req.method);

        if (req.method == 'POST') {
            res.end('post');
        } else if (req.method == 'GET') {
            res.end('get');
        }
        // res.end('<h2>hello user</h2>');
    });

    // 监听端口
    app.listen(3000);
    console.log('网站服务器启动成功!');
    ```

##### 4.3 POST请求参数
- 参数被放置在请求体(**请求报文**)中进行传输。
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- method: 指定当前表单提交的方式 -->
        <!-- action: 指定当前表单提交的地址 -->
        <form method="POST" action="http://localhost:3000">
            <input type="text" name="username">
            <input type="password" name="password">
            <input type="submit" name="" id="">
        </form>
    </body>
    </html>
    ```
- 获取POST参数需要使用data事件和end事件。
- 使用querystring系统模块将参数转换为对象形式。
    ```javascript
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
    ```

##### 4.4 路由
- **路由是指客户端请求地址与服务端程序代码的对应关系**。简单的说，就是请求什么就响应什么。如：http://localhost:3000/index或http://localhost:3000/login
    ```javascript
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
    ```
![路由.png](https://upload-images.jianshu.io/upload_images/13407176-fb9da31438a795e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 4.5 静态资源
- **服务器端不需要处理，可以直接响应给客户端的资源就是静态资源**。HTML、CSS、JavaScript、image文件就是静态资源。例如，不论谁访问https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png，均得到的都是下图。
![静态资源.png](https://upload-images.jianshu.io/upload_images/13407176-312590ca3e44f013.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 静态资源访问
    ```javascript
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
    ```

##### 4.6 动态资源
- **相同的请求地址，不同的响应资源。这种资源就是动态资源**。例如:https://blog.csdn.net/cdlwhm1217096231/article/details/106380489和https://blog.csdn.net/cdlwhm1217096231/article/details/106684950就是两篇不同的博客地址


