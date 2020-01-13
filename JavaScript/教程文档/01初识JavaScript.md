### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.JavaScript历史
- 布兰登-艾奇(Brendan Eich,1961年-)；
- 他在1995年利用10天时间完成JavaScript设计；
- 网景公司最初命名为LiveScript，后来在与Sun合作之后将其改名为JavaScript；
#### 2.JavaScript是什么
- JavaScript是世界上最流行的语言之一，是一种**运行在客户端的脚本语言**；
- 脚本语言：不需要编译，运行过程由js解释器(js引擎)逐行来进行解释并执行；
- **现在也可以基于Node.js技术进行服务端编程**。
![运行在客户端的脚本语言.png](https://upload-images.jianshu.io/upload_images/13407176-17993cee712033d3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.JavaScript的作用
- 表单动态校验(密码强度检测)（**JS产生的最初目的**）
- 网页特效
- 服务端开发(Node.js)
- 桌面程序(Electron)
- App(Cordova)
- 控制硬件-物联网(Ruff)
- 游戏开发(cocos2d-js)
#### 4.HTML/CSS/JS之间的关系
- HTML/JSS标记语言--描述类语言
    - HTML决定网页结构和内容(决定看到什么)，相当于人的身体； 
    - CSS决定网页呈现给用户的模样(决定好不好看)，相当于给人穿衣服、化妆；
- JS脚本语言--编程类语言
    - 实现业务逻辑个页面控制(决定功能)，相当于人的各种动作。
#### 5.浏览器执行JS代码的流程
- 浏览器分成两大部分组成：**渲染引擎和JS引擎**；
    - **渲染引擎**：用来解析HTML和CSS，俗称**内核**。比如chrome浏览器的blink，老版本的webkit；
    - **JS引擎**：也称为JS解释器。用来读取网页中的JavaScript代码，对其处理后再运行，比如chrome浏览器的V8。
- **浏览器本身并不会去执行JS代码，而是通过内置javascript引擎(解释器)来执行JS代码。JS引擎执行代码时，逐行解释每一句源码(转换为机器语言)，然后由计算机去执行，所以javascript语言归结为脚本语言，会逐行解释并执行**。
![JS引擎解释代码过程.png](https://upload-images.jianshu.io/upload_images/13407176-0683323143ed1e7e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.JS的组成
![JS的组成.png](https://upload-images.jianshu.io/upload_images/13407176-783a28bb02a03f5f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 6.1 ECMAScript
- ECMAScript是由ECMA国际（原欧洲计算机制造商会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往也被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。

![ECMAScript.png](https://upload-images.jianshu.io/upload_images/13407176-b33e50ea0853ffc4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **ECMAScript:ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准**。
##### 6.2 DOM--文档对象模型
- **文档对象模型(Document Object Model,简称DOM)**，是W3C组织推荐的处理可扩展标记语言的**标准编程接口**。通过DOM提供的接口可以对页面上的各种元素进行操作(大小、位置、颜色等)。
##### 6.3 BOM--浏览器对象模型
- **BOM(Browser Object Model,简称BOM)是浏览器对象模型**，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。
#### 7.JS初体验
- JS有3种书写位置，分别为**行内、内嵌和外部**。
- **行内式的JS**
    - 可以单行或少量JS代码写在HTML标签的事件属性中(以on开头的属性)，比如：onclick；
    - 注意单双引号的使用：在**HTML**中我们推荐使用双引号，在JS中我们推荐使用**单引号**；
    - 可读性差，在HTML中编写大量JS代码时，不方便阅读；
    - 引号易错，引号多层嵌套匹配时，非常容易弄混；
    - 特殊情况下使用！
```
<!-- 1.行内式的js，直接写到元素的内部 -->
<input type="button" value="唐伯虎" onclick="alert('秋香姐')">
```
- **内嵌式的JS**
    - 可以将多行JS代码写到\<script>标签中；
    - 内嵌式的JS是学习时经常用到的方式；
```
<script>
    alert('我是你爸爸，哈哈');
    alert('我是你爸爸，哈哈');
</script>
```
- **外部式的JS**
    - 利用HTML页面代码结构化，把大段JS代码独立到HTML页面之外，既美观也方便文件级别的复用；
    - 引用外部JS文件的script标签中间不可以写代码；
    - 适合于JS代码量比较大的情况；
```
<!-- 3.外部的js  script是双标签-->
<script src="01_my.js"></script>
```
#### 8. JS中的注释
```
<script>
    // 1.单行注释  ctrl + /
    /* 2.多行注释  默认的快捷键: shift + alt + a
    2.多行注释  vscode中修改多行注释的快捷键：ctrl + shift + /
    */
</script>
```
#### 9. JavaScript中的输入和输出语句
- 为了方便信息的输入和输出，JS中提供了一些输入和输出语句，其常用的语句如下：
![JavaScript中的输入和输出语句.png](https://upload-images.jianshu.io/upload_images/13407176-03f774b9b2f5af56.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 10.资料下载
 - [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
