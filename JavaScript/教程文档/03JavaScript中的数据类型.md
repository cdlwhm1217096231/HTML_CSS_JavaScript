### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.数据类型简介
- **为什么需要数据类型**？
    - 在计算机中，不同的数据所占用的存储空间是不同的，为了便于把数据分成所需内存大小不同的数据，充分利用存储空间，于是定义了不同的数据类型。**简单来说，数据类型就是数据的型号**。
- **变量的数据类型**
    - 变量是用来存储值的所在处，它们有名字和数据类型。变量的数据类型决定了如何将代表这些值的位存储到计算机的内存中。**JavaScript是一种弱类型或者说动态语言**。这意味着不用提前声明变量的类型，在程序运行过程中，变量的数据类型会被自动确定。
    - **在代码运行时，变量的数据类型是由JS引擎 根据 = 右边变量值的数据类型来判断的**，运行完毕后，变量就确定了数据类型。
    - **JavaScript拥有动态类型，同时也意味着相同的变量可以用作不同的类型**，如下所示：
    ```
    var x = 6;   // x为数字类型
    var x = 'curry_coder';  // x为字符串类型
    ```
- **数据类型的分类**
    - JS中把数据类型分为两类：
        - 简单数据类型（Number、String、Boolean、undefined、Null）
        - 复杂数据类型（object）
