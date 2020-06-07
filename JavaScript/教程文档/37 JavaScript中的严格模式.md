### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.什么是严格模式(strict model)
- JavaScript除了提供正常模式外，还提供了严格模式。ES5的严格模式是采用具有限制性JavaScript变体的一种方式，即在严格的条件下运行JS代码。
- 严格模式在IE10以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。
- 严格模式对正常的JavaScript语义做了一些更改：
    - 消除了JavaScript语法的一些不合理、不严谨的地方，减少了一些怪异的行为。
    - 消除代码运行的一些不安全之处，保证代码运行的安全性。
    - 提高编译器效率，增加运行速度。
    - 禁用了在ECMAScript的未来版本中可能会定义的一些语法，为未来新版本的JavaScript做好铺垫。比如一些保留字如：class、enum、export、extends、import、super不能作为变量名。

#### 2.开启严格模式
- 严格模式可以应用到**整个脚本或个别函数**中。因此在使用时，可以将严格模式分**为脚本开启严格模式和为函数开启严格模式**两种情况。

##### 2.1 为脚本开启严格模式
- 为整个脚本文件开启严格模式，需要**在所有语句之前放一个特定的语句"use strict";**或'use strict';。
    ```javascript
    <script>
        // 为整个脚本开启严格模式
        'use strict';
    </script>
    ```
- 有的script基本是严格模式，有的script脚本是正常模式。这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行函数当中。这样独立创建一个作用域而不影响其他script脚本文件。
    ```javascript
    <script>
        (function(){
            'use strict';
        })()
    </script>
    ```

##### 2.2 为函数开启严格模式
- 要给某个函数开启严格模式，需要**把"use strict";或'use strict';声明放在函数体所有语句之前**。
    ```javascript
    <script>
    // 为某个函数开启严格模式
    function fn(){
        'use strict';  // 只是给函数fn()开启严格模式
    }

    function fun(){
        // 里面还是按照普通模式执行
    }
    </script>
    ```

#### 3.严格模式中的变化
- 严格模式对JavaScript的语法和行为，都做出了一些改变。
- (1).变量规定
    - 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁用这种用法，变量都必须先用var命令声明，然后再使用。
    - 严禁删除已经声明的变量。例如delete x;语法是错误的。

- (2).严格模式下this指向问题
    - 以前在全局作用域中函数的this指向的是window对象。
    - **严格模式下，全局作用域中函数的this指向的是undefined**。
    - 以前构造函数不加new也可以调用，它就当作普通函数使用，this指向全局对象。
    - 严格模式下，如果构造函数不加new调用，this会报错。
    - new实例化时，构造函数指向创建的对象实例。    
    - 严格模式下，定时器中的this指向的还是window。
    - 事件、对象还是指向调用者。
- (3).函数变化
    - 函数不能有重名的**参数**。
    - 函数必须声明在顶层，新版本的JavaScript会引入**块级作用域**(ES6中已经引入)。为了与新版本接轨，不允许在非函数的代码块内声明函数。

#### 4.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
- [关于严格模式更多信息，请点击这里](https://developer.mozilla.org/zh-CN/docs/Glossary/strict_mode)