### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.预解析
- JavaScript代码是由浏览器中的JavaScript解析器来执行的。JavaScript解析器在运行JavaScript代码的时候分为两步：**预解析和代码执行**。
- **预解析：JS引擎会把JS里面所有的var和function提升到当前作用域的最前面**；
- 代码执行：按照代码的书写顺序从上往下执行；
- 预解析分为变量预解析(变量提升)和函数预解析(函数提升)
    - 变量提升：**把所有的变量声明提升到当前的作用域最前面，不提升赋值操作**；
        ```
        // 变量提升1
        console.log(num);  // undefined 疑问1
        var num = 666;       
        /* 相当于执行了以下的代码：
        var num;
        console.log(num);
        num = 666;
         */
        
         // 变量提升2
        foo();
        var foo = function () {
            console.log(22);
        }
        /* 相当于执行了以下的代码:
        // 函数表达式 调用必须写在函数表达式的下面
        var foo;
        foo();
        foo = function () {
            console.log(22);
        } */
        ```
    - 函数提升：**把所有的函数声明提升到当前作用域的最前面，不调用函数**；
    ```
    fun();
    function fun() {
        console.log(11);
    }
    ```
#### 2.预解析案例
```
// 案例1
var num = 10;
fun11();
function fun11() {
    console.log(num);
    var num = 666;
}
// 相当于执行了以下的代码：
/* 
var num;
function fun11() {
    var num;
    console.log(num);
    num = 666;
}
num = 10;
fun11(); */


// 案例2
var num = 100;
function far() {
    console.log(num);
    var num = 1000;
    console.log(num);
}
far();
// 相当于执行了以下的代码：
/* 
var num;
function far() {
    var num;
    console.log(num);
    num = 1000;
    console.log(num);
} 
far(); */


// 案例3
var a = 18;
f1();
function f1() {
    var b = 9;
    console.log(a);
    console.log(b);
    var a = '123';
}
// 相当于执行了以下的代码：
/*  
var a;
function f1() {
    var b;
    var a;
    b = 9;
    console.log(a);
    console.log(b);
    a = '123';
}
a = 18;
f1(); */


// 案例4
f2();
console.log(c);
console.log(b);
console.log(a);
function f2() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
// 相当于执行了以下的代码：
/*  
function f2() {
    var a;
    a = b = c = 9;
    // 这里相当于var a = 9; b = 9; c = 9; b和c直接赋值，没有var声明。因此，b和c当全局变量看待
    // 集体声明：var a = 9, b = 9, c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}
f2();
console.log(c);
console.log(b);
console.log(a); */
```
#### 3.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)