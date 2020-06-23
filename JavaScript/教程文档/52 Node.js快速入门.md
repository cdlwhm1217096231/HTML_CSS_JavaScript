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

##### 4.1 JavaScript开发弊端
- JavaScript在使用时存在两大问题：**文件依赖**和**命名冲突**。
![文件依赖关系不明确.png](https://upload-images.jianshu.io/upload_images/13407176-099c7abbb46ef82e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![num变量命名冲突.png](https://upload-images.jianshu.io/upload_images/13407176-3c3831b1cdd66cc3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 4.2 软件中的模块化开发
- 一个功能就是一个模块，多个模块可以组成完整应用，抽离一个模块不会影响其他功能的运行。
![软件中的模块化开发.png](https://upload-images.jianshu.io/upload_images/13407176-82df533c6cb2bee4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 4.3 Node.js中模块化开发规范
- Node.js规定：**一个JavaScript文件就是一个模块**。**模块内部定义的变量和函数**，默认情况下在**外部无法得到**。
- 模块内部可以**使用exports对象进行成员导出**，使用**require方法导入其他模块**。
    ```javascript
    // a.js

    // 在模块a内部定义变量
    let version = 666;
    // 在模块内部定义方法
    const sayHi = name => `Hi, ${name}`;
    // 利用exports对象向模块外部导出数据
    exports.version = version;
    exports.sayHi = sayHi;


    // b.js

    // 在b.js模块中导入模块a
    // let a = require('./02_a.js')
    let a = require('./02_a'); // 注意：导入模块时，模块的后缀是可以省略的。
    // 输出b模块中的version变量
    console.log(a.version);

    // 调用b模块中的sayHi方法，并输出其返回值
    console.log(a.sayHi('CurryCoder')); 
    ```
![模块的导入与导出.png](https://upload-images.jianshu.io/upload_images/13407176-eb79dad8184fe537.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 注意：**导入模块时，模块的后缀是可以省略的**。

##### 4.4 模块成员导出的另一种方式
- 模块成员导出语法如下：
    ```javascript
    module.exports.version = version;
    module.exports.sayHi = sayHi;
    ```
- 具体使用，如下例所示：
    ```javascript
    // module.exports.a.js模块

    let greeting = name => `Hello, ${name}`;

    // 利用module.exports对象导出成员
    module.exports.greeting = greeting;

    // module.exports.b.js模块
    const a = require('./03_module.exports.a.js');

    console.log(a.greeting('CurryCoder'));
    ```
- exports对象与module.exports对象对比：**exports对象是module.exports对象的别名**(地址引用关系)，**导出对象最终以module.exports为准**。

##### 4.5 模块导出的两种方式联系与区别
![联系.png](https://upload-images.jianshu.io/upload_images/13407176-5528409a77e4c228.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```javascript
// module.exports.a.js模块

let greeting = name => `Hello, ${name}`;
const x = 100;
// 两种模块导出方式的联系
exports.x = x;
// 利用module.exports对象导出成员
module.exports.greeting = greeting;


// module.exports.b.js模块
const a = require('./03_module.exports.a.js');
// console.log(a.greeting('CurryCoder'));
console.log(a);

// 结果
E:\前端开发\JavaScript\练习代码\Node.js>node 03_module.exports.b.js
{ x: 100, greeting: [Function: greeting] }
```
![区别.png](https://upload-images.jianshu.io/upload_images/13407176-006906587c44d658.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```javascript
// module.exports.a.js模块

let greeting = name => `Hello, ${name}`;
const x = 100;

exports.x = x;
module.exports.greeting = greeting;
// 两种模块导出方式的区别
// 当exports对象和module.exports对象指向的不是同一个对象时，以module.exports为准!!!
module.exports = {
    name: '大拿'
}

exports = {
    age: 20
}

// module.exports.b.js模块
const a = require('./03_module.exports.a.js');

// console.log(a.greeting('CurryCoder'));
console.log(a);


// 结果
E:\前端开发\JavaScript\练习代码\Node.js>node 03_module.exports.b.js
{ name: '大拿' }
```

#### 5.系统模块

##### 5.1 什么是系统模块
- Node运行环境提供的API。因为这些API都是以模块化的方式进行开发的。所以，**我们又称Node运行环境提供的API为系统模块**。
![文件系统模块.png](https://upload-images.jianshu.io/upload_images/13407176-bcd5887af1449c61.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 5.2 系统模块fs 文件操作
- f:file文件，s:system系统，文件操作系统。
- 注意：**读取文件是硬盘的操作，它需要耗时。因此，需要通过callback回调函数的方式获取文件读取的结果**。
    ```javascript
    const fs = require('fs');

    // 读取文件内容
    fs.readFile('文件路径/文件名称'[,'文件编码'], callback);  // callback是回调函数，
    ```
- 读取文件语法示例：
    ```javascript
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
    ```
- 写入文件内容语法格式：
    ```javascript
    fs.write('文件路径/文件名', '数据', callback);
    ```
- 写入文件语法示例：
    ```javascript
    const fs = require('fs');

    fs.writeFile('./demo.txt', '即将要写入的内容', err => {
        if (err != null) {
            console.log(err);
            return;
        }
        console.log('文件内容写入成功~');
    });
    ```

##### 5.3 系统模块path 路径操作
- **为什么需要路径拼接**?答案：不同操作系统的路径分隔符不统一；[Windows系统上分隔符是\或/，Linux系统上分隔符是/]
- **路径拼接语法**
    ```javascript
    path.join('路径','路径',...)
    ```
- **路径拼接示例**
    ```javascript
    // public/uploads/avatar
    // 导入系统模块path
    const path = require('path');

    const filePath = path.join('public', 'uploads', 'avatar');
    console.log(filePath);
    ```

##### 5.4 相对路径 VS 绝对路径
- 大多数情况下，使用绝对路径。因为相对路径有时候相对的是命令行工具的当前工作目录。
- **在读取文件或设置文件路径时，都会选择绝对路径**。
- **使用_dirname获取当前文件所在的绝对路径**。
    ```javascript
    const path = require('path');
    const fs = require('fs');

    console.log(__dirname);  // 获取当前文件所在的绝对路径，即E:\前端开发\JavaScript\练习代码\Node.js
    console.log(path.join(__dirname, '01_helloworld.js'));


    fs.readFile(path.join(__dirname, '01_helloworld.js'), 'utf-8', (err, doc) => {
        console.log(err);
        console.log(doc);
    });
    ```

#### 6.第三方模块

##### 6.1 什么是第三方模块
- 别人已经写好的、具有特定功能的，我们能直接使用的模块即第三方模块。**由于第三方模块通常是由多个文件组成并且被放置在一个文件夹中，所以又称为包**。

##### 6.2 第三方模块有两种存在形式
- 第一种：以js文件的形式存在，提供实现项目具体功能的API接口。
- 第二种：以命令行工具的形式存在，辅助项目开发。

##### 6.3 获取第三方模块
- npmjs.com：第三方模块的存储和分发仓库。
- npm(node package manager)：node的第三方模块管理工具。
- 下载第三方模块：在命令行中输入 npm install 模块名称，例如：npm install formidable
- 注意：下载下来的第三方模块位于当前命令行的路径中，npm为我们自动创建了一个package-lock.json文件和node_modules文件夹(第三方模块在当中)。
- 卸载第三方模块：在命令行中输入 npm uninstall 模块名称，例如：npm uninstall formidable
- **本地安装与全局安装**
    - 本地安装：将第三方模块下载到当前的项目当中，供当前的项目使用。如：库文件
    - 全局安装：将第三方模块下载到一个公共的目录当中，所有的项目都可以使用这个模块。如：命令行工具

#### 7.第三方模块nodemon
- nodemon是一个命令行工具，用于辅助项目开发。
- 在Node.js中，每次修改文件都要在命令行工具中重新执行该文件，非常繁琐。
- **使用步骤**：
    - (1).使用npm install nodemon **-g**下载它，-g参数表示全局安装。
    - (2).在命令行工具中使用nodemon命令替代node命令执行文件。

#### 8.第三方模块nrm
- nrm(npm registry manager): npm下载地址切换工具
- npm默认的下载地址在国外，在国内下载速度慢。
![原理.png](https://upload-images.jianshu.io/upload_images/13407176-deacc109e1554803.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **使用步骤**：
    - (1).使用npm install nrm -g 下载它
    - (2).查询可用下载地址列表 nrm ls
    - (3).切换npm下载地址：nrm use 下载地址名称

#### 9.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)