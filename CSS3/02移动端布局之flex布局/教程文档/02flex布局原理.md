### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.布局原理
- flex是flexible Box的缩写，意为**弹性布局**。用来为盒装模型提供最大的灵活性，**任何一个容器都可以指定为flex布局**。
- **当我们为父盒子设为flex布局后，子元素的float、clear和vertical-align属性将会失效**。
- 伸缩布局 = 弹性布局 = 伸缩盒布局 = 弹性盒布局 = flex布局
- 采用flex布局的元素，称为flex容器，简称**容器**。它的所有子元素自动成为容器成员，称为flex项目，简称**项目**。
    - 上一节体验中div就是flex父容器
    - 上一节体验中span就是子容器flex项目
    - 子容器可以横向排列也可以纵向排列
![容器与项目.png](https://upload-images.jianshu.io/upload_images/13407176-9f810ed20d34e32a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **flex布局原理总结**：通过给**父盒子添加flex属性**，来**控制子盒子**的位置和排列方式。
