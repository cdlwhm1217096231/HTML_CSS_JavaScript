### 技术交流QQ群:1027579432，欢迎你的加入！

#### 1.offset概述
- 使用offset系列相关属性可以**动态**得到该元素的位置(偏移)、大小等。
    - 获得元素距离**带有定位父元素**的位置；
    - 获得元素自身的大小(宽度和高度)；
    - 注意：返回的数值都不带单位；
- **offset系列常用属性**
![offset系列常用属性.png](https://upload-images.jianshu.io/upload_images/13407176-5a617193c6b5f3bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.offset与style区别
- **offset**：
    - offset可以得到任意样式表中的样式值；
    - offset系列获得的数值是没有单位的；
    - offsetWidth包含了padding + border + width；
    - offsetWidth等属性是只读属性，只能获取不能赋值；
    - **所以，想要获取元素大小位置，用offset更合适**；
- **style**：
    - style只能得到行内样式表中的样式值；
    - style.width获得的是带有单位的字符串；
    - style.width获得不包含padding和border的值；
    - style.width是可读写属性，可以获取也可以赋值；
    - **所以，想要给元素更改值，则需要用style改变**；

#### 3.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)