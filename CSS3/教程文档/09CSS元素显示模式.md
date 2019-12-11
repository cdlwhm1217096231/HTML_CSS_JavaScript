#### 1.什么是元素显示模式
- 作用：网页的标签很多，在不同的地方会用到不同类型的标签，了解它们的特点可以**更好的布局我们的网页**。
- 元素显示模式就是**元素(标签)以什么方式进行显示**，例如\<div>自己占一行，一行中可以放多个\<span>。
- HTML元素一般可以分成**块元素**和**行内元素**两种类型。
#### 2.块元素
- 常见的块元素有\<h1>~\<h6>、\<div>、\<ul>、\<ol>、\<li>等，**其中\<div>标签是最典型的块元素**。
- 块级元素的特点：
    - 比较霸道，自己独占一行
    - 高度、宽度、外边距及内边距都可以控制
    - 宽度默认是容器(父级宽度)的100%
    - 是一个容器及盒子，里面可以放行内或者块级元素
- **注意**：
    - **文字类的元素内不能使用块级元素**
    - \<p>标签主要用于存放文字，因此\<p>里面不能放块级元素，特别是不能放\<div>
    - 同理，\<h1>~\<h6>等都是文字类块级标签，里面也不能放其他块级元素
#### 3.行内元素
- 常见的行内元素有\<a>、\<strong>、\<b>、\<em>、\<i>、\<del>、\<s>、\<ins>、\<u>、\<span>等，**其中\<span>标签是最典型的行内元素**。有的地方也将行内元素称为**内联元素**。
- 行内元素的特点：
    - 相邻行内元素在一行上，一行可以显示多个
    - 高度、宽度直接设置是无效的
    - 默认宽度就是它本身内容的宽度
    - **行内元素只能容纳文本或其他行内元素**
- **注意**：
    - 链接里面不能再放链接
    - 特殊情况：链接\<a>里面可以放块级元素，但是给\<a>转换一下块级模式最安全
#### 4.行内块元素
- 在行内元素中有几个特殊的标签：\<img/>、\<input/>、\<td>，它们**同时具有块元素和航内元素的特点**。有些资料称它们是**行内块元素**。
- 行内块元素的特点：
    - 和相邻行内元素(行内块)在一行上，但是它们之间会有空隙。一行可以显示多个(行内元素特点)。
    - 默认宽度就是它本身内容的宽度(行内元素特点)
    - 高度、行高、外边距及内边距都可以控制(块级元素特点)
#### 5.元素显示模式总结
![元素显示模式总结](https://img-blog.csdnimg.cn/20191211153020412.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NkbHdobTEyMTcwOTYyMzE=,size_16,color_FFFFFF,t_70)
#### 6.显示模式的转换
- 特殊情况下，我们需要元素模式的转换，简单理解：**一个模式的元素需要另一种模式的特性**。例如，想要增加链接\<a>的触发范围。
- **转换为块元素：display:block;**
- 转换为行内元素：display:inline;
- **转换为行内块元素：display:inline-block;**
#### 7.一个小工具的使用snipaste
- Snipaste是一个简单但是强大的截图工具，也可以让你将截图贴回到屏幕上。
- 常用快捷方式：
    - F1可以截图，同时测量大小，设置箭头，书写文字等
    - F3在桌面置顶显示
    - 点击图片，alt可以取色(按下shift可以切换取色模式)
    - 按下esc取消图片显示
#### 8.案例：简单版小米侧边栏
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>简单版小米侧边栏案例</title>
    <style>
        a {
            display: block;
            width: 230px;
            height: 40px;
            background-color: #55585a;
            text-decoration: none;
            font-size: 14px;
            color: #fff;
            text-indent: 2em;
        /* 一个小技巧：单行文字垂直居中的代码 */
            line-height: 40px;
        }

        a:hover {
            background-color: #ff6700;
        }
    </style>
</head>

<body>
    <a href="#">手机 电话卡</a>
    <a href="#">电视 盒子</a>
    <a href="#">笔记本 平板</a>
    <a href="#">出行 穿戴</a>
    <a href="#">智能 路由器</a>
    <a href="#">健康 儿童</a>
    <a href="#">耳机 音响</a>
</body>

</html>
```
#### 9.一个小技巧：单行文字垂直居中的代码
- CSS没有给我们提供文字垂直居中的代码，这里我们可以使用一个小技巧来实现。
- 解决方法：**让文字的行高等于盒子的高度**就可以让文字在当前盒子内垂直居中。
- 单行文字垂直居中的原理：
![单行文字垂直居中的原理解释1.png](https://upload-images.jianshu.io/upload_images/13407176-d6ddf8125a2f364b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 简单理解：行高的上空隙和下空隙把文字挤到中间，但是如果行高小于盒子高度，文字会偏上；如果行高大于盒子高度，则文字会偏下。
![单行文字垂直居中的原理解释2.png](https://upload-images.jianshu.io/upload_images/13407176-cd81eac891e9237e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 10.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript)
