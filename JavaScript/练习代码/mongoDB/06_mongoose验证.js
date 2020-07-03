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
