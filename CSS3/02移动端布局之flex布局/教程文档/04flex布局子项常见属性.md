### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.常见子项属性
- flex: 子项目占的份数
- align-self: 控制子项自己在侧轴的排列方式
- order：定义子项的排列顺序(前后顺序)
#### 2.flex属性[重点]
- flex属性定义子项目**分配剩余空间**，用flex来表示占多少**份数**。
    ```
    .item {
        <!-- 默认为0 -->
        flex: <number>;  
    }
    ```
#### 3.align-self控制子项自己在侧轴上的排列方式
- align-self属性允许**单个项目**有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值是auto，表示继承父元素的align-items属性。如果没有父元素，则等同于stretch。
    ```
    span:nth-child(2) {
        <!-- 设置自己在侧轴上的排列方式 -->
        align-self: flex-end;
    }
    ```
#### 4.order属性定义子项目的排列顺序
- 数值越小，排列越靠前，默认为0。注意**和z-index不一样**。
#### 5.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/CSS3/01%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%B8%83%E5%B1%80%E5%9F%BA%E7%A1%80%E4%B9%8B%E6%B5%81%E5%BC%8F%E5%B8%83%E5%B1%80)