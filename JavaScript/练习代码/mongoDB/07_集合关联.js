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