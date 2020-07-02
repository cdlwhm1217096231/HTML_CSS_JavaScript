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