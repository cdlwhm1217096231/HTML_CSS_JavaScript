// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true})
	// 连接成功
	.then(() => console.log('数据库连接成功'))
	// 连接失败
	.catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则
const courseSchema = new mongoose.Schema({
	name: String,
	author: String,
	isPublished: Boolean
});

// 使用规则创建集合
// 1.集合名称
// 2.集合规则
const Course = mongoose.model('Course', courseSchema) // courses

// 向集合中插入文档
// Course.create({name: 'Javascript', author: '黑马讲师', isPublished: false}, (err, result) => {
// 	console.log(err)
// 	console.log(result)
// })

Course.create({name: 'Javascript123', author: '黑马讲师', isPublished: false})
	  .then(result => {
	  	console.log(result)
	  })
