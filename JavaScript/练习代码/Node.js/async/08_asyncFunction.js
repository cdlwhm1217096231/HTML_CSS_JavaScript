// 在普通函数定义的前面加上async关键字，普通函数就变成了异步函数
// 异步函数默认的返回值是promise对象
// 在异步函数的内部使用throw关键字进行错误的抛出

// await关键字
    // (1).它只能出现在异步函数内部
    // (2).await promise它可以暂停异步函数的执行，等待promise对象返回结果后再向下执行函数
async function fn() {
    throw '发生了一些错误';
    return 123;  // 省去了return new Promise()步骤
}

console.log(fn());  Promise { 123 }

fn().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}) 

async function p1() {
    return 'p1';
}

async function p2() {
    return 'p2';
}

async function p3() {
    return 'p3';
}

async function run() {
    let r1 = await p1();
    let r2 = await p2();
    let r3 = await p3();
    console.log(r1);
    console.log(r2);
    console.log(r3);
}

run();