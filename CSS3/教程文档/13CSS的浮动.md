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
#### 7.前面浮动元素有一个标准流的父元素，它们有一个共同的特点都是有高度的。但是，所有的父盒子都必须有高度吗？
- 答：不是。例如下面的网页：
![示例1.png](https://upload-images.jianshu.io/upload_images/13407176-c25af6927961ddfc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![示例2.png](https://upload-images.jianshu.io/upload_images/13407176-b0da7ca9c8b591ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 解决方法：**理想中的状态，让子盒子撑开父盒子，有多少孩子，我的父盒子就有多高**。
#### 8.为什么需要清除浮动？
- **由于父级盒子在很多情况下，不方便设置高度。但是，子盒子浮动又不占有位置，导致父级盒子高度为0时，最终会影响下面区域的标准流盒子**。由于浮动元素不再占用原文档流的位置，所以它会对后面的元素排版产生影响。
![原因分析.png](https://upload-images.jianshu.io/upload_images/13407176-d2ce7b16604864c0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 9.清除浮动的本质
- **清除浮动的本质就是清除浮动元素造成的影响**。
- **如果父盒子本身有高度，则不需要清除浮动**。
- **清除完浮动后，父级盒子就会根据浮动的子盒子自动检测出高度。父级盒子有了高度，就不会影响下面区域中的标准流了**。
- 语法格式：
    ```
    选择器 {
        clear: 属性值;
    }
    ```
![常见的属性值.png](https://upload-images.jianshu.io/upload_images/13407176-55fa5e36bae1994d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 在实际开发中，常用到的是**clear: both;**
- **清除浮动的策略是：闭合浮动**。
#### 10.清除浮动方法
- 常用方法如下：
    - **额外标签法也称为隔墙法，是W3C推荐的做法**；
    - **父级盒子添加overflow属性**；
    - **父级盒子添加after伪元素**；
    - **父级盒子添加双伪元素**；
##### 10.1 清除浮动之额外标签法
- **额外标签法**也称为**隔墙法**，是W3C推荐的做法。
- **额外标签法**会在浮动元素末尾添加一个空的标签。例如\<div style="clear:both;">\</div>，或者其他标签(如\<br/>等)。
- 优点：通俗易懂，书写方便；
- 缺点：添加许多无意义的标签，结构化较差；
- **注意：要求这个新的空标签必须是块级元素**！
##### 10.2 清除浮动之父元素添加overflow
- 可以给父级元素添加**overflow**属性，将其属性值设置为**hidden、auto、scroll**。
- **子不教父之过，注意是给父级元素添加代码**！
- 优点：代码简洁；
- 缺点：无法显示溢出的部分；
##### 10.3 清除浮动之:after伪元素法
- **:after**方式是额外标签法的升级版本，**也是给父级元素添加**。
- 语法格式：
    ```
    .clearfix:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    
    .clearfix {  /* IE6、7专有 */
        *zoom: 1;
    }
    ```
- 优点：没有增加标签，结构更简单；
- 缺点：照顾低版本浏览器；
- 代表网站：百度、淘宝、网易等常用的清除浮动方法；
##### 10.4 清除浮动之双伪元素法
- **给父元素添加**！
- 语法格式：
    ```
    .clearfix:before, 
    .clearfix:after {
        content: "";
        display:table;
    }
    
    .clearfix:after {
        clear: both;
    }
    .clearfix { /* IE6、7专有 */
        *zoom: 1;
    }
    ```
- 优点：代码更简洁；
- 缺点：照顾低版本浏览器；
- 代表网站：小米、腾讯等常用的清除浮动方法；
#### 11.清除浮动总结
- **为什么需要清除浮动**？
    - 父级盒子没有设置高度；
    - 子盒子浮动了；
    - 影响下面的布局，此时就需要清除浮动了；
- **清除浮动的常用方法**
![清除浮动的常用方法总结.png](https://upload-images.jianshu.io/upload_images/13407176-f2b691aee22a128b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)