#### 2.简单数据类型
- JavaScript中的简单数据类型及说明如下：
![JavaScript中的简单数据类型.png](https://upload-images.jianshu.io/upload_images/13407176-ac99be9fcf7ad7b4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 2.1 数字类型Number
- JavaScript中的数字类型既可以用来保存整数值，也可以保存小数(浮点数)。
```
var age = 31;  // 整数
var temperature = 23.2;  // 浮点数
```
- **数字型不同进制的表示关系**
    - 最常用的进制有二进制、八进制、十进制、十六进制。**在JS中八进制前面加0，十六进制前面加0x**。
    ```
    // 1.八进制数字序列范围：0到7
    var num1 = 07;  // 对应十进制的7
    var num2 = 019;  // 对应十进制的19
    var num3 = 08;  // 对应十进制的8
    
    // 2.十六进制数字序列范围：0到9及A到F
    var num = 0xa;  
    ```
- **数字型范围**
    - JavaScript中数值的最大和最小值
    ```
    alert(Number.MAX_VALUE);  // 1.797693134e+308
    alert(Number.MIN_VALUE);  // 5e-324
    ```
- **数字型中的三个特殊值**
    - Infinity:代表无穷大，大于任何值
    - -Infinity:代表无穷小，小于任何值
    - NaN:Not a number，代表一个非数值
    ```
    alert(Infinity);  // 无穷大，大于任何值
    alert(-Infinity); // 无穷小，小于任何值
    alert(NaN);    // 代表一个非数值
    ```
- **isNaN()**：用来判断一个变量是否是非数字的类型，如果是数字返回的是false，如果不是数字返回的是true。
![isNaN().png](https://upload-images.jianshu.io/upload_images/13407176-0b6c2e60805a7264.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
console.log(isNaN(12));  // false
console.log(isNaN('Curry_Coder'));  // true
```
#### 3.字符串型string
- 字符串型可以是引号中的任意文本，其语法为**双引号""或单引号''**。
- **因为HTML标签中的属性使用的是双引号，所以在JS中更推荐使用的是单引号**。
- **字符串引号的嵌套**
    - JS可以用单引号嵌套双引号，或者用双引号嵌套单引号(**外双内单，外单内双)**   
    ```
    var strName = '我的你"爸爸"';
    var schName = "我的母校是'tlu'";
    ```
- **字符串中的转义字符**
    - 类似于HTML中的特殊字符，字符串中也有特殊字符，称之为转义字符。**转义字符都是以\开头的**，常用的转义字符及说明如下：
    ![字符串中的转义字符.png](https://upload-images.jianshu.io/upload_images/13407176-4b4b63db1594fea0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **字符串的长度**
    - 字符串是由若干的字符组成的，这些字符的数量就是字符串的长度。通过字符串的**length**属性就可以获取整个字符串的长度。
    ```
    // 检测获取字符串的长度length
    var str = 'my name is curry_coder';
    console.log(str.length);  // 22
    ```
- **字符串的拼接**
    - 多个字符串之间可以使用+进行拼接，**其拼接方式是字符串 + 任何类型 = 拼接之后的新字符串**。
    - 拼接前会把与字符串相加的任何类型转换成字符串，重新拼接成一个新的字符串！
    - **+号总结口诀：数值相加，字符相连**。
    ```
    console.log('curry' + 18);  // 'curry18'
    console.log('curry' + true); // 'currytrue'
    console.log(12 + 12);  // 24
    console.log('12' + '12'); // '1212'
    ```
- **字符串拼接加强**
    - 实际中，经常将字符串和变量来进行拼接，因为变量可以很方便地修改里面的值；
    - 变量是不能添加引号的，因为加引号的变量就会变成字符串；
    - 如果变量两侧都有字符串拼接，口诀：**引引加加**，删掉数字，变量写在中间。
    ```
    var age = 18;
    console.log('curry' + age + '岁');
    // 变量和字符串相连的口诀：引引加加
    console.log('coder' + age + '岁');
    ```
#### 4.布尔类型Boolean
- 布尔类型有两个值：false和true。其中，true表示真，false表示假。
- 布尔型和数字型相加时，true的值为1，false的值为0。
    ```
    console.log(flag + 1);  // ture参与加法运算当1来看
    console.log(_flag + 1);  // false参与加法运算当0来看
    ```
#### 5.undefined和null
- undefined: 一个声明后没有赋值的变量会有一个默认值undefined(**如果进行相连或者相加时，注意结果**)。
- 一个声明的变量给null值时，里面存放的值为空(学习对象时，后面会继续研究null)
    ```
    // 如果一个变量声明未赋值就是undefined 未定义类型
    var str;
    console.log(str);
    var variable = undefined;
    console.log(variable + 'curry');  // 'undefinedcurry'
    console.log(variable + 1);  // undefined和数字相加，最后的结果是NaN
    // null（空值）
    var space = null;
    console.log(space + 'curry');  // 'nullcurry'
    console.log(space + 1);  // 1
    ```
#### 6.获取变量的数据类型
- **获取检测变量的数据类型**
    - typeof可以用来获取检测变量的数据类型。
    ```
    var num = 10;
    console.log(typeof num);  // number
    var str = 'curry';
    console.log(typeof str);  // string
    var flag = true;
    console.log(typeof flag);  // blooean
    var vari = undefined;
    console.log(typeof vari);  // undefined
    var timer = null;
    console.log(typeof null); // object
    
    // prompt取过来的值是字符串型的!
    var age = prompt('请输入你的年龄: ');
    console.log(age);
    console.log(typeof age);
    ```
- **字面量**
    - 字面量是在源代码中一个固定值的表示方法，通俗来说，就是字面量表示如何表达这个值。
        - 数字字面量：8,9,10；
        - 字符串字面量：'curry','coder'；
        - 布尔字面量：true,false；
    ```
    console.log(18);
    console.log('18');
    console.log(true);
    console.log(undefined);
    console.log(null);
    ```
    ![字面量在chrome控制台中的不同颜色显示.png](https://upload-images.jianshu.io/upload_images/13407176-f1b2483fa1176f4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 7.数据类型转换
- 使用表单、prompt获取过来的数据默认是**字符串类型的**，此时就不能直接简单的进行加法运算，而是需要转换变量的数据类型。通俗来说，就是**把一种数据类型的变量转换成另一种数据类型**。
- 通常会实现3种方式的数据类型转换：
    - 转换为字符串类型
    - 转换为数字类型
    - 转换为布尔类型
- **转换为字符串类型**
    - toString和String的使用方式不一样；
    - 三种转换方式，我们更喜欢用第三种加号字符串转换方式，这一方式也称为**隐式转换**。
    ```
    // 1.把数字型转换成字符串类型
    var num = 10;
    var str_num = num.toString();
    console.log(typeof str_num);
    // 2.利用String(变量)
    console.log(typeof String(num));
    // 3.利用+拼接字符串实现转换效果
    console.log(typeof (num + ''));
    ```
![转换为字符串类型.png](https://upload-images.jianshu.io/upload_images/13407176-1ffdf5eb186b1b11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **转换为数字类型[重点]**
    - 注意：**parseInt和parseFloat单词的大小写**，必须注意！
    - 隐式转换是我们在进行算术运算时，JS会自动转换了数据类型；
    ```
    // 转换为数字类型
    // 1.parseInt(变量)可以把字符型的转换为数字型，得到的是整数
    var age = prompt('请输入你的年龄: ');
    console.log(typeof(parseInt(age)));
    console.log(parseInt('3.14'));  // 取整，得到的是3
    console.log(parseInt('3.94'));  // 取整，得到的是3
    console.log(parseInt('120px'));  // 120会去掉px等单位
    console.log(parseInt('curry23px')); // NaN
    // 2.parseFloat(变量)可以把字符型的转换为数字型，得到的是浮点数
    console.log(parseFloat('3.14'));  // 3.14
    console.log(parseFloat('120.45px')); // 120.45
    console.log(parseFloat('coder0.618px')); // NaN
    // 3.利用Number(变量)
    var str = '1234567';
    console.log(Number(str));
    console.log(Number('12'));
    // 4.利用了算术运算 - * / 可以实现隐式转换
    console.log('12' - 11);  // 1
    console.log('12' * 10);  // 120
    console.log('123' - '110'); // 13
    ```
![转换为数字类型.png](https://upload-images.jianshu.io/upload_images/13407176-bbb2273ed5dc222f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **转换为布尔类型**
    - 代表空、**否定的值**都会被转换为false。例如：''、0、NaN、null、undefined；
    - 其余值都会被转换为true；
    ```
     // 转换为布尔类型
    console.log(Boolean(''));   // false
    console.log(Boolean(0));    // false
    console.log(Boolean(NaN));  // false
    console.log(Boolean(null));  // false
    console.log(Boolean(undefined));  // false
    console.log('----------------------------');
    console.log(Boolean(123));  // true
    console.log(Boolean('curry_coder'));  // ture
    ```
![转换为布尔类型.png](https://upload-images.jianshu.io/upload_images/13407176-333c2d1f5b0e2139.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 8.扩展内容
- **解释型语言和编译型语言**    
    - 计算机不能直接理解任何除机器语言以外的语言，所以必须要把程序员所写的程序语言翻译成机器语言才能执行程序。程序语言翻译成机器语言的工具，被称为翻译器。
    ![翻译器执行过程.png](https://upload-images.jianshu.io/upload_images/13407176-96b9385ff05bef8f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - 翻译器翻译的方式有两种：一个是**编译**，另一个是**解释**。两种方式之间的区别在于**翻译的时间点不同**；
    - 编译器是在**代码执行之前进行编译，生成中间的代码文件**；
    - 解释器是在**运行时进行及时解释**，并立即执行(当编译器以解释方式运行的时候，也称为解释器)；
    ![编译型语言与解释型语言对比.png](https://upload-images.jianshu.io/upload_images/13407176-c5290de4f9f30a98.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **标识符**
    - 标识符：指开发人员为变量、属性、函数、参数取的名字；
    - **标识符不能是关键字或保留字**；
- **关键字**
    - 关键字：指JS本身已经使用了的字，不能再用它们充当变量名、方法名；
    - 包括：break、if、else、with、throw、for、in、new、return、this、void、while等；
- **保留字**
    - 保留字：实际上就是预留的关键字，意思是现在虽然还不是关键字，但是未来可能会成为关键字，同样不能使用它们当变量名或方法名；
    - 包括：boolean、byte、char、class、const、debugger、double、enum、int、volatile、super、goto等；
#### 9.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)