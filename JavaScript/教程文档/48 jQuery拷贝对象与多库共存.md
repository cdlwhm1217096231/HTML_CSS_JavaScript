### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.jQuery拷贝对象
- 如果想要把某个对象拷贝(合并)给另外一个对象使用，此时使用\$.extend()方法。
- 语法：
    ```javascript
    $.extend([deep], target, object1, [objectN])
    ```
    - deep:如果为true表示深拷贝，反之为浅拷贝。
    - target:要拷贝的目标对象。
    - object1:待拷贝的第一个对象。
    - **浅拷贝**把被拷贝对象中的**复杂数据类型的地址**拷贝给目标对象，修改目标对象会**影响**被拷贝对象。
    - **深拷贝**，前面加true。完全克隆(拷贝的是对象，而不是地址)，修改目标对象**不会影响**被拷贝对象。

#### 2.jQuery多库共存
- 问题产生：jQuery使用\$作为标识符，随着jQuery的流行，其他js库也会使用这个\$作为标识符，这样一起使用会引起冲突。
- 客观需求：需要一个解决方案，让jQuery和其他的js库不存在冲突，可以同时存在，这就叫做多库共存。
- **jQuery解决方案**：
    - (1).把里面的$符号统一改成jQuery。比如jQuery("div")
    - (2).jQuery变量规定新的名称\$.noConflict()。如var xx = \$.noConflict();

#### 3.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)