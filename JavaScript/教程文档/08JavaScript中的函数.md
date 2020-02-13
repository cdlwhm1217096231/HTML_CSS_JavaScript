### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.函数的概念
- 在JS中，可能会定义非常多的相同代码或者功能相似的代码，这些代码可能需要大量重复使用。虽然for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用JS中的**函数**。
- 函数：封装了一段**可以被重复调用执行的代码块**，通过该代码块可以实现大量代码的重复使用。
#### 2.函数的使用
- 函数在使用的时候分为两步：**声明函数**和**调用函数**。
- **声明函数**
    - function声明函数的关键字，全部小写；
    - 函数是做某件事情，函数名一般是动词；
    - 函数不调用自己不执行即声明函数本身并不会执行代码，只有调用函数时才会执行函数体的代码；
    ```
    function 函数名() {
        // 函数体
    }
    ```
- **调用函数**
    - 调用函数时，不要忘记加小括号； 
    ```
    函数名();
    ```
- **函数的封装**
    - 函数的封装是把一个或多个功能通过**函数的方式封装起来**，对外只提供了一个简单的函数接口
#### 3.函数的参数
- 可以利用函数的参数实现函数重复不同的代码。
- 参数的作用：在函数内部某些值不能固定，我们可以通过参数在调用函数时传递不同的值进去。
- **形参和实参**
    - 在声明函数的小括号中的参数是形参；在函数调用的小括号中的参数是实参。
    - 函数的参数可以有，也可以没有，个数不限制；
    - 多个参数之间用逗号隔开；
    - 形参可以看成是不用声明的变量；
    ```
    // 声明函数
    function 函数名(形参1, 形参2...) {
        函数体
    }
    // 函数调用
    函数名(实参1,实参2...)
    ```
- **函数形参和实参个数不匹配的问题**
![函数形参和实参个数不匹配的问题.png](https://upload-images.jianshu.io/upload_images/13407176-84c0caa6e1d2775c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  - 函数可以带参数，也可以不带参数；
  - 声明函数时，函数名后面的括号中的是形参，形参的默认值是undefined；
  - 调用函数时，函数名后面的括号中的是实参；
  - 多个参数中间用逗号分隔开；
  - 形参的个数可以与实参的个数不匹配，但是结果不可预计，建议尽量参数个数一致；
    ```
        // 函数形参和实参个数匹配
        function getsum(num1, num2) {
            console.log(num1 + num2);
        }
        // 1.如果实参的个数与形参的个数一致，则正常输出结果
        getsum(1, 20);
        // 2.如果实参的个数大于形参的个数，会取到形参的个数！
        getsum(1, 20, 10);
        // 3.如果实参的个数小于形参的个数，多于的形参定义为undefined，最终的结果是NaN
        // 形参可以看成是不用声明的变量，num2可以看成是一个变量，但是没有接收值，因此它的值是undefined
        // 建议：尽量让形参的个数与实参相匹配！
        getsum(1); // NaN
    ```
#### 4.函数的返回值
- 有时候，我们希望函数将返回值返回给调用者，此时通过return语句就可以实现；
- 语法格式：
    ```
    function 函数名() {
        return 需要返回的结果;
    }
    // 调用函数
    函数名();
    ```
- 函数只是实现某种功能，最终的结果需要返回给函数的调用者；
- 只有函数遇到return就把后面的结果，返回给函数的调用者。即**函数名() = return后面的结果**；
    ```
    // 函数的返回值
    function getRes() {
        return '我是库里的粉丝';
    }
    // 调用函数
    console.log(getRes());  // getRes() = '我是库里的粉丝'
    ```
- **return中止函数**
    - return语句后面的代码不会被执行！
        ```
         // 函数返回值的注意点：return会中止函数
            function GetSum(num1, num2) {
                return num1 + num2;
                alert('我是不会被执行的!');
            }
            console.log(GetSum(1, 399));
        ```
    - **return只能返回一个值**，如果用逗号隔开多个值，以最后一个值为准；
        ```
        // 函数返回值的注意点2：return只能返回一个值
        function fn(num1, num2) {
            return num1, num2;  // 返回的结果是最后一个值
        }
        console.log(fn(1, 88)); // 88
        ```
    - 同时返回多个值：**可以使用数组来实现**。
        ```
        function getResult(num1, num2) {
                return [num1 + num2, num1 - num2, num1 * num2, num1 / num2];
            }
            console.log(getResult(1, 3));
        ```
- **函数没有return语句时，直接返回undefined**；如果有return语句，则直接返回return语句后面的值；
    ```
        // 函数没有return，返回undefined
        function fun(num1, num2) {
    
        }
        console.log(fun(1, 2));
    ```
- **break、continue、return语句的区别**
    - break：结束当前的循环体(如for、while)
    - continue：跳出本次循环，继续执行下一次循环(如for、while)
    - return：不仅可以退出循环，还能返回return语句中的值，同时还可以结束当前函数体内的代码；
#### 5.通过榨汁机看透函数
![函数总结.png](https://upload-images.jianshu.io/upload_images/13407176-d2908345f3de596b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.arguments的使用
- 当我们不确定有多少个参数需要传递时，可以使用**arguments**来获取。在JavaScript中，arguments实际上它是当前函数的一个**内置对象**。所有的函数都内置了一个arguments对象，arguments对象中**存储了需要传递的所有实参**。
- **arguments展示的是一个伪数组**，因此可以遍历。伪数组具有下面的特点：
    - 具有数组的length属性；
    - 按索引方式存储数据
    - 不具有数组的pop()和push()方法；
    ```
    // arguments的使用
    function fun1() {
        console.log(arguments);  // arguments中传递了所有从外界传递过来的实参
        
    }
    fun1(1, 2, 3);
    ```
#### 7.函数可以调用另外一个函数
- 由于每个函数都是一个独立的代码块。因此，经常会用到函数相互调用的情况。
    ```
    function fun1() {
        console.log(11);
    }
    fun1();
    
    function fun2() {
        console.log('函数fun2开始调用函数fun1');
        fun1();
    }
    fun2();
    ```
#### 8.函数的两种声明方式
- 利用函数关键字function自定义函数(命名函数)；
    ```
    function fun() {
        
    }
    fun();
    ```
- **函数表达式(匿名函数)**:  var 变量名 = function() {};
    ```
  
    var fun = function(args) {
        console.log('我是函数表达式');
        console.log(args);
    }
    // 调用函数
    fun('我是库里的粉丝');
    ```
    - fun不是函数名，是变量名；
    - 函数表达式声明方式与声明变量差不多，只不过变量中存的是值，而函数表达式中存放的是函数；
    - 函数表达式也可以进行参数传递；
#### 9.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
