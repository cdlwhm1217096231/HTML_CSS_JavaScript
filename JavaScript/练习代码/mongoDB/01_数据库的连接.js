const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CurryCoder', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('数据库连接成功啦!'))
    .catch(err => console.log(err, '数据库连接失败啦!'))
