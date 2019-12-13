- 通过CSS背景属性，可以给页面元素添加背景样式。背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。
#### 1.背景颜色
- background-color属性定义了元素的背景颜色，语法格式如下：
    ```
    background-color: 颜色值;
    ```
- 一般情况下，元素背景颜色的默认值是**transparent**(透明)，也可以通过手动指定背景颜色设置为透明色。
#### 2.背景图片
- background-image属性描述了元素的背景图像。实际开发中常用于logo或者一些装饰性的小图片或者是超大的背景图片，优点是非常便于控制位置。(精灵图也是一种运用场景)
- 语法格式：
    ```
    background-image: none或者url(具体的url地址);
    ```
![背景图片.png](https://upload-images.jianshu.io/upload_images/13407176-24e55442e9df0b0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.背景平铺
- 如果需要在HTML页面上对背景图片进行平铺，可以使用background-repeat属性实现。
- 语法格式：
    ```
    background-repeat: repeat或者no-repeat或者repeat-x或者repeat-y;
    ```
![背景平铺.png](https://upload-images.jianshu.io/upload_images/13407176-3a056ed058daad11.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 4.背景图片位置[重点]
- 利用**background-position**属性可以改变图片在背景中的位置。
- 语法格式：
    ```
    background-position: x y;
    ```
- 参数含义：x坐标和y坐标。可以使用**方位名词**或者**精确单位**
![背景图片位置.png](https://upload-images.jianshu.io/upload_images/13407176-ae7d261fb11c44e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 4.1 参数是方位名词
- 如果指定的两个值都是方位名词，则两个值的先后顺序无关，例如left top和top left效果一样的。
- 如果只指定一个方位名词，另一个省略，则第二个值默认是居中对齐的。
##### 4.2 参数是精确单位
- 如果参数值是精确单位，那么第一个肯定是x坐标，第二个肯定是y坐标；
- 如果只指定一个数值，那该数值一定是x坐标，另一个默认垂直居中；
##### 4.3 参数是混合单位
- 如果指定的两个值是精确单位和方位名词混合使用，则第一个值是x坐标，第二个值是y坐标。
#### 5.背景图像固定(背景附着)
- background-attachment属性设置背景图像是否固定或者随着页面的其余部分滚动。
- background-attachment后期**可以制作视差滚动**的效果。
- 语法格式：
    ```
    background-attachment: scroll(默认值) 或者 fixed;
    ```
![背景图像固定.png](https://upload-images.jianshu.io/upload_images/13407176-b549fb95ba1f5799.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.背景属性复合写法
- 为了简化背景属性的代码，可以将这些属性合并简写在同一个属性**background**中，从而节约代码量。
- 当使用简写属性时，**没有特定的书写顺序**，一般习惯约定顺序为：
    ```
    background: 背景颜色 背景图片地址 背景平铺 背景图像滚动 背景图片位置;
    ```
- 实际开发中，更提倡的写法：
    ```
    background: transparent url(image.jpg) repeat-y fixed top;
    ```
#### 7.背景颜色半透明
- CSS3为我们提供了背景颜色半透明的效果。
- 语法格式：
    ```
    background: rgba(0, 0, 0, 0.3);
    ```
- 上面的语法格式中，最后一个参数a是alpha透明度的简写，它的取值范围是0到1之间。
- 习惯上，我们把0.3中的0省略掉，写成background:rgba(0, 0, 0, .3);
- 注意：**背景半透明是值盒子背景半透明，盒子李明明的内容不会受到影响**。
- CSS3新增属性，是IE9+版本浏览器才支持的！
- 但是现在实际开发中，我们不太关注兼容性写法了，可以放心使用。
#### 8.CSS的背景总结
![CSS背景总结.png](https://upload-images.jianshu.io/upload_images/13407176-3f5810ee4eb49c85.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 背景图片：实际开发中常见与logo或者一些装饰性的小图片或者超大的背景图，优点是非常便于控制位置。(精灵图也是一种运用场景)。
#### 9.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript)
