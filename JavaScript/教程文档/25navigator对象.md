### 技术交流QQ群:1027579432，欢迎你的加入！

#### 1.navigator对象
- navigator对象包含有关浏览器的信息，它有很多属性，我们最常用的是userAgent，该属性可以返回由客户机发送服务器的user-agent的头部值。
- 下面的前端代码可以判断用户哪个终端打开页面，实现跳转。
    ```
    if((navigator.userAgent.match(/(phone|pad|pod|Phone}iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|webOS|Symbian|Windows Phone)/i))){
        window.location.href = "";  // 手机
    } else {
        window.location.href = "";  // 电脑
    }
    ```

#### 2.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)