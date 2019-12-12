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
