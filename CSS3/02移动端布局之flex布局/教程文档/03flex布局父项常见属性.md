### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.常见父项属性
- 以下有6个属性是对**父元素设置**的：
    - flex-direction: 设置主轴的方向
    - justify-content: 设置主轴上的子元素排列方式
    - flex-wrap: 设置子元素是否换行
    - align-content: 设置侧轴上的子元素的排列方式(多行)
    - align-items: 设置侧轴上的子元素排列方式(单行)
    - flex-flow：复合属性，相当于同时设置了flex-direction和flex-wrap
#### 2.flex-direction设置主轴的方向[重点]
- **主轴与侧轴**：在flex布局中，是分为主轴和侧轴两个方向。同样的叫法有：行和列、x轴和y轴。
    - 默认的主轴方向是x轴方向，水平向右；
    - 默认的侧轴方向是y轴方向，水平向下；
![默认的主轴和侧轴方向].png](https://upload-images.jianshu.io/upload_images/13407176-60af17420c1a45a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **属性值**：flex-direction属性**决定主轴**的方向(**即项目的排列方向**)。注意：**主轴和侧轴是会变化的，就看flex-direction设置谁为主轴，那剩下的就是侧轴。而我们的子元素是跟着主轴来排列的**。
![flex-direction属性值.png](https://upload-images.jianshu.io/upload_images/13407176-23280223472a14f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 3.justify-content设置主轴上的子元素排列方式[重点]
- justify-content属性定义了项目在主轴上的对齐方式，注意：**使用这个属性之前一定要确定好哪个是主轴**。
![justify-content属性值.png](https://upload-images.jianshu.io/upload_images/13407176-978935ec2e67c9d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 4.flex-wrap设置子元素是否换行
- **默认情况下**，项目都排在一条线(**又称为轴线**)上，flex-wrap属性定义，**flex布局中默认是不换行的**。
![flex-wrap属性值.png](https://upload-images.jianshu.io/upload_images/13407176-a8190981a1aeaa87.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 5.align-items设置侧轴上子元素的排列方式(单行)
- 该属性是**控制子元素在侧轴**(默认是y轴)上的排列方式，**在子元素为单项(单行)时使用**。
![align-items属性值.png](https://upload-images.jianshu.io/upload_images/13407176-25197debe31571f6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 6.align-content设置侧轴上子元素的排列方式(多行)
- 该属性设置子项在侧轴上的排列方式，并且只能用于子项出现**换行**的情况(多行)，**在单行下是没有效果的**。
![align-content属性值.png](https://upload-images.jianshu.io/upload_images/13407176-7fac02cf1a60e2c6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 7.align-content和align-items对比
- align-items适用于单行情况下，只有上对齐、下对齐、居中和拉伸。
- align-content适用于**换行**(多行)的情况下(单行情况下无效)，可以设置上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。
- 总结：**单行找align-items,多行找align-content**。
#### 8.flex-flow
- flex-flow属性是flex-direction和flex-wrap属性的复合属性。
    ```
    flex-flow: row wrap;
    ```
#### 9.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/CSS3/01%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80%E4%B9%8B%E6%B5%81%E5%BC%8F%E5%B8%83%E5%B1%80)