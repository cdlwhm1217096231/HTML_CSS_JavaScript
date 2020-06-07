### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.变量的作用域
- 变量根据作用域的不同分为两种：全局变量和局部变量。
    - 函数内部可以全局变量。
    - 函数外部不可以使用局部变量。
    - 当函数执行完毕，本作用域内的局部变量会被销毁。

#### 2.什么是闭包
- 闭包是指**有权访问**另一个函数作用域中**变量**的**函数**。简单理解就是一个作用域可以访问另外一个函数内部的局部变量。局部变量所在的函数就称为闭包函数。
- **闭包的主要作用：延伸了变量的作用范围**。

#### 3.闭包案例
- **循环注册点击事件**
    ```javascript
    <ul class="nav">
            <li>榴莲</li>
            <li>臭豆腐</li>
            <li>鲱鱼罐头</li>
            <li>大猪蹄子</li>
        </ul>
        <script>
            // 闭包应用-点击li输出当前li的索引号
            // 方法1：利用动态添加属性的方式
            var lis = document.querySelector('.nav').querySelectorAll('li');
            // for (var i = 0; i < lis.length; i++) {
            //     lis[i].index = i;
            //     lis[i].onclick = function () {
            //         console.log(this.index);
            //     }
            // }
            // 方法2：利用闭包的方式得到当前小li的索引号
            for (var i = 0; i < lis.length; i++) {
                // 利用for循环创建了4个立即执行函数
                // 立即执行函数也称为小闭包，因为立即执行函数里面的任何一个函数都可以使用它的i这个变量
                (function (i) {
                    // console.log(i);
                    lis[i].onclick = function () {
                        console.log(i);
                    }
                })(i);
            }
        </script>
    </body>
    ```
- **循环中的setTimeout()**
    ```javascript
    <body>
        <ul class="nav">
            <li>榴莲</li>
            <li>臭豆腐</li>
            <li>鲱鱼罐头</li>
            <li>大猪蹄子</li>
        </ul>
        <script>
            // 闭包应用-3s后，打印所有li元素的内容
            var lis = document.querySelector('.nav').querySelectorAll('li');
            for (var i = 0; i < lis.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        console.log(lis[i].innerHTML);
                    }, 3000);
                })(i)
            }
        </script>
    </body>
    ```
- **计算打车价格**
    ```javascript
    <script>
        // 闭包应用-计算打车价格
        // 起步价13元(3公里内)，之后每多一公里增加5元。用户输入公里数可以计算打车价格。如果有拥堵情况，总价格多收取10元拥堵费
        // function fn(){};
        // fn();
        var car = (function(){
            var start = 13;
            var total = 0;
            return {
                price: function(n){
                    if(n <= 3){
                        total = start;
                    }else{
                        total = (n - 3) * 5 + start;
                    }
                    return total;
                },  // 正常的总价
                yd: function(flag){
                    return flag ? total + 10 : total;
                }  // 拥堵之后的总价
            }
        })();
        console.log( car.price(5));
        console.log( car.yd(true));        
    </script>
    ```

#### 4.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)