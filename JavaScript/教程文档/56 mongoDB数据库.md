### 技术交流 QQ 群:1027579432，欢迎你的加入！

### 欢迎关注我的微信公众号：CurryCoder 的程序人生

#### 1.数据库概述及环境搭建

##### 1.1 为什么要使用数据库

- 动态网站中的数据都是存储在数据库中。
- 数据库可以用来持久存储客户端通过表单收集的用户信息。
- 数据库软件本身可以对数据进行更高效的管理。

##### 1.2 什么是数据库

- 数据库即存储数据的仓库，可以将数据进行有序的分门别类的存储。它是独立于语言之外的软件，可以通过 API 去操作它。
  ![Node.js与数据库交互.png](https://upload-images.jianshu.io/upload_images/13407176-173810a4403a7b2d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 常见的数据库软件有：mysql、mongoDB、oracle、redis 等

##### 1.3 mondoDB 数据库下载安装

- 下载地址：https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.8-signed.msi
- mongoDB 可视化操作工具：Robo 3T 1.2.1

##### 1.4 数据库相关概念

- 在一个数据库软件中可以包含多个数据仓库，在每个数据仓库中可以包含多个数据集合，每个数据集合中可以包含多条文档(具体的数据)。
  ![数据库相关概念.png](https://upload-images.jianshu.io/upload_images/13407176-b318b24d5ab1df16.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 1.5 Mongoose 第三方包

- 使用 Node.js 操作 mongoDB 数据库需要依赖 Node.js 第三方包 mongoose。
- 使用 npm install mongoose 命令下载安装

##### 1.6 启动 mongoDB

- 在 cmd 中运行**net start mongoDB**即可启动 mongoDB，否则 mongoDB 将无法连接。在 cmd 中运行**net stop mongoDB**即可关闭 mongoDB。

##### 1.7 数据库连接

- 使用 mongoose 提供的 connect 方法即可连接数据库。

  ```javascript
  const mongoose = require("mongoose");

  mongoose
    .connect("mongodb://localhost/CurryCoder", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("数据库连接成功啦!"))
    .catch(err => console.log(err, "数据库连接失败啦!"));
  ```

##### 1.8 创建数据库

- 在 mongoDB 中**不需要显式创建数据库**，如果正在使用的数据库不存在，**mongoDB 会自动创建**。

#### 2.mongoDB 数据库的增删改查操作

##### 2.1 创建集合

- 创建集合分为两步：
  - 首先，对集合设定规则。
  - 然后，创建集合。创建 mongoose.Schema 构造函数的实例即可创建集合。

  ```javascript
  const mongoose = require("mongoose");
  mongoose
    .connect("mongodb://localhost/course_demo", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("数据库连接成功"))
    .catch(err => console.log(err, "数据库连接失败"));

  // 设定集合规则
  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
  });

  // 使用规则去创建集合
  // 参数1:集合名称,参数2:集合规则
  const Course = mongoose.model("Course", courseSchema); // 数据库中集合名称实际为courses
  ```

  ##### 2.2 创建文档

  - **创建文档实际上是向集合中插入数据**。分为两步：
    - 首先，创建集合的实例；
    - 其次，调用实例对象下的 save()方法将数据保存到数据库中。
  - **和数据库相关的操作都是异步操作**
```javascript
  // 创建文档--方法1
  const course = new Course({
    name: "JavaScript",
    author: "CurryCoder",
    isPublished: true
  });

  course.save();

  // 创建文档--方法2
  Course.create(
    {
      name: "Python",
      author: "Pink老师",
      isPublished: true
    },
    (err, doc) => {
      // 错误对象
      console.log(err);
      // 当前插入的文档
      console.log(doc);
    }
  );

  // 创建文档--方法2支持异步函数的语法
  Course.create({
    name: "C++",
    author: "扫地僧",
    isPublished: false
  })
    .then(doc => console.log(doc))
    .catch(err => console.log(err))
```

##### 2.3 mongoDB数据库导入数据
- 前提：找到mongodb数据库的安装目录，将安装目录下的bin目录添加到系统的环境变量中。
- 导入数据语法：mongoimport -d 数据库名 -c 集合名 --file 要导入的数据文件
  ```
    E:\前端开发\JavaScript\练习代码\mongoDB>mongoimport -d course_demo -c user --file
    ./user.json
    2020-07-02T21:16:45.454+0800    connected to: localhost
    2020-07-02T21:16:45.558+0800    imported 6 documents
  ```

##### 2.4 查询文档
- 根据条件查找文档(条件为空则查找所有文档)
  ```javascript
  const mongoose = require("mongoose");
  mongoose
    .connect("mongodb://localhost/course_demo", {
      // course_demo数据库的名字
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("数据库连接成功"))
    .catch(err => console.log(err, "数据库连接失败"));

  // 设定集合规则
  const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
  });

  // 使用规则去创建集合
  // 参数1:集合名称,参数2:集合规则
  const User = mongoose.model("User", userSchema); // 数据库中集合名称实际为users

  // 查询用户集合中的所有文档
  User.find().then(result => console.log(result));

  // 通过限制条件查找文档
  User.find({ _id: '5c09f267aeb04b22f8460968' }).then(result => console.log(result));

  // findOne()方法返回一条文档，默认返回当前集合中的第一条文档
  User.findOne({ name: '李四' }).then(result => console.log(result));

  // 匹配大于 小于
  User.find({ age: { $gt: 20, $lt: 50 } }).then(result => console.log(result));

  // 匹配包含
  User.find({ hobbies: { $in: ['敲代码'] } }).then(result => console.log(result));

  // 选择要查询的字段name email，不想查询字段_id
  User.find().select('name email -_id').then(result => console.log(result));

  // 将数据按照年龄进行降序排列 -age
  User.find().select('age -_id').sort('-age').then(result => console.log(result));

  // skip跳过多少条数据  limit限制查询数量
  User.find().skip(2).limit(3).then(result => console.log(result));
  ```

