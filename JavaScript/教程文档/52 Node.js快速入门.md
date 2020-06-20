### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.Node开发概述

##### 1.1 为什么要学习服务器端开发基础
- 能够与后端程序员更加紧密的配合；
- 网站业务逻辑前置，学习前端技术需要后端技术支撑(Ajax)
- 扩展知识视野，能够站在更高的角度审视整个项目

##### 1.2 服务器端开发要做哪些事
- 实现网站的业务逻辑
- 数据的增删改查

##### 1.3 为什么选择Node
- 使用JavaScript语法开发后端应用
- 一些公司要求前端工程师掌握Node开发
- 生态系统活跃，有大量开源库可以使用
- 前端开发工具大多基于Node开发

##### 1.4 Node是什么
- **Node是基于Chrome V8引擎的JavaScript代码运行环境**。
- **运行环境**
    - 浏览器(软件)能够运行JavaScript代码，浏览器就是JavaScript代码的运行环境。
    - Node(软件)能够运行JavaScript代码，Node就是JavaScript代码的运行环境。

#### 2.Node运行环境搭建[本文中Node版本为v10.15.1]
- Node官网：https://nodejs.org/en/
- Node版本说明
    - LTS = Long Term Support长期支持版 稳定版
    - Current 拥有最新特性 实验版
    ```shell
    // 查看Node版本
    C:\Users\Administrator>node -v
    v10.15.1
    ```
![Node版本说明.png](https://upload-images.jianshu.io/upload_images/13407176-64673c7fcc316df2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **Node环境安装失败解决方法**
    - 错误代码2502、2503。失败原因：系统账户权限不足；解决方法：首先以管理员身份运行cmd，接着输入运行安装包命令msiexec/package node安装包位置。
    - 执行命令node -v报错。失败原因：node安装包路径没有添加到系统环境变量PATH中。
- **系统环境变量PATH**：存储系统中的目录，在命令行中执行命令时，系统会自动去这些目录中查找命令的位置。

#### 3.Node.js快速入门

##### 3.1 Node.js的组成
- JavaScript由三部分组成：ECMAScript、DOM、BOM。
- Node.js是由**ECMAScript和Node环境**提供的一些**附加API**组成的，包括文件、路径、网络等等一些更强大的API。
![Node.js的组成.png](https://upload-images.jianshu.io/upload_images/13407176-d227630f57d28aca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3.2 Node.js基础语法
- **所有ECMAScript语法在Node环境中都可以使用**。
    ```javascript
    var first = 'hello nodejs';
    console.log(first);

    const fn = () => console.log('fn函数被调用了');
    fn();

    for (var i = 0; i < 3; i++){
        console.log(i);
    }

    if (true) {
        console.log('123');
    }
    ```
- 在cmd(cls清屏快捷键)中运行代码，如下所示：
    ```
    E:\前端开发\JavaScript\练习代码\Node.js>node 01_helloworld.js
    hello nodejs
    fn函数被调用了
    0
    1
    2
    123
    ```

#### 4.Node.js模块化开发
