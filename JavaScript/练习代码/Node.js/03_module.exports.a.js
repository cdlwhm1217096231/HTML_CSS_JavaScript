// module.exports.a.js模块

let greeting = name => `Hello, ${name}`;
const x = 100;

// 两种模块导出方式的联系
exports.x = x;
// 利用module.exports对象导出成员
module.exports.greeting = greeting;

// 两种模块导出方式的区别
// 当exports对象和module.exports对象指向的不是同一个对象时，以module.exports为准!!!
module.exports = {
    name: '大拿'
}

exports = {
    age: 20
}