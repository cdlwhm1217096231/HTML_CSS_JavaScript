### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.事件概述
- JavaScript使我们有能力创建动态页面，而事件是可以被JavaScript侦测到的行为。
- **简单理解**：触发----响应机制。
- **网页中的每个元素都可以产生某些可以触发JavaScript的事件**。例如：可以在用户点击某个按钮时产生一个事件，然后去执行某些操作。
#### 2.事件三要素
- 事件是由三部分组成的：**事件源、事件类型、事件处理程序**。通常也称为事件三要素。
    ```
    <!-- 事件的三要素 -->
    <button id='btn'>唐伯虎</button>
    <div>123</div>
    <script>
        // 点击一个按钮，弹出对话框
        // 1.事件是由三部分组成：事件源、事件类型、事件处理程序(事件三要素)
        // (1)事件源：事件被触发的对象，谁被触发了？（上例中就是按钮）
        var btn = document.getElementById('btn');
        // (2)事件类型：如何触发，什么事件。例如：鼠标点击(onclick)、鼠标经过、键盘按下等。
        // (3)事件处理程序：通过一个函数赋值的方式完成
        btn.onclick = function() {
            alert('点秋香');
        }
        
        // 事件执行步骤
        // 点击div控制台输出，我被选中了
        // (1).获取事件源
        var div = document.querySelector('div');
        // (2).绑定事件
        // div.onclick
        // (3).添加事件处理程序
        div.onclick = function() {
            alert('我被选中了!');
        }
    </script>
    ```
    - 事件源：事件被触发的对象，谁被触发了？（上例中就是按钮）
    - 事件类型：如何触发，什么触发事件。例如：鼠标点击(onclick)、鼠标经过、键盘按下等。
    - 事件处理程序：通过一个函数赋值的方式完成。
#### 3.执行事件的步骤
- (1).获取事件源
- (2).注册事件(绑定事件)
- (3).添加事件处理程序(采用函数赋值的形式)
- **常见的鼠标事件**
![常见的鼠标事件.png](https://upload-images.jianshu.io/upload_images/13407176-f10856d5439aba70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 4.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)