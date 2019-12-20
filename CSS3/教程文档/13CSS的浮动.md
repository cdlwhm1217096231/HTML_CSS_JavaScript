#### 1.为什么需要浮动(float)？
- **反问1：如何让多个块级盒子div水平排列成一行**？
![目标效果.png](https://upload-images.jianshu.io/upload_images/13407176-2863381e0b063bfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 标准流比较难以实现，虽然将块级元素转换为行内块元素可以实现一行显示，但是它们之间会产生大的空白间隙，间隙的宽度很难人为控制。
- **反问2：如何实现下面两个盒子的左右对齐**？
![目标效果.png](https://upload-images.jianshu.io/upload_images/13407176-3aa7f07e12e1cf68.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 总结：**有很多的布局效果，标准流没有办法完成，此时就可以利用浮动完成布局。因为浮动可以改变元素标签默认的排列方式**。
- 浮动最典型的应用：**可以让多个块级元素在一行内排列显示**。
- 网页布局第一准则：**多个块级元素纵向排列找标签流，多个块级元素横向排列找浮动**。
#### 2.什么是浮动？
- **float**属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。
- 语法规范：
    ```
    选择器 {
        float: 属性值;
    }
    ```
![浮动属性值.png](https://upload-images.jianshu.io/upload_images/13407176-19aaaa9a9c3d491e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.浮动特性[重难点]
- 加了浮动后的元素，会具有很多新的特性，需要我们掌握。
    - **3.1浮动元素会脱离标准流(脱标)**;
    - **3.2浮动的元素会在一行内显示并且元素顶部对齐**;
    - **3.3浮动的元素会具有行内块元素的特性**;
##### 3.1浮动元素会脱离标准流(脱标)
- 设置了浮动float的元素最重要的特性：
    - a.脱离标准普通流的控制(浮)移动到指定位置(动)，简称**脱标**;
    - b.**浮动的盒子不再保留原先的位置**;
- 浮动特性的形象化解释：
![形象化解释1.png](https://upload-images.jianshu.io/upload_images/13407176-2cfdb237a7ee743d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![形象化解释2.png](https://upload-images.jianshu.io/upload_images/13407176-e4cbb3cee7728313.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![具体解释.png](https://upload-images.jianshu.io/upload_images/13407176-5c3411aa9ab53ed1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
##### 3.2浮动的元素会在一行内显示并且元素顶部对齐
- 如果多个盒子都设置了浮动，则它们会按照属性值**一行内显示并且顶端对齐显示**。
![浮动的元素会在一行内显示并且元素顶部对齐.png](https://upload-images.jianshu.io/upload_images/13407176-b9e4261159eda78d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **注意：浮动的元素是互相贴在一起的（不会有间隙的），如果父级宽度装不下这些浮动的盒子，多出来的盒子会另起一行对齐**。
##### 3.3浮动的元素会具有行内块元素的特性
- 浮动元素具有行内块元素特性；
- 任何元素都可以浮动，不管原先是什么模式的元素，**添加完浮动之后具有行内块元素相似的特性**。
    - 如果块级盒子没有设置宽度，默认宽度和父级宽度一样宽，但是加了浮动后，它的大小根据具体内容来决定；
    - 浮动的盒子中间是没有空隙的，是紧挨在一起的；
    - 行内元素同理；
#### 4.浮动元素经常搭配标准流的父级元素搭配使用
- 为了约束浮动元素位置，网页布局一般采取的策略是：**先用标准流的父元素排列上下位置，之后内部子元素采取浮动排列左右位置。符合网页布局第一准则**。
![浮动元素经常搭配标准流的父级元素搭配使用.png](https://upload-images.jianshu.io/upload_images/13407176-861e036b620c1489.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **网页布局的第二准则：先设置盒子的大小，之后再设置盒子的位置**。
#### 5.常见网页布局
- 常见的网页布局如下：
![网页布局1和2.png](https://upload-images.jianshu.io/upload_images/13407176-118a6d38fafcd87b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![网页布局3.png](https://upload-images.jianshu.io/upload_images/13407176-a6a1399bd015081d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.浮点的两个注意点
##### 6.1 浮动和标准流的父盒子搭配使用
- **先用标准流的父元素排列上下位置，之后内部子元素采用浮动排列左右位置**。
##### 6.2 一个元素浮动了，理论上其余的兄弟元素也要浮动
- 一个盒子里面包含多个子盒子，如果其中一个盒子浮动了，那么其他兄弟盒子也应该浮动，从而防止引起问题。
- **浮动的盒子只会影响浮动盒子后面的标准流，不会影响前面的标准流**。