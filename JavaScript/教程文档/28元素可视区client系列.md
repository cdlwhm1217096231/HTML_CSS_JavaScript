### 技术交流 QQ 群:1027579432，欢迎你的加入！

#### 1.client 概述

- 使用 client 系列的相关属性来获取元素可视区的相关信息。通过 client 系列的相关属性可以动态的得到该元素的边框大小、元素大小等。
  ![client系列的相关属性.png](https://upload-images.jianshu.io/upload_images/13407176-69e81805b9630470.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  ![client系列不包含边框border.png](https://upload-images.jianshu.io/upload_images/13407176-8c3f87b9bc13dd19.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.淘宝 flexible.js 源码分析

- **立即执行函数**:不需要调用，立即能够自己执行的函数。创建一个独立的作用域，避免了命名冲突问题。
  ```
  (function(){})()
  或者
  (function(){}());
  ```
- 立即执行函数也可以传递参数，如下例所示：

  ```
  (function(a, b) {
      console.log(a + b);
  })(1, 2); // 第二个小括号可以看做是调用函数

  (function sum(a, b) {
      console.log(a + b);
  }(2, 3));
  ```

- 立即执行函数最大的作用是**独立创建了一个作用域，里面所有的变量都是局部变量，不会有命名冲突的情况**。

  ```
  (function(a, b) {
          console.log(a + b);
          var num = 10;
      })(1, 2); // 第二个小括号可以看做是调用函数

      (function sum(a, b) {
          console.log(a + b);
          var num = 10; // 局部变量
      }(2, 3));
  ```

- **下面三种情况都会刷新页面，从而触发 load 事件**：
  - a 标签的超链接
  - F5 或者刷新按钮(强制刷新)
  - 前进后退按钮
- 但是，火狐浏览器中有个特点(**往返缓存**)，这个缓存中不仅保存着页面数据，还保存了 DOM 和 JavaScript 的状态，实际上是将整个页面都保存在内存中。所以，**此时后退按钮不能刷新页面**。
- 解决方法：此时可以使用 pageshow 事件来触发，这个事件在页面显示时触发，无论页面是否来自缓存。在重新加载页面时，pageshow 会在 load 事件触发后触发。根据事件对象中的 persisted 来判断是否是缓存中的页面触发的 pageshow 事件，**这个事件注意是给 window 添加的**。

#### 3.资料下载

- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
