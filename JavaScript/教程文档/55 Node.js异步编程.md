### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.Node.js异步编程

##### 1.1 Node.js中的异步API
- 如果异步API后面的代码执行依赖当前异步API的执行结果，但实际上后续代码在执行的时候，异步API还没有返回结果，这个问题该怎么解决呢？如下所示：
    ```javascript
    fs.readFile('./demo.txt',(err, result) => {});
    console.log('文件读取结果');
    ```
- 需求：**依次读取**A文件、B文件、C文件
    ```javascript
    const fs = require("fs");

    fs.readFile("./1.txt", "utf8", (err, result1) => {
    console.log(result1);
    fs.readFile("./2.txt", "utf8", (err, result2) => {
        console.log(result2);
        fs.readFile("./3.txt", "utf8", (err, result3) => {
            console.log(result3);
           }) 
        })
    });
    ```

- 上面的代码中，回调函数中嵌套了太多层，出现了**回调地狱**的问题。

##### 1.2 Promise
- **Promise出现的目的是为了解决Node.js异步编程中的回调地狱问题**。Promise使用如下所示：
    ```javascript
    const fs = require('fs');

    // resolve参数本质上就是一个函数：如果当前异步API调用成功了，则调用resolve函数返回异步API的结果
    // reject参数本质上就是一个函数：如果当前异步API调用失败了，则调用reject函数返回异步API的结果
    let promise = new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            if (err != null) {
                reject(err);
            }else{
                resolve(result);
            }
        });
    });

    promise.then((result) => {
        console.log(result);
    })
    // 链式编程
        .catch((err) => {
        console.log(err);
    })
    ```

- 使用promise解决了回调地狱的问题，如下所示：
    ```javascript
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
    ```

##### 1.3 异步函数
- 基于promise对象的基础上，进行了一层封装。这样既解决了回调地狱的问题，也解决了仅仅利用promise时出现的代码臃肿的问题。
- **异步函数是异步编程语法的终极解决方案，它可以让我们将异步代码写成同步的形式，让代码不再有回调函数的嵌套，使代码变得清晰明了**。
- **async关键字**
    - 在普通函数定义的前面加上async关键字，普通函数就变成了异步函数
    - 异步函数默认的返回值是promise对象 
    - 在异步函数内部使用return关键字进行结果的返回，结果会被包裹在promise对象中，return关键字代替了resolve()函数
    - 在异步函数的内部使用throw关键字进行错误的抛出
    - 先调用异步函数，再进行链式调用then()方法，可以获取异步函数执行结果
    - 先调用异步函数，再进行链式调用catch()方法，可以获取异步函数执行的错误信息
- **await关键字**
    - 它只能出现在异步函数内部
    - await promise，await后面只能写promise对象，写其他类型的API是不可以的!
    - await关键字它可以暂停异步函数的向下执行，直到promise返回结果
    ```javascript
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
        // 将异步代码写成了同步形式
        let r1 = await p1();
        let r2 = await p2();
        let r3 = await p3();
        console.log(r1);
        console.log(r2);
        console.log(r3);
    }

    run();
    ```
- **异步函数async和await的综合应用**
    ```javascript
    const fs = require('fs');
    // promisify改造现有异步函数API，让其返回promise对象，从而支持异步函数语法
    const promisify = require('util').promisify;  
    const readFile = promisify(fs.readFile);

    async function run() {
        let r1 = await readFile('./1.txt', 'utf8')  // await后面只能接promise对象
        let r2 = await readFile('./2.txt', 'utf8')
        let r3 = await readFile('./3.txt', 'utf8')
        console.log(r1)
        console.log(r2)
        console.log(r3)
    }

    run();
    ```

#### 2.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)