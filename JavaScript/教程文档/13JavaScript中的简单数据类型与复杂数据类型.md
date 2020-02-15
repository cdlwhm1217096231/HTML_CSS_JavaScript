### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.简单数据类型与复杂数据类型
- 简单数据类型也称为基本数据类型或者**值类型**，复杂数据类型也称为**引用类型**。
    - **值类型**：简单数据类型或者基本数据类型，在存储时变量中存储的是值本身。因此，也叫作值类型。string、number、boolean、undefined、null；
        ```
        // 简单数据类型null，返回的是一个空的对象
        var timer = null;
        console.log(typeof timer);  // object对象
        // null应用场景：如果有变量以后打算存储为对象，暂时没想好放啥，这时候就给null
        ```
    - **引用类型**：复杂数据类型，在存储时变量中存储的仅仅是地址(引用)，因此叫做引用数据类型。通过new关键字创建的对象(系统对象、自定义对象，如Object、Array、Date等)；
#### 2.堆和栈
![堆和栈空间.png](https://upload-images.jianshu.io/upload_images/13407176-202401d4a3ab4fd1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 堆和栈空间分配的区别：
    - **栈(操作系统)**：由操作系统自动分配释放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈。**简单数据类型存放在栈中**。
    - **堆(操作系统)**：存储复杂类型(对象)，一般由程序员分配释放，。如果程序员不释放，则由垃圾回收机制回收。**复杂数据类型存放在堆中**。
- **JavaScript中没有堆和栈的概念，通过堆栈的方式，更容易理解代码的一些执行方式**。
#### 3.简单类型的内存分配
- 值类型(简单数据类型)：string、number、boolean、undefined、null；
- 值类型变量的数据直接存放在变量(栈空间)中；
![简单数据类型的内存分配.png](https://upload-images.jianshu.io/upload_images/13407176-469c743f1dbe5152.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 4.复杂数据类型的内存分配
- 引用类型(复杂数据类型)：通过new关键字创建的对象(系统对象、自定义对象)，如Object、Array、Date等；
- 引用类型变量(栈空间)中存放的是地址，真正的对象实例存放在堆空间中。即首先在栈中存放地址(十六进制表示)，然后这个地址指向堆中的数据。
![复杂数据类型的内存分配.png](https://upload-images.jianshu.io/upload_images/13407176-20595f7a452f8b23.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![简单数据类型与复杂数据类型的内存分配.png](https://upload-images.jianshu.io/upload_images/13407176-472f3405fdf8e0e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 5.简单数据类型传参
- 函数的形参也可以看成是一个变量，当我们把一个值类型变量作为参数传递给函数形参时，其实是把变量在栈空间中的值复制了一份传给形参，因此在方法内部对形参做任何修改，都不会影响到外部变量；
![简单数据类型传参.png](https://upload-images.jianshu.io/upload_images/13407176-285a41fcebb16399.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 简单数据类型传参
    function fn(a) {
        a++;
        console.log(a);
    }
    var x = 10;
    fn(x);
    console.log(x);
    ```
#### 6.复杂数据类型传参
- 函数的形参也可以看成是一个变量，当我们把引用类型变量传递给形参时，其实是把变量在栈空间中保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象。
![复杂数据类型的传参.png](https://upload-images.jianshu.io/upload_images/13407176-ddc45d0ee8526130.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    ```
    // 复杂数据类型传参
    function Person(name) {
        this.name = name;
    }
    function f1(x) {
        console.log(x.name);  // 刘德华
        x.name = '张学友';
        console.log(x.name);  // 张学友
    }
    
    var p = new Person('刘德华');
    console.log(p.name);  // 刘德华
    f1(p);
    console.log(p.name);  // 张学友
    ```
#### 7.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)