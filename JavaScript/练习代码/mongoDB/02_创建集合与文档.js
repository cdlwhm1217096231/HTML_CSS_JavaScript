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
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
});

// 使用规则去创建集合
// 参数1:集合名称,参数2:集合规则
const Course = mongoose.model("Course", courseSchema); // 数据库中集合名称实际为courses

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
