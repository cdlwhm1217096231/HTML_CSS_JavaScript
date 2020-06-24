// 同步API与异步API对比


// 同步API
function sum(n1, n2) {
    return n1 + n2;
}

const result = sum(10, 100);
console.log(result);  // 110


// 异步API
function getMsg(callback) {
    setTimeout(function () {
        callback({
            msg: 'Hello, Node.js'
        })
    }, 2000);
}
getMsg(data => {
    console.log(data);
});

