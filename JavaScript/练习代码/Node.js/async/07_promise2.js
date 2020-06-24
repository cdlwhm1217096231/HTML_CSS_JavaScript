// 利用promise解决回调地狱的问题

const fs = require("fs");


function p1() {
  return new Promise((resolve, reject) => {
    fs.readFile("./1.txt", "utf8", (err, result1) => {
      resolve(result1);
    })
  });
    
}

function p2() {
  return new Promise((resolve, reject) => {
    fs.readFile("./2.txt", "utf8", (err, result2) => {
      resolve(result2);
    })
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    fs.readFile("./3.txt", "utf8", (err, result3) => {
      resolve(result3);
    })
  });
}

// promise支持链式编程
p1().then(r1 => {
    console.log(r1);
    return p2();
})

.then(r2 => {
    console.log(r2);
    return p3();
})

.then(r3 => {
    console.log(r3);
})