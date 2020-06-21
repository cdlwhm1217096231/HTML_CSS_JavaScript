// b.js

// 在b.js模块中导入模块a
let a = require('./02_a.js');
// 输出b模块中的version变量
console.log(a.version);

// 调用b模块中的sayHi方法，并输出其返回值
console.log(a.sayHi('CurryCoder'));
console.log('--------------');
console.log(a.add(1, 666));


