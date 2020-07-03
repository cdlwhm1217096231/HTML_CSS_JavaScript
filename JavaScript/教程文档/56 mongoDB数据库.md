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
    E:\前端开发\JavaScript\练习代码\mongoDB>mongoimport -d course_demo -c users --file
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

##### 2.5 删除文档
- 删除文档如下：
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

  // 删除单个文档
  // 如果查询条件匹配了多个文档，那么将会删除第一个匹配的文档
  User.findOneAndDelete({ _id: '5c09f236aeb04b22f8460967' })
      .then(result => console.log(result));

  // 删除多个文档
  User.deleteMany({}).then(result => console.log(result));
  ```

##### 2.6 更新文档
- 更新单个文档:
  ```javascript
  User.updateOne({查询条件}, {要更改的值}).then(result => console.log(result));
  ```
- 更新多个文档：
  ```javascript
  User.updateMany({查询条件}, {要更改的值}).then(result => console.log(result));
  ```
- 示例程序如下所示：
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

  // 更新集合中的单个文档
  User.updateOne({ name: '李四' }, { name: '葛二蛋' }).then(result => console.log(result));

  // 更新集合中的多个文档
  // 如果查询条件匹配了多个文档，那么将会更新第一个匹配的文档
  User.updateMany({}, { age: 56 }).then(result => console.log(result));
  ```

##### 2.7 mongoose验证
- 在创建集合规则时，可以设置当前字段的验证规则，验证失败就输入插入失败。
  - required:true 必传字段
  - minlength:最小长度
  - maxlength:最大长度
  - min:数值最小为2
  - max:数值最大为100
  - enum: ['html', 'css', 'js']
  - trim: 去除字符串两边的空格
  - validate: 自定义验证器
  - message: 自定义错误信息
  ```javascript
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/course_demo', {
          useNewUrlParser: true,
          useUnifiedTopology: true
  })
      .then(() => console.log('数据库连接成功'))
      .catch(err => console.log(err, '数据库连接失败'));

  // mongoose验证
  const postSchema = new mongoose.Schema({
      title: {
          type: String,
          // required: true 必传字段
          // 验证规则
          required: [true, '请传入文章标题'],  
          // minlength: 2,
          minlength: [2, '文章长度不能小于2'],
          maxlength: 5,
          // 去除字符串两端的空格
          trim: true
      },
      age: {
          type: Number,
          // 数字的最小范围
          min: 18,
          // 数字的最大范围
          max: [100, '年龄最大不超过100岁']
      },
      publishDate: {
          type: Date,
          // 默认值
          default: Date.now
      },
      category: {
          type: String,
          // 枚举 列举出当前字段可以拥有的值
          enum: {
              values:['html', 'css', 'js', 'python'],
              message: '分类名称要在指定的范围内才可以'
          }
      },
      author: {
          type: String,
          validate: {
              validator: v => {
                  // 返回布尔值 true表示验证成功，反之表示失败 v表示要验证的值
                  return v && v.length > 4;
              },
              // 自定义错误信息
              message: '传入的值不符合验证规则'
          }
      }
  });

  const Post = mongoose.model('Post', postSchema);
  Post.create({ title: 'aa', age: 30, category: 'C++', author: 'bd' }).then(result => console.log(result)).catch(error => {
      // 获取错误信息对象
      const err = error.errors;
      // 循环错误信息对象
      for (let attr in err) {
          console.log(err[attr]['message']);
      }
  });
  ```

##### 2.8 集合关联
- **通常不同集合的数据之间是有联系的**，例如文章信息和用户信息分别存储在不同的集合中，但文章是某个用户发表的，要查询文章的所有信息包括发表用户，就要考虑到**集合关联**。
  - 使用id对集合进行关联；
  - 使用populate()方法进行关联集合查询
![集合关联.png](https://upload-images.jianshu.io/upload_images/13407176-974da26a682209cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  ```javascript
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/course_demo', {
      // course_demo数据库的名字
      useNewUrlParser: true,
      useUnifiedTopology: true
  })
      .then(() => console.log('数据库连接成功'))
      .catch(err => console.log(err, '数据库连接失败'));

  // 用户集合规则
  const userSchema = new mongoose.Schema({
      name: {
          type: String,
          required: true
      }
  });

  // 文章集合规则
  const postSchema = new mongoose.Schema({
      title: {
          type: String
      },
      author: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
  });

  // 用户集合
  const User = mongoose.model('User', userSchema);
  // 文章集合
  const Post = mongoose.model('Post', postSchema);

  // 创建用户
  // User.create({name: 'CurryCoder'}).then(result => console.log(result));
  // 创建文章
  // Post.create({ title: '我的第一篇blog', author: '5efee0fd1dd5be06b4e24a87' }).then(result => console.log(result));

  // 集合关联
  Post.find({title: '我的第一篇blog'}).populate('author').then(result => console.log(result));
  ```

##### 2.9 案例：用户信息的增删改查[代码参见文末链接中的08_user文件夹]
- (1).搭建网站服务器，实现客户端与服务端的通信；
- (2).连接数据库，创建用户集合，向集合中插入文档；
- (3).当用户访问/list时，将所有用户信息查询出来；
  - 实现路由功能；
  - 程序用户列表页面；
  - 从数据库中查询用户信息，将用户信息展示在列表中；
- (4).将用户信息和表格HTML进行拼接，并将结果响应返回给客户端；
- (5).当用户访问/add时，呈现表单页面，并实现添加用户信息的功能；
- (6).当用户访问/modify时，呈现修改页面，并实现修改用户信息的功能；
  - 增加页面路由呈现页面
    - 在点击修改按钮时，将用户ID传递到当前页面
    - 从数据库中查询当前用户的信息，将用户信息展示到页面中
  - 实现用户信息修改功能
    - 指定表单的提交地址以及请求方式
    - 接收客户端传递过来的修改信息，找到用户将用户信息修改为最新的
- (7).当用户访问/delete时，实现用户删除功能；

#### 3.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)