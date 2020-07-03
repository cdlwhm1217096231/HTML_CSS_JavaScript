const mongoose = require('mongoose');

// 数据库连接 27017是mongodb数据库的默认端口
mongoose
  .connect("mongodb://localhost/course_demo", {
    // course_demo数据库的名字
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("数据库连接成功"))
  .catch(err => console.log(err, "数据库连接失败"));