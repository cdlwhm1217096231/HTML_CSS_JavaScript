### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.运算符
- 运算符也称为**操作符**，是用于实现赋值、比较和执行算术运算等功能的符号。
- JavaScript中常用的运算符有：
    - 算术运算符
    - 递增和递减运算符
    - 比较运算符
    - 逻辑运算符
    - 赋值运算符
#### 2.算术运算符
- 概念：算术运算使用的符号，用于执行两个变量或值的算术运算。
![算术运算符.png](https://upload-images.jianshu.io/upload_images/13407176-4381531877ba6f48.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **浮点数存在的精度问题**：浮点数值的最高精度是17位小数，但在进行算术运算时，其精度远远不如整数。
- **不要直接判断两个浮点数是否相等**！
    ```
    console.log(1 + 1);
    console.log(1 - 1);
    console.log(1 * 1);
    console.log(1 / 1);
    // 1. % 取余运算符(取模)
    console.log(4 % 2);  // 0
    console.log(5 % 3);  // 2
    console.log(3 % 5);  // 3
    // 2. 浮点数 复数运算里面会有问题
    console.log(0.1 + 0.2);  // 0.30000000000000004
    console.log(0.07 * 100); // 7.000000000000001
    // 3. 不能直接对浮点数进行相比较，
    var num = 0.1 + 0.2;
    console.log(num === 0.3);  // false
    ```
- **怎么判断一个数能否被整除**？
    -  **该数的余数是0就说明这个数能被整除，即取余运算符%的主要用途**。
- **表达式和返回值**
    - 表达式：是由数字、运算符、变量等以能求得数值的有意义排列方法所得的组合；**简单理解：是由数字、运算符、变量等组成的式子**。
    ```
    // 表达式：由数字、运算符、变量等组成的式子，称为表达式
    console.log(1 + 1);  // 2就是返回值
    // 在程序中，2 = 1 + 1，将右边的表达式计算完毕，把返回值给左边
    var num = 1 + 1;
    ```
#### 3. 递增和递减运算符
- 如果需要反复给数字变量添加或减去1，可以使用**递增++和递减--运算符**来完成。
- 在JavaScript中，递增++和递减--运算符既可以放在变量前面，也可以放在变量后面。**放在变量前面时，称为前置递增(递减)运算符；放在变量后面时，称为后置递增(递减)运算符**。
- **递增和递减运算符都必须和变量搭配使用**！
##### 3.1 前置递增运算符
- \++num前置递增，就是自加1，类似于num = num + 1，但是++num写起来更简单。
- 使用口诀：**先自加，后返回值**。
    ```
    // 1.想要一个变量自己加1, num = num + 1比较麻烦
    var num = 1;
    num = num + 1;  // ++num
    num = num + 1;
    console.log(num); // 3
    // 2.前置递增运算符， ++写在变量的前面
    var age = 18;
    ++age;  // 类似于 age = age + 1;
    console.log(age);
    // 3.先加1，后返回值
    var p = 10;
    console.log(++p + 10);  // 21
    ```
##### 3.2 后置递增运算符
- num\++后置递增，就是自加1，类似于num = num + 1，但是num++写起来更简单。
- 使用口诀:**先返回原值，后自加**。
    ```
    // 后置递增运算符
    var num = 10;
    num++;  // num = num + 1；++num
    console.log(num);
    // 1.前置自增和后置自增如果单独使用，效果是一样的
    // 2.后置的自增 口诀：先返回原值，后自加1
    var age = 10;
    console.log(age++ + 10);  // 20
    ```
##### 3.3 前置递增和后置递增小结
- 前置递增和后置递增运算符可以简化代码的编写，让变量的值+1，比以前的写法更简单；
- 单独使用时，运行结果相同；
- 与其他代码联用时，执行结果会不同；
- 后置：先原值运算，后自加（先人后己）
- 前置：先自加，后运算（先己后人）
- **开发中，大多数使用后置递增/递减，并且代码独占一行**。例如：num++或num--；
#### 4.比较运算符
- 概念：比较运算符(关系运算符)是**两个数据进行比较时所使用的运算符**，比较运算后，会**返回一个布尔值true/false作为比较运算的结果**。
![比较运算符.png](https://upload-images.jianshu.io/upload_images/13407176-c35317aa129e5378.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **=小结**
![=小结.png](https://upload-images.jianshu.io/upload_images/13407176-4e16a372ade8a517.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    console.log(3 >= 5);  // false
    console.log(4 <= 9);  // true
    // 1.程序中，等于号是==，默认转换数据类型 会把字符串型的数据转换为数字型，只要求值相等就可以！
    console.log(3 == 5);  //false
    console.log('curry' == 'nba'); // false
    console.log(18 == 18); // true
    console.log(18 == '18');  // true  重点！
    console.log(18 != 18);  // false
    // 2.程序中会有全等，一模一样。要求两侧的值并且数据类型完全一致才可以true
    console.log(18 === 18);  // true
    console.log(18 === '18'); // false
    ```
#### 5.逻辑运算符
- 概念：逻辑运算符是用来进行布尔值运算的运算符，它的返回值也是布尔值。**后面开发中经常用于多个条件的判断**。
![逻辑运算符.png](https://upload-images.jianshu.io/upload_images/13407176-a80a8998279cc9ec.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 1.逻辑与：&& and 两边都为true，结果才是true；只有有一侧是false，结果就是false
    console.log(3 > 5 && 3 > 2);  // false
    console.log(3 < 5 && 3 > 2);  // true
    // 2.逻辑或：|| or  两边都为false，结果才是false；只有有一侧是true，结果就是true
    console.log(3 > 5 || 3 > 2); // true
    console.log(3 > 5 || 3 < 2); // false
    // 3.逻辑非 ! not
    console.log(!true);  // false
    ```
- **短路运算(逻辑中断)**：当有多个表达式(值)时，左边的表达式值可以确定结果时，就不会再继续计算右边表达式的值。
    - **逻辑与**
        - 语法：**表达式1 && 表达式2**；
        - 如果第一个表达式的值为真，则返回表达式2；
        - 如果第一个表达式的值为假，则返回表达式1；
    - **逻辑或**
        - 语法：**表达式1 || 表达式2**； 
        - 如果第一个表达式的值为真，则返回表达式1；
        - 如果第一个表达式的值为假，则返回表达式2；
    ```
    // 1.用布尔值参与的运算true && false == false
    // 2. 123 && 456是值或者表达式参与逻辑运算？
    // 3.逻辑与短路运算：如果表达式1结果为真，则返回表达式2；如果表达式1结果为假，那么返回表达式1
    console.log(123 && 456);  // 456
    console.log(0 && 456);  // 0
    console.log(0 && 1 + 2 && 456 * 1234389); // 0
    console.log('' && 1 + 2 && 456 * 1234389); // ''
    // 如果有空的或者否定的为假，其余是真的 0 '' null undefined NaN
    
    // 4.逻辑或短路运算：如果表达式1结果为真，则返回的是表达是1；如果表达式1结果为假，则返回表达式2
    console.log(123 || 456);  // 123
    console.log(123 || 789 || 893 * 34343);  // 123
    console.log(null || 8034 || 343 * 9934);  // 8043
    ```
#### 6.赋值运算符
- 概念：用来把数据赋值给变量的运算符。
![赋值运算符.png](https://upload-images.jianshu.io/upload_images/13407176-953d98f646131e43.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    num = 10;
    // num = num + 1;  num++
    num = num + 2;  // num += 2
    console.log(num);
    var age = 2;
    age *= 3;
    console.log(age);
    ```
#### 7.运算符优先级
![运算符优先级.png](https://upload-images.jianshu.io/upload_images/13407176-5de26cb7ded742c9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 一元运算符中的**逻辑非优先级很高**；
- 逻辑与比逻辑非优先级高；
#### 8.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)