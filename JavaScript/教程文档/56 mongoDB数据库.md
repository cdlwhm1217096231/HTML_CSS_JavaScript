### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.数据库概述及环境搭建

##### 1.1 为什么要使用数据库
- 动态网站中的数据都是存储在数据库中。
- 数据库可以用来持久存储客户端通过表单收集的用户信息。
- 数据库软件本身可以对数据进行更高效的管理。

##### 1.2 什么是数据库
- 数据库即存储数据的仓库，可以将数据进行有序的分门别类的存储。它是独立于语言之外的软件，可以通过API去操作它。
![Node.js与数据库交互.png](https://upload-images.jianshu.io/upload_images/13407176-173810a4403a7b2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 常见的数据库软件有：mysql、mongoDB、oracle、redis等

##### 1.3 mondoDB数据库下载安装
- 下载地址：https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.8-signed.msi
- mongoDB可视化操作工具：Robo 3T 1.2.1

##### 1.4 数据库相关概念
- 在一个数据库软件中可以包含多个数据仓库，在每个数据仓库中可以包含多个数据集合，每个数据集合中可以包含多条文档(具体的数据)。
![数据库相关概念.png](https://upload-images.jianshu.io/upload_images/13407176-b318b24d5ab1df16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 1.5 Mongoose第三方包
- 使用Node.js操作mongoDB数据库需要依赖Node.js第三方包mongoose。
- 使用npm install mongoose命令下载安装

##### 1.6 启动mongoDB
- 在cmd中运行**net start mongoDB**即可启动mongoDB，否则mongoDB将无法连接。在cmd中运行**net stop mongoDB**即可关闭mongoDB。

##### 1.7 数据库连接
- 使用mongoose提供的connect方法即可连接数据库。
    ```javascript
    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost/CurryCoder', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功啦!'))
    .catch(err => console.log(err, '数据库连接失败啦!'))
    ```

##### 1.8 创建数据库
- 在mongoDB中**不需要显式创建数据库**，如果正在使用的数据库不存在，**mongoDB会自动创建**。

#### 2.mongoDB数据库的增删改查操作
