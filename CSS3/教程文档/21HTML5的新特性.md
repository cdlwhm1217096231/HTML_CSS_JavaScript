- **HTML5**的新增特性主要是针对以前的不足，增加了一些**新的标签、新的表单、新的表单属性**等。
- 这些新的特性都有兼容性问题，基本上是IE9+以上版本的浏览器才支持，如果不考虑兼容性的问题，可以大量使用这些新的特性。
- 声明：
    - a.新特性增加了很多，但是本篇仅仅专注于开发中常用的新特性。
#### 1.HTML5新增的语义化标签
- 以前布局，基本上使用的是div标签。但是div对于搜索引擎来说，它是没有语义的。
    ```
    <div class="header"></div>
    <div class="nav"></div>
    <div class="content"></div>
    <div class="footer"></div>
    ```
- HTML5新增的语义化标签：
    ```
    <header>: 头部标签
    <nav>: 导航标签
    <article>: 内容标签
    <section>: 定义文档某个区域
    <aside>: 侧边栏标签
    <footer>: 尾部标签
    ```
![HTML5新增的语义化标签.png](https://upload-images.jianshu.io/upload_images/13407176-6dc68527fea376a1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **注意**：
    - 这种语义化标签主要是针对**搜索引擎**的；
    - 这些新标签页面中可以使用**多次**；
    - 在IE9中，需要把这些元素转换为**块级元素**；
    - 其实，在移动端更喜欢用这些标签；
    - HTML5中还增加了其他的新标签；
#### 2.HTML5新增的多媒体标签
- 新增的多媒体标签主要包括两个：
    - 音频：\<audio>
    - 视频：\<video>
- **使用它们可以很方便的在页面中嵌入音频和视频，而不再去使用flash和其他浏览器插件**。
##### 2.1 视频\<video>
- 当前\<video>元素仅支持以下三种视频格式：**尽量使用mp4格式**。
![\<video>支持的视频格式文件.png](https://upload-images.jianshu.io/upload_images/13407176-1432477d53ebcbd3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **语法**：
    ```
    <video src="文件地址" controls="controls"></video>
    ```
- 视频\<video>的常见属性：
![视频\<video>的常见属性.png](https://upload-images.jianshu.io/upload_images/13407176-d46c487a6c2e5e64.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 2.2 音频\<audio>
- HTML5在不使用插件的情况下，也可以原生的支持音频格式文件的播放。当然，支持的格式也是有限的。
- 当前\<audio>元素支持三种音频格式：**尽量使用mp3格式**。
![当前\<audio>支持的音频格式文件.png](https://upload-images.jianshu.io/upload_images/13407176-3048f6666170e6ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 语法：
    ```
    <audio src="文件地址" controls="controls"></audio>
    ```
- 音频\<audio>的常见属性：
![音频\<audio>的常见属性.png](https://upload-images.jianshu.io/upload_images/13407176-ed7ff00b0e2d76c1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **谷歌浏览器会把音频和视频自动播放禁止了**！！！
#### 3.多媒体标签总结
- 音频标签和视频标签的使用方式基本一致；
- 浏览器支持情况不同；
- 谷歌浏览器会把音频和视频自动播放禁止了；
- 可以给视频标签添加muted属性来静音播放视频，音频不可以(可以通过JavaScript来解决)；
- **视频标签是重点，经常设置自动播放，循环和设置大小属性；不使用controls控件**。
#### 4.HTML5新增input表单
- 重点记住number、search、tel这三个！
![input中的新增属性值.png](https://upload-images.jianshu.io/upload_images/13407176-c744f05151f016ef.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
<!-- 当我们验证的时候，必须添加form表单域 -->
<form action="">
    <ul>
        <li>邮箱：<input type="email" ></li>
        <li>网址：<input type="url" ></li>
        <li>日期：<input type="date"></li>
        <li>日期：<input type="time"></li>
        <li>数量：<input type="number"></li>
        <li>手机号码：<input type="tel"></li>
        <li>搜索：<input type="search"></li>
        <li>颜色：<input type="color"></li>
        <!-- 当我们点击提交按钮时就可以验证表单了 -->
        <li><input type="submit" value="提交"></li>
    </ul>
</form>
```
#### 5.HTML5新增的表单属性
![HTML5新增的表单属性.png](https://upload-images.jianshu.io/upload_images/13407176-04e0e4c7764dd740.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **可以通过以下设置方式修改placeholder里面的字体颜色**：
    ```
    input::placeholder {
        color: pink;
    }
    ```
#### 6.资料下载
 - [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript)