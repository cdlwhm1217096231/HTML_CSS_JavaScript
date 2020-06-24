// 同步API
for (var i = 0; i < 100; i++){
    console.log(i);
}

console.log('for循环后面的代码');

// 异步API
console.log('代码开始执行');
setTimeout(() => {
    console.log('2s后执行的代码');
    
}, 2000);

setTimeout(() => {
    console.log('0s后执行的代码');
}, 0);

console.log('代码结束执行');
