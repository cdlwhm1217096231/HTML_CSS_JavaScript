### 技术交流QQ群:1027579432，欢迎你的加入！

#### 1.window对象的常见事件
- **窗口加载事件**：
    - window.onload是窗口(页面)加载事件，**当文档内容完全加载完成**会触发该事件(包括图像、JS脚本文件、CSS文件等)，就调用的处理函数。
        ```
        window.onload = function(){};
        或者
        window.addEventListener('load', function(){});
        ```
    - **注意**：
        - 有了window.onload就可以把JS代码写到页面元素的上方，因为onload是等页面内容全局加载完毕，再去执行处理函数。
        - **window.onload传统注册事件方式只能写一次**，如果有多个，会以最后一个window.onload为准。
        - 如果使用addEventListener()来注册事件，则没有onload使用次数的限制。
    - DOMContentLoaded事件触发时，**仅当DOM加载完成，不包括样式表、图片、flash等等**，IE9以上才支持。
        ```
        document.addEventListener('DOMContentLoaded', function(){});
        ```
    - **注意**：
        - 如果页面的图片很多，从用户访问到onload触发可能需要较长的时间，交互效果就不能实现，必然影响用户的体验。此时，使用DOMContentLoaded事件比较合适。
- **调整窗口大小事件**：
    - window.onresize是调整窗口大小加载事件，当触发时就调用的处理函数。
        ```
        window.onresize = function(){};
        window.addEventListener('resize',function(){});
        ```
    - **注意**：
        - 只要窗口大小发生像素变化，就会触发这个事件；
        - 我们经常利用这个事件完成响应式布局。window.innerWidth当前屏幕的宽度。

#### 2.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)