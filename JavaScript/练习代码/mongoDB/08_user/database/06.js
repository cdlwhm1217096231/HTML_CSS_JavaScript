// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

// 使用规则创建集合
const User = mongoose.model('User', userSchema);
// 找到要删除的文档并且删除
// 返回是否删除成功的对象
// 如果匹配了多条文档, 只会删除匹配成功的第一条文档
// User.updateOne({name: '李四'}, {age: 120, name: '李狗蛋'}).then(result => console.log(result))
// 找到要删除的文档并且删除
User.updateMany({}, {age: 300}).then(result => console.log(result))