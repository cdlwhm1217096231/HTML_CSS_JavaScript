#### 1.精灵图
##### 1.1 为什么需要精灵图？
- 一个网页中往往会应用很多小的背景图像作为修饰，当网页中的图像过多时，服务器就会频繁地接收和发送请求图片，造成服务器请求压力过大，这将大大降低网页的加载速度。
- 因此，**为了有效地减少服务器接收和发送请求的次数，提高网页的加载速度**，出现了**CSS精灵技术**(也称为CSS Sprites、CSS雪碧)。
![浏览器发送请求.png](https://upload-images.jianshu.io/upload_images/13407176-fea19fa93d7695db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![服务器发送应答.png](https://upload-images.jianshu.io/upload_images/13407176-fd204c5ae54e76c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **核心原理：将网页中的一些小背景图像整合到一张大图片中，这样服务器只需要接收一次请求就可以了**。
- **精灵技术出现的目的：为了有效地减少服务器接收和发送请求的次数，提高网页的加载速度**。
![精灵图1.png](https://upload-images.jianshu.io/upload_images/13407176-48a157f57f45b544.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![精灵图2.png](https://upload-images.jianshu.io/upload_images/13407176-4c2aa9c25ed5bb5f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 1.2 精灵图(sprites)的使用
- 使用精灵图的核心：
    - a.**精灵技术主要针对于背景图片使用。就是把多个小背景图片整合到一张大图片中**。
    - b.把这个大的图片也称为sprites 精灵图或雪碧图。
    - c.移动背景图片位置，此时可以使用**background-position**。
    - d.移动的距离就是这个目标图片的x和y轴坐标，**注意网页中的坐标有所不同，它是普通图像坐标系**。
    - e.因为一般情况下都是往上往左移动，所以坐标移动数值都是负值。
    - f.**使用精灵图的时候，需要精确测量每个小背景图片的大小和位置**。
- 使用精灵图核心总结：
    - a.精灵图主要针对于小的背景图片使用。
    - b.主要借助于背景位置来实现**background-position**。
    - c.一般情况下精灵图都是负值。(**千万注意网页中的坐标：x轴右边走是正值，左边走是负值。y轴向下走是正值，向上走是负值**)
- [测量移动距离的工具Fireworks网盘下载，提取码: c392]( https://pan.baidu.com/s/1gSDrOHpc4Ltk4Q6M3Hpd-Q) 
- 使用Fireworks中的切图工具，测量出精灵图的x和y位置。**注意：背景图片默认是贴着盒子的左上角显示的，所以使用测量工具测量出background-position即可**。
#### 2.字体图标
##### 2.1 字体图标的产生
- 字体图标使用场景：主要用于显示网页中通用、常用的一些小图标。
![字体图标应用场景.png](https://upload-images.jianshu.io/upload_images/13407176-cd9a97c67975d77e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 精灵图是有很多的有点，但是缺点也很明显：
    - 图片文件还是比较大的。
    - 图片本身放大和缩小会失真。
    - 一旦图片制作完成，想要更换会非常复杂。
- 此时，有一种技术出现很好的解决了以上问题，就是**字体图标iconfont**。
- **字体图标**为web前端开发提供了一种方便高效的图标使用方式，***展示的是图标，本质上是字体**。
##### 2.2 字体图标的优点
- 轻量级：一个图标字体要比一系列的图像要小。一旦字体加载了，图标会马上渲染出来，减少了服务器的请求。
- 灵活性：本质其实是文字，可以很随意的改变颜色、透明效果、旋转等。
- 兼容性：几乎支持所有的浏览器，放心使用。
- **注意：字体图标不能替代精灵图技术，只是对工作中的图标部分技术的优化和提升**。
- **总结**：
    - a.如果遇到一些结构和样式比较简单的小图标，就用字体图标。
    - b.如果遇到一些结构和复杂一点的小图片，就用精灵图。
##### 2.3 字体图标的使用
- 字体图标是一些网页中常见的小图标，可以直接从网上下载即可。因此，使用可以分为：
    - a.字体图标的下载。
        - [icomoon字库](http://icomoon.io) 成立于2011年，推出了第一个自定义图标字体生成器，它允许用户选择所需要的图标，使它们成一字型。该字库内容种类繁多，非常全面。但是，由于是国外的服务器，打开网页较慢。
        - [阿里iconfont字库](http://www.iconfont.cn/)是阿里妈妈M2UX的一个iconfont字体图标字库，包含了淘宝图标库和阿里妈妈图标库。可以使用AI制作图标上传生成，免费！
    - b.字体图标的引入(引入到HTML页面中)。
    - c.字体图标的追加(以后添加新的小图标)。
##### 2.4 字体图标的引入
- **下载完毕后，注意原先的文件不要删除，后面会用到**。
    - a.**把下载包中的fonts文件夹放入页面根目录下**。不同浏览器所支持的字体格式是不同的，字体图标之所以兼容，就是因为它包含了主流浏览器所支持的字体文件。例如.ttf格式、.woff格式、.eot格式、.svg格式等。
![1.png](https://upload-images.jianshu.io/upload_images/13407176-4c68f9ede63ce8dc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - b.在CSS样式中的全局声明字体：简单理解就是把这些字体文件通过CSS引入到我们的页面中。**注意字体文件的路径**！
    ```
        @font-face {
        font-family: 'icomoon';
        src:  url('fonts/icomoon.eot?i7r93b');
        src:  url('fonts/icomoon.eot?i7r93b#iefix') format('embedded-opentype'),
        url('fonts/icomoon.ttf?i7r93b') format('truetype'),
        url('fonts/icomoon.woff?i7r93b') format('woff'),
        url('fonts/icomoon.svg?i7r93b#icomoon') format('svg');
        font-weight: normal;
        font-style: normal;
        font-display: block;
    }
    ```
    - c.HTML标签内添加小图标。在icomoon目录下的demo.html文件中找到小图标。
    ![2.png](https://upload-images.jianshu.io/upload_images/13407176-bb6c7492ca72c95f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
    - d.字体声明，必须与font-face中的字体一致！
##### 2.5 字体图标的追加
- 如果工作中，原来的字体图标不够用了，我们需要添加新的字体图标到原来的字体文件中。
- 把下载下来的字体图标压缩包中**selection.json重新上传**，然后选中自己想要新的图标，重新下载压缩包，并替换原来的文件即可。
![字体图标的追加.png](https://upload-images.jianshu.io/upload_images/13407176-699e6a6d73ec1201.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.CSS中的三角
- 网页中常见一些三角形，使用CSS直接画出来就可以，不需要做出图片或者字体图标。

![CSS中的三角.png](https://upload-images.jianshu.io/upload_images/13407176-bce8dc37440d9551.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
```
.box2 {
    /* 盒子没有大小 */
    width: 0px;
    height: 0px;
    line-height: 0px;
    font-size: 0px;
    border: 50px solid transparent;
    border-left-color: black;
    margin: 100px auto;
}

<div class="box2"></div>
```
#### 4.用户界面样式
- 所谓的用户界面样式，指的是更改一些用户操作样式，以便提高更好的用户体验。
    - 更改用户的鼠标样式
    - 表单轮廓线
    - 防止表单域拖拽
##### 4.1 鼠标样式cursor
- 语法：
    ```
    li {
        cursor: pointer;
    }
    ```
- 设置或检索在对象上移动的鼠标指针采用何种系统定义的光标形状。
![鼠标样式.png](https://upload-images.jianshu.io/upload_images/13407176-2bc7430e54715f53.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 4.2 轮廓线outline
- 给表单添加outline: 0;或者outline: none;样式之后，就可以去掉默认的蓝色边框。
- 语法：
    ```
    input {
        outline: none;
    }
    ```
##### 4.3 防止拖拽文本域resize
- 实际开发中，文本域右下角是不可以拖拽的。如下图所示：
![文本域.png](https://upload-images.jianshu.io/upload_images/13407176-d7c378be6927690b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 语法：
    ```
    textarea {
        resize: none;
    }
    ```
#### 5.vertical-align属性的应用
- CSS的**vertical-align**属性应用场景：经常用于设置图片或者表单(行内块元素)和文字垂直对齐。
- 官方解释：用于设置一个元素的**垂直对齐方式，但是它只针对行内元素或者行内块元素有效**。

![vertical-align属性的应用场景.png](https://upload-images.jianshu.io/upload_images/13407176-74d35ec6fb5f4b3f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 语法：
    ```
    vertical-align: baseline || top || middle || bottom;
    ```
![vertical-align常用属性值.png](https://upload-images.jianshu.io/upload_images/13407176-8d4a062d7f7831f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![基线、顶线、中线、底线解释.png](https://upload-images.jianshu.io/upload_images/13407176-c71d695df7574925.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 图片、表单都属于行内块元素，默认的vertical-align是基线对齐。此时，可以给图片、表单这些行内块元素的vertical-align属性**设置为middle**就可以让文字和图片垂直居中对齐。
![图片、表单等默认是基线对齐.png](https://upload-images.jianshu.io/upload_images/13407176-2ea9d82b0bc5c23a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 5.1 解决图片底侧默认空白缝隙问题
- bug：图片底侧会有一个空白缝隙，原因是行内块元素会和文字的基线对齐。
- 主要解决方法有两种：
    - a.给图片添加vertical-align: middle || top || bottom等，提倡使用此方法。
    - b.把图片转化为块级元素display: block;
#### 6.溢出的文字省略号显示
##### 6.1 单行文本溢出显示省略号
![单行文本溢出显示省略号.png](https://upload-images.jianshu.io/upload_images/13407176-362d7a9132c88e0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 单行文本溢出显示省略号，必须满足三个条件：
    - a.先强制一行内显示文本。white-space: nowrap; （默认normal是自动换行）
    - b.超出部分隐藏。overflow: hidden;
    - c.文字用省略号替代超出的部分。text-overflow: ellipsis;
##### 6.2 多行文本溢出显示省略号
![多行文本溢出显示省略号.png](https://upload-images.jianshu.io/upload_images/13407176-5ae065888afc02bf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 多行文本溢出显示省略号，有较大的兼容性问题。适合于webkit浏览器或者移动端(移动端大部分是webkit内核)。
    ```
    overflow: hidden;
    text-overflow: ellipsis;
    <!-弹性伸缩盒子模型显示-->
    display: -webkit-box;
    <!--限制在一个块元素显示的文本的行数-->
    -webkit-line-clamp: 2;
    <!--设置或检索盒子对象的子元素的排列方法-->
    -webkit-box-orient: vertical;
    ```
- **更推荐让后端人员做这个效果，因为后端人员可以设置显示多少个字，操作更简单**。
