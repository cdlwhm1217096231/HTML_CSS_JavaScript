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