### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.内置对象
- JavaScript中的对象分为3种：**自定义对象、内置对象、浏览器对象**；
- **前两种对象是JS中的基础内容，属于ECMAScript**，第三个浏览器对象属于JS独有的，后面JS API中会有讲解；
- **内置对象**：JS语言自带的一些对象，这些对象提供给开发者使用，并提供了一些常用的或者最基本且必要的功能(属性和方法)；
- JavaScript中提供了多个内置对象：Math、Date、Array、String等；
#### 2.查文档
- MDN：学习内置对象的使用时，只要学会其常用成员的使用即可。可以通过查阅文档学习，通过MDN/W3C来查阅；
- Mozilla开发者网络(MDN)提供了有关开发网络技术(Open Web)的信息，包括HTML、CSS和万维网及HTML5应用的API；
- [MDN官方网站](https://developer.mozilla.org/zh-CN/)
- 如何学习对象中的方法？
    - 首先查阅该方法的功能；
    - 接着查看里面参数的意义和类型；
    - 再查看返回值的意义和类型；
    - 最后，通过demo进行测试；
#### 3.Math对象
- Math对象：不是一个构造函数，所以不需要new来调用，而是直接使用里面的属性和方法。
    ```
    Math.PI  // 圆周率
    Math.floor()  // 向下取整
    Math.ceil() // 向上取整
    Math.round()
    // 四舍五入
    Math.abs()  // 绝对值
    Math.max()/Math.min()  // 最大值或最小值
   
    
    
    // 实际案例如下：
    // 绝对值
    console.log(Math.abs(-1));
    console.log(Math.abs('-1'));  // -1 隐式转换，会把字符串型的-1转换为数字型的-1
    console.log(Math.abs('curry')); // NaN
    
    // 取三个整数方法
    console.log(Math.floor(-1.2));  // 向下取整-2
    console.log(Math.ceil(1.9));  // 向上取整2
    console.log(Math.round(3.4)); // 3 四舍五入,其他数字都是四舍五入，但是.5特殊，它往大了取！
    console.log(Math.round(-1.5));  // -1
    ```
- **随机数方法random()**
    - random()返回一个随机的小数，小数的范围是[0,1)；
    - random()函数没有传入的参数；
    - 返回的是一个随机小数[0, 1)；
        ```
        // 随机数方法random()：返回一个随机小数[0, 1)
        console.log(Math.random());
        
        
        // 案例：得到两个数之间的随机整数，并且包含两个端点
        // 记住公式：Math.floor(Math.random() * (max - min + 1)) + min
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        var res = getRandom(1, 10);
        console.log(res);
        
        
        // 案例：随机点名
        var arr = ['curry', 'durant', 'harden', 'james']
        console.log(arr[getRandom(0, arr.length - 1)]);
        
        
        // 案例：猜数字游戏
        var random = getRandom(1, 10);
        while (true) {
            var num = prompt('你来猜？输入1~10之间的一个数字：');
            if (num > random) {
                alert('你猜大了');
            } else if (num < random) {
                alert('你猜小了');
            } else {
                alert('恭喜你答对了!');
                break;
            }
        }
        ```
#### 4.日期对象
- Date()对象是一个构造函数，必须使用new来调用创建我们的日期对象；
- 参数常用的写法：
    ```
    数字型 2020,02,15
    字符串型 '2020-02-15 14:23:56'
    ```
- Date()方法使用实例如下：
    ```
    // 日期对象Date
    var obj = new Object();  // 创建了一个对象
    var arr = new Array();  // 创建了一个数组对象
    // 如果没有参数，返回系统当前的时间
    var date = new Date();  // 创建了一个日期对象
    console.log(date);
    var date1 = new Date(2020, 02, 15);
    console.log(date1);  // 返回的是3月不是2月
    var date2 = new Date('2020-02-15 14:26:59');  // 常用的写法
    console.log(date2);
    ```
- **日期的格式化**
    - 需要获取日期指定的部分，因此要手动得到这种格式。
    ![日期的格式化.png](https://upload-images.jianshu.io/upload_images/13407176-3b2e7b4eb8414c73.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 格式化日期 年月日
    var date = new Date();
    console.log(date.getFullYear());  // 返回当前日期的年
    console.log(date.getMonth());  // 返回的月份+1等于实际的月份即3月
    console.log(date.getDate()); // 返回的是几号
    console.log(date.getDay());  // 3 周六返回的是6，周一返回的是1，周日返回的是0
    // 返回2020年2月15日 星期六
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var day = date.getDay();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    console.log('今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day]);
    
    
    // 格式化日期 时分秒
    var date = new Date();
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    // 案例：要求封装一个函数返回当前的时分秒
    function getTimer() {
        var time = new Date();
        var h = time.getHours();
        h = h < 10 ? '0' + h : h;
        var m = time.getMinutes();
        m = m< 10 ? '0' + m : m;
        var s = time.getSeconds();
        s = s < 10 ? '0' + s : s;
        return h + ':' + m + ':' + s;
    }
    console.log(getTimer());
    ```
- **获取日期总的毫秒(时间戳)形式**
    - Date对象是基于1970年1月1日(世界标准时间)算起的毫秒数，我们经常利用总的毫秒数来计算时间，因为它更准确。
        ```
        // 获取Date对象总的毫秒数(时间戳)，不是当前时间的毫秒数，而是距离1970年1月1日后算起的总毫秒数
        // 1.通过valueOf()或者getTime()
        var date = new Date();
        console.log(date.valueOf());
        console.log(date.getTime());
        // 2.简单写法(实际开发中最常用的方法！)
        var date11 = +new Date();  // +new Date()返回的就是总的毫秒数
        console.log(date11);
        // 3.更简单的方法(H5新增的特性)
        console.log(Date.now());
        ```
    - **倒计时案例**
        ```
        // 案例：倒计时效果
        /* 先把输入的时间减去现在的时间就是剩余时间即倒计时。又因为不能用时分秒直接相减。因此，把剩余时间转换为时间戳来实现。再把剩余时间总的毫秒数转换为天 时 分 秒
        转换公式如下：
        d = parseInt(总秒数/60/60/24);
        h = parseInt(总秒数/60/60%24);
        m = parseInt(总秒数/60%60);
        s = parseInt(总秒数%60); */
        function countDown(time) {
            var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
            var userInputTime = +new Date(time); // 返回用户输入的时间
            var res = (userInputTime - nowTime) / 1000; // res就是剩余时间总的毫秒数
            var d = parseInt(res / 60 / 60 / 24);
            d = d < 10 ? '0' + d : d;
            var h = parseInt(res / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            var m = parseInt(res / 60 % 60);
            m = m < 10 ? '0' + m : m;
            var s = parseInt(res % 60);
            s = s < 10 ? '0' + s : s;
            return d + '天' + h + '时' + m + '分' + s + '秒';
        }
        console.log(countDown('2020-02-15 18:16:59'));
        var date = new Date();
        console.log(date);
        ```
#### 5.数组对象
- 创建数组对象的两种方式：
    - 字面量方式；
    - new Array()；
        ```
        // 1.字面量方式
        var arr = ['curry', 'harden', 'durant'];
        // 2.new Array()方式
        var arr1 = new Array();  // 创建了一个空的数组
        var arr2 = new Array(2);  // 这个2表示数组的长度为2，表示数组中有两个元素
        console.log(arr2);
        var arr3 = new Array(3, 3);  // 等价于创建了数组[2,3]
        console.log(arr3);
        ```
- **检测是否为数组**
    - (1). instanceof是一个运算符，它可以用来检测是否为数组；
    - (2). Array.isArray(参数)方法[H5新增的特性]
        ```
        // 检测是否为数组：instanceof或isArray()方法
        var arr = [];
        var obj = {};
        console.log(arr instanceof Array);
        console.log(obj instanceof Array);
        console.log(Array.isArray(arr));
        console.log(Array.isArray(obj));
        ```
- **添加或删除数组元素的方法**
![添加或删除数组元素的方法.png](https://upload-images.jianshu.io/upload_images/13407176-3053b7180a59bbe6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 添加或删除数组元素方法
    // push()
    var arr = [1, 2, 3];
    // arr.push(4, 'curry');
    console.log(arr.push(4, 'curry')); // 返回的是新数组的长度
    console.log(arr);
    // unshift()
    console.log(arr.unshift('red', 'blue'));
    console.log(arr);
    // pop()
    console.log(arr.pop());  // 返回值是curry
    console.log(arr);
    // shift()
    console.log(arr.shift());
    console.log(arr);
    ```
    - push():数组尾部追加元素；
        - push():在数组末尾添加一个或者多个数组元素；
        - push()的目的是给数组追加新的元素；
        - push()中的元素直接写需要追加的数组元素；
        - push()操作结束后返回的是新数组的长度；
        - 原数组也会发生变化；
    - unshift():数组头部追加元素；
        - unshift():在数组开头添加一个或者多个数组元素；
        - unshift()的目的是给数组追加新的元素；
        - unshift()中的元素直接写需要追加的数组元素；
        - unshift()操作结束后返回的是新数组的长度；
        - 原数组也会发生变化；
    - pop():删除数组中的最后一个元素
        - pop()的目的是删除数组的最后一个元素，记住一次只能删除一个元素；
        - pop()没有参数；
        - pop()操作结束后返回的是被删除的那个元素；
        - 原数组也会发生变化；
    - shift():删除数组中的第一个元素
        - shift()的目的是删除数组的第一个元素，记住一次只能删除一个元素；
        - shift()没有参数；
        - shift()操作结束后，返回的是被删除的那个元素；
        - 原数组也会发生变化；
- **数组排序**
![数组排序.png](https://upload-images.jianshu.io/upload_images/13407176-a32afe2d119f3149.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 数组翻转与排序
    // 1.翻转数组
    var arr = ['pink', 'red', 'blue'];
    arr.reverse();
    console.log(arr);
    // 2.冒泡排序
    var arr1 = [13, 4, 77, 1, 7];
    arr1.sort(function(a, b) {
        // return a - b;  // 按照升序进行排序
        return b - a;  // 按照降序进行排序
    });
    console.log(arr1);
    ```
- **数组索引方法**
![数组索引方法.png](https://upload-images.jianshu.io/upload_images/13407176-2f90d55cbc25b364.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 数组索引方法：indexOf(数组元素)和lastindexOf(数组元素)
    var arr = ['red', 'green', 'blue', 'pink', 'blue'];
    console.log(arr.indexOf('blue'));  // 只返回第一个满足条件的索引号
    console.log(arr.indexOf('yellow'));  // 如果该数组中找不到元素，则返回的是-1
    console.log(arr.lastIndexOf('blue')); // 注意返回的索引号是4，只是查找顺序是从后往前查找！
    console.log(arr.lastIndexOf('yellow'));
    ```
- **数组转换为字符串**
![数组转换为字符串.png](https://upload-images.jianshu.io/upload_images/13407176-da9c19e2a777e39f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 数组转换为字符串
    // 1.toString()
    var arr = [1, 2, 3, 'curry'];
    console.log(arr.toString()); 
    // 2.join('分隔符')
    console.log(arr.join());
    console.log(arr.join('-'));
    console.log(arr.join('&'));
    ```
- **其他重要方法**
![其他重要方法.png](https://upload-images.jianshu.io/upload_images/13407176-bb2846483b617862.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.字符串对象
- **基本包装类型**：把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法。
- 为了便于操作基本数据类型：JavaScript还提供了三个特殊的引用类型：String、Number、Boolean。
    ```
    // 对象才会有属性和方法，复杂数据类型才有属性和方法
    // 简单数据类型为什么会有length属性呢？
    // 基本包装类型：将简单数据类型包装成为复杂数据类型
    // (1)把简单数据类型包装为复杂数据类型
    var temp = new String('andy');
    // (2)把临时变量的值赋值给str
    str = temp;
    // (3)销毁临时变量
    temp = null;
    ```
- **字符串的不可变性**：是指里面的值不可变，虽然看上去可以改变内容，但是其实是地址变了。实质是在内存中新开辟了一个内存空间。

![字符串的不可变性.png](https://upload-images.jianshu.io/upload_images/13407176-8b87beedff7c4b94.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 字符串的不可变性
    var str = 'andy';
    console.log(str);
    str = 'red';
    console.log(str);
    ```
- **因为字符串的不可变性，所以不要大量拼接字符串**！
    ```
    // 因为字符串的不可变性，所以不要大量拼接字符串！
    var str = '';
    for (var i = 1; i <= 1000000; i++) {
        str += i;
    }
    console.log(str); // 这个结果需要花费大量时间来显示，因为需要不断开辟新的内存空间
    ```
- **根据字符返回位置**
    - 字符串的所有方法，都不会修改字符串本身(字符串是不可变的)，操作完成后会返回一个新的字符串。
![根据字符返回位置.png](https://upload-images.jianshu.io/upload_images/13407176-92a66e2a1742c9a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 根据字符返回位置：indexOf('要查找的字符'，[起始的位置])
    var str = '改革春风吹满地，春天来了';
    console.log(str.indexOf('春'));
    console.log(str.indexOf('春', 3));  // 从索引号3的位置开始查找字符'春'
    console.log(str.lastIndexOf('吹'));
    ```
- **根据位置返回字符[重点]**
![根据位置返回字符.png](https://upload-images.jianshu.io/upload_images/13407176-7061f8dc71d7386d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 根据位置返回字符
    // 1.charAt(index):根据位置返回字符
    var str = 'Curry';
    console.log(str.charAt(3));
    // 遍历所有的字符
    for (var i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
    // 2.charCodeAt(index):根据位置返回字符的ASCII码，目的：判断用户按下了哪个键
    console.log(str.charCodeAt(3));
    // 3.str[index]  (H5新增特性)
    console.log(str[2]);
    ```
- **字符串操作方法[重点]**
![字符串操作方法.png](https://upload-images.jianshu.io/upload_images/13407176-e3d6d8a97a8f0f27.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 字符串的操作方法
    // 1.concat('字符串1', '字符串2', ...)
    var str = 'Curry';
    console.log(str.concat(' Harden'));
    // 2.substr('截取的起始位置', '截取几个字符')
    var str1 = 'CurryHarden';
    console.log(str1.substr(5, 6));  // Harden
    ```
- **其他方法**
    ```
    // 其他方法
    // 1.替换字符replace('被替换的字符', '替换后的字符')，它只会替换第一次出现的字符
    var str = 'Harden Curry Durant';
    console.log(str.replace(' ', '+'));
    // 案例：将所有的字符o替换为*
    var str = 'abcoefoxyozzopp';
    while(str.indexOf('o') != -1) {
        str = str.replace('o', '*');
    }
    console.log(str);
    // 2.字符转换为数组split('分隔符')，类似于前面的join
    var str = 'Curry, Durant, Harden';
    console.log(str.split(','));
    var str = 'Curry&Durant&Harden';
    console.log(str.split('&'));
    // 3.toUpperCase()：转换为大写字母
    // 4.toLowerCase()：转换为小写字母
    ```
#### 7.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)