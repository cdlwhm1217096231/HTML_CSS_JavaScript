### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.jQuery基础选择器
- 原生JS获取元素的方式很多、很杂，而且兼容性情况不一致。因此，jQuery给我们做了封装，使获取元素统一标准。
- 语法格式：
    ```javascript
    $('选择器')   // 里面选择器直接写CSS选择器即可，但是要加引用
    ```
![jQuery基础选择器.png](https://upload-images.jianshu.io/upload_images/13407176-db0139c7af40cf9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.jQuery层级选择器
![jQuery层级选择器.png](https://upload-images.jianshu.io/upload_images/13407176-a388168b5dc4bce7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 3.jQuery隐式迭代
- **jQuery设置样式**：
    ```javascript
    $('div').css('属性','值');
    ```
- **隐式迭代**：遍历内部DOM元素(伪数组形式存储)的过程。简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用。

#### 4.jQuery筛选选择器
![jQuery筛选选择器.png](https://upload-images.jianshu.io/upload_images/13407176-2e5c3923e018f9e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 5.jQuery筛选方法[重点]
![jQuery筛选方法.png](https://upload-images.jianshu.io/upload_images/13407176-527bd20c22bc62d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **重点记忆**：parent()、children()、find()、siblings()、eq()。

#### 6.jQuery中的排他思想
- 想要多选一的效果，排他思想：**当前元素设置样式，其余的兄弟元素清除样式**。

#### 7.jQuery中的样式操作

##### 7.1 操作css方法
- **jQuery可以使用css方法来修改简单元素样式**，也可以操作类，修改多个样式。
- **参数只写属性名，则是返回属性值**。
    ```javascript
    $(this).css("color");
    ```
- 参数是**属性名，属性值，逗号分隔**，是设置一组样式，属性必须加引号，值如果是数字可以不用加单位和引号。
    ```javascript
    $(this).css("color", "red");
    ```
- 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号分隔开，属性名可以不用加引号。如果是复合属性必须采取驼峰名命名。如果属性值不是数字，必须加引号。
    ```javascript
    $(this).css({"color": "red", "font-size": "14px"});
    ```

##### 7.2 设置类样式方法[重点]
- 作用等同于以前的classList，可以操作类样式，**注意操作类里面的参数不要加点**。
- **添加类**
    ```javascript
    $('div').addClass("current");
    ```
- **删除类**
    ```javascript
    $('div').removeClass("current");
    ```
- **切换类**
    ```javascript
    $('div').toggleClass("current");
    ```

##### 7.3 类操作与className区别
- 原生JS中的className会覆盖元素原先里面的类名。
- jQuery里面的类操作只是对指定类进行操作，不影响原先的类名。

#### 8.jQuery动画效果
- jQuery给我们封装了很多的动画效果，最常见的如下所示：
![jQuery动画效果.png](https://upload-images.jianshu.io/upload_images/13407176-27ee9e74490d046f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 8.1 显示、隐藏与切换效果
- 显示语法规范：
    ```javascript
    show([[speed], [easing], [fn]])
    ```
- 显示参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 隐藏语法规范：
    ```javascript
    hide([[speed], [easing], [fn]])
    ```
- 隐藏参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 切换语法规范：
    ```javascript
    toggle([[speed], [easing], [fn]])
    ```
- 切换参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。

##### 8.2 滑动效果
- 下拉滑动效果语法规范：
    ```javascript
    slideDown([[speed], [easing], [fn]])
    ```
- 下拉滑动效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 上拉滑动效果语法规范：
    ```javascript
    slideUp([[speed], [easing], [fn]])
    ```
- 上拉滑动效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 切换滑动效果语法规范：
    ```javascript
    slideToggle([[speed], [easing], [fn]])
    ```
- 切换滑动效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。

##### 8.3 事件切换
- 事件切换语法规范：
    ```javascript
    hover([over,]out)
    ```
- 事件切换参数说明：
    - over：鼠标移动到元素上要触发的函数(相当于mouseenter)
    - out：鼠标移出元素要触发的函数(相当于mouseleave)

##### 8.4 动画队列及其停止排队方法
- **动画或效果队列**：动画或效果一旦触发就会执行，如果多次触发，就会造成多个动画或者效果排队执行。
- **停止排队**：
    ```javascript
    stop()
    ```
- 停止排队说明：
    - stop()方法用于停止动画或效果。
    - 注意：stop()写到动画或效果的**前面，相当于停止结束上一次的动画**。

##### 8.5 jQuery淡入淡出效果
- 淡入效果语法规范：
    ```javascript
    fadeIn([[speed],[easing], [fn]])
    ```
- 淡入效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 淡出效果语法规范：
    ```javascript
    fadeOut([[speed],[easing], [fn]])
    ```
- 淡出效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- 淡入淡出切换效果语法规范：
    ```javascript
    fadeToggle([[speed],[easing], [fn]])
    ```
- 淡入淡出切换效果参数说明：
    - 参数都可以省略，无动画直接显示；
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。
- **渐进方式调整到指定的透明度语法规范**
    ```javascript
    fadeTo([[speed],opacity, [easing], [fn]])
    ```
 - 渐进方式调整到指定的透明度参数说明：
    - **opacity透明度必须写，取值0~1之间**。
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)，**必须写**。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。

##### 8.6 自定义动画animate[重点]
- 语法规范：
    ```javascript
    animate(params, [speed], [easing], [fn])
    ```
- 参数说明：
    - params: **想要修改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果复合属性则需要采用驼峰命名法borderLeft，其余参数都可以省略**。
    - speed：三种预定速度之一的字符串("slow","normal","fast")或表示动画时长的毫秒值(如：1000)。
    - easing:用来指定切换效果，默认是swing，可用参数linear。
    - fn:回调函数，在动画完成时执行的函数，每个元素执行一次。

#### 9.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)

