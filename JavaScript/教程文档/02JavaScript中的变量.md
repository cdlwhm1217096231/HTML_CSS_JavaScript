#### 1.什么是变量
- 变量是存放数据的**容器**，我们可以通过**变量名**来获取数据，甚至数据可以被修改。
#### 2.变量在内存的存储
- 本质：变量是程序在内存中申请的一块用来存放数据的空间。
![变量的本质.png](https://upload-images.jianshu.io/upload_images/13407176-b957a94fdd156278.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 2.变量的使用
- 变量在使用的时候分两步：先声明再赋值；
- **声明变量**
    - **var**是一个JS关键字，用来声明变量。使用该关键字声明变量后，计算机会自动为变量分配内存空间，不需要程序员管。
    - age是程序员自己定义的变量名，程序员通过变量名来访问内存中分配的空间。
```
var age;   // 声明一个名字为age的变量
```
- **赋值**
    - **=用来把右边的值赋给左边的变量空间中**，此处表示赋值的意思；
    - 变量值是程序员保存到变量空间中的值；
```
age = 10;  // 给age这个变量赋值为10
```
- **变量的初始化**：声明一个变量并赋值，称之为**变量的初始化**。
```
var age = 18;  // 声明变量的同时赋值为18
```
#### 3.变量的语法扩展
- **更新变量**：一个变量被重新赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。
```
var age = 18;
age = 81;  // 最后的结果是81，因为18被覆盖了！
```
- **同时声明多个变量**：同时声明多个变量时，只需要写一个var，多个变量名之间使用英文的逗号隔开。
```
  var age = 18, address = '火影村', salary = 2000;
```
- **声明变量的特殊情况**
![声明变量的特殊情况.png](https://upload-images.jianshu.io/upload_images/13407176-b204f64842efd2d7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
// 3.声明变量的特殊情况
// 3.1 只声明不赋值，程序也不知道里面存的是啥，所以结果是undefined，未定义的
var sex;
console.log(sex);
// 3.2 不声明不赋值，直接使用某个变量会报错的！Uncaught ReferenceError: tel is not defined
// console.log(tel);
// 3.3 不声明直接赋值使用，不提倡该种方式
qq = 110;
console.log(qq);
```
#### 4.变量的命名规范
- **由字母、数字、下划线、美元符号组成**，如usrAge、num01、_name；
- 严格区分大小写字母，var app; 和 var APP是两个变量；
- **不能以数字开头，18age是错误的**；
- 不能是关键字、保留字，var、for、else是错误的；
- **变量名必须有意义**，MMD BBD nl都不好，age就较好；
- **遵循驼峰命名法：首字母小写，后面的单词的首字母大写。userName**；
#### 5.资料下载
 - [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)