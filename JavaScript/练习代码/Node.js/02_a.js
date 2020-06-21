// a.js

// 在模块a内部定义变量
let version = 666;
// 在模块内部定义方法
const sayHi = name => `Hi, ${name}`;

const add = (n1, n2) => n1 + n2;
// 利用exports对象向模块外部导出数据
exports.version = version;
exports.sayHi = sayHi;
exports.add = add;

