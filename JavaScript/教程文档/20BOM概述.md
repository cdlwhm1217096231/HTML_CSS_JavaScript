### 技术交流QQ群:1027579432，欢迎你的加入！

#### 1.BOM概述
- **什么是BOM**：BOM(Browser Object Model)即**浏览器对象模型**，它提供了独立于内容而与**浏览器窗口进行交互的对象**，其核心对象是window。
- BOM由一系列相关的对象构成，并且每个对象都提供了很多方法和属性。
- BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。
- **DOM与BOM的对比**：
    - **DOM**
        - 文档对象模型
        - DOM就是把**文档**当作一个**对象**来看待
        - DOM的顶级对象是**document**
        - DOM主要学习的是操作页面元素
        - DOM是W3C标准规范
    - **BOM**
        - 浏览器对象模型
        - 把**浏览器**当作一个**对象**来看待
        - BOW的顶级对象是**window**
        - BOM学习的是浏览器窗口交互的一些对象
        - BOM是浏览器厂商在各自浏览器上定义的，兼容性较差
- **BOM的构成**：BOM比DOM更大，它包含了DOM。
![BOM的构成.png](https://upload-images.jianshu.io/upload_images/13407176-b7904bfc89436009.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **window对象是浏览器的顶级对象**，它具有双重角色。
    - 它是JS访问浏览器窗口的一个接口；
    - **它是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法**。
- 在调用的时候可以省略window，前面学习的对话框都属于window对象的方法，如alert()、prompt()等。注意：**window对象下的一个特殊属性window.name**，可以使用console.dir(window)来查看window对象所有的方法和属性。

#### 2.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)