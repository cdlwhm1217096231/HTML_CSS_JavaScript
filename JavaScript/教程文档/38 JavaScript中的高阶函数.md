### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.高阶函数
- 高阶函数是对其他函数进行操作的函数，它**接收函数作为参数或将函数作为返回值输出**。
    ```javascript
    function fn(callback){
        callback&&callback();
    }

    fn(function(){alert('hi)}) // 此时fn就是高阶函数  

    function bar(){
        return function(){

        }
    }
    bar();  // 此时bar就是高阶函数
    ```
- 函数也一种数据类型，同样可以作为参数传递给另一个参数使用。最典型的应用就是回调函数。


#### 2.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)