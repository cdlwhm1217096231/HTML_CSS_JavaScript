### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.什么是正则表达式
- 正则表达是(regular expression)是**用于匹配字符串中字符组合的模式。在JavaScript中，正则表达式也是对象**。
- 正则表达式通常被用于检索、替换那些符合某个模式(规则)的文本，例如验证表单：用户名表单只能输入英文字母、数字或下划线，昵称输入框中只能输入中文(**匹配**)。此外，正则表达式还常用于过滤掉页面内容中一些敏感词(**替换**)，或从字符串中获取我们想要的特定部分(**提取**)等。
- 其他语言中也会使用正则表达式，本文中主要是利用JavaScript正则表达式完成表单验证。

#### 2.正则表达式的特点
- 灵活性、逻辑性和功能性非常强。
- 可以迅速地用极简单的方式达到字符串的复杂控制。
- 对于刚刚接触的人来说，比较晦涩难懂。
- 实际开发中，一般都是直接复制写好的正则表达式。但是，要求会使用正则表达式并且根据实际情况修改正则表达式，比如用户名：/^[a-z0-9_-]{3,16}$/。

#### 3.正则表达式在JavaScript中的使用

##### 3.1 创建正则表达式
- 在JavaScript中，可以通过两种方式创建一个正则表达式。
    - **a.通过调用RegExp对象的构造函数创建**
    ```javascript
    var 变量名 = new RegExp(/表达式/);
    ```
    - **b.通过字面量创建**
    ```javascript
    var 变量名 = /表达式/;
    ```

##### 3.2 测试正则表达式test
- test()正则对象方法，用于检测字符串是否符合该规则，该对象会返回true或false，其参数是测试字符串。
    ```javascript
    regexObj.test(str);
    ```
    - regexObj为正则表达式；
    - str是待测试的文本；
    - 就是检测str文本是否符合我们写的正则表达式规范；

#### 4.正则表达式中的特殊字符
- **一个正则表达式可以由简单的字符构成**。如/abc/、/123/，**也可以是简单和特殊字符的组合**，比如/ab\*c/。其中，**特殊字符也被称为元字符**，在正则表达式中具有**特殊**意义的专用**符号**，如^、$、+、\*等。
- 正则表达式中的特殊字符：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
- 正则表达式测试工具：https://tool.oschina.net/regex
- 可以将元字符划分为几类学习：
    - **a.边界符**：正则表达式中边界符(位置符)用来**提示字符所处的位置**，主要有两个字符。如果^和$在一起使用，表示必须是精确匹配。
    ![边界符.png](https://upload-images.jianshu.io/upload_images/13407176-6c4b36c0341274a4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - **b.字符类**：字符类表示有一系列字符可供选择，只要匹配其中一个就可以了。**所有可供选择的字符都放在方括号中**。
        - \[-\]:方括号内部范围符\-
        ```javascript
        var rg2 = /^[a-z]$/; // 26个英文字母任何一个字母都返回true
        console.log(rg2.test("x"));
        console.log(rg2.test("y"));
        console.log(rg2.test("z"));
        console.log(rg2.test("acd"));
        console.log(rg2.test(1234));
        ```
        - 字符组合
        ```javascript
        // 字符组合
        var rg3 = /^[a-zA-Z0-9_-]$/;  // 26个英文字母(大写和小写字母都可以)任何一个字母都返回true
        console.log(rg3.test('a'));
        console.log(rg3.test('B'));
        console.log(rg3.test('1'));
        console.log(rg3.test('_'));
        console.log(rg3.test('-'));
        console.log(rg3.test('!')); // false
        ```
        - [^]：方括号内部取反符^
        ```javascript
        // 如果[]中有^表示取反的意思，不要与边界符^混淆
        var rg4 = /^[^a-zA-Z0-9_-]$/;
        console.log(rg4.test('a'));
        console.log(rg4.test('B'));
        console.log(rg4.test('1'));
        console.log(rg4.test('_'));
        console.log(rg4.test('-'));
        console.log(rg4.test('!')); // true
        ```
    - **c.量词符**：用来设定某个模式出现的次数。
    ![量词符.png](https://upload-images.jianshu.io/upload_images/13407176-d712a7399efb9a72.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```javascript
    // * 相当于>=0，可以出现0次或很多次
    var reg1 = /^a*$/;
    console.log(reg1.test(''));
    console.log(reg1.test('a'));
    console.log(reg1.test('aaaaa'));
    console.log('-------------------------');
    
    
    // + 相当于>=1，可以出现1次或很多次
    var reg2 = /^a+$/;
    console.log(reg2.test(''));
    console.log(reg2.test('a'));
    console.log(reg2.test('aaaaa'));
    console.log('-------------------------');

    // ? 相当于 出现1 || 0次
    var reg3 = /^a?$/;
    console.log(reg3.test(''));
    console.log(reg3.test('a'));
    console.log(reg3.test('aaaaa'));
    console.log('-------------------------');

    // {3 } 重复3次
    var reg4 = /^a{3}$/;
    console.log(reg4.test(''));
    console.log(reg4.test('a'));
    console.log(reg4.test('aaa'));
    console.log(reg4.test('aaaaa'));
    console.log('-------------------------');

    // {3,} 大于等于3次
    var reg5 = /^a{3,}$/;
    console.log(reg5.test(''));
    console.log(reg5.test('a'));
    console.log(reg5.test('aaa'));
    console.log(reg5.test('aaaaa'));
    console.log('-------------------------');

    // {3,16} 大于等于3 并且小于等于16
    var reg6 = /^a{3,16}$/;
    console.log(reg6.test(''));
    console.log(reg6.test('a'));
    console.log(reg6.test('aaa'));
    console.log(reg6.test('aaaaa'));
    console.log('-------------------------');
    ```
- 括号总结：
    - 大括号{}：量词符。里面表示重复次数
    - 中括号[]：字符集合。匹配方括号中的任意字符
    - 小括号()：表示优先级
    ```javascript
    // 中括号：字符集合,匹配方括号中的任意字符
    var reg = /^[abc]$/; // 多选一 a或b或c

    // 大括号：量词符，里面表示重复次数
    var reg1 = /^a{3}$/;  // 只能匹配aaa
    console.log(reg1.test('aaa'));
    var reg2 = /^abc{3}$/;  // 只能匹配abccc
    console.log(reg2.test('abccc'));  // true
    console.log(reg2.test('abcabcabc'));  // false

    // 小括号()：表示优先级
    var reg3 = /^(abc){3}$/;  // 只能匹配abcabcabc
    console.log(reg3.test('abcabcabc'));
    ```
- 正则表达式在线测试网站：https://c.runoob.com/

#### 5.预定义类
- 预定义类指的是**某些常见模式的简写方式**。
![预定义类.png](https://upload-images.jianshu.io/upload_images/13407176-1f5a9fadfa1d93ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 6.正则表达式中的替换
- replace替换：replace()方法可以实现替换字符串操作，用来替换的参数可以是一个字符串或者是一个正则表达式。语法格式如下：
    ```
    stringObject.replace(regexp/substr，replacement)
    ```
    - 第一个参数：被替换的字符串或者正则表达式
    - 第二个参数：替换为的目标字符串
    - 返回值是一个替换完毕的新字符串
- 正则表达式参数
    ```
    /表达式/[switch]
    ```
    - switch(也称为修饰符)：按照什么样的模式来匹配，有三种值。
        - g: 全局匹配
        - i: 忽略大小写
        - gi: 全局匹配 + 忽略大小写
        
#### 7.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
