### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.操作元素
- JavaScript的DOM操作可以改变网页内容、样式和结构，可以利用DOM操作元素来改变元素里面的内容、属性等，**注意以下都是属性**。
#### 2.改变元素内容
- 语法格式：
    ```
    element.innerText
    ```
- **说明**：从起始位置到终止位置的内容，但它去除HTML标签，同时空格和换行也会去掉。
    ```
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>123</p>
    
    <script>
        // (1)操作元素之改变元素内容
        // 需求：当点击了按钮后，div标签中的文字会发生变化
        // 1.获取元素
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2.注册事件和事件处理程序
        btn.onclick = function () {
            // div.innerText = '2020-02-17';
            div.innerText = getDate();
        }
        
        function getDate() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var day = date.getDay();
            var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            return '今天是：' + year + '年' + month + '月' + dates + '日 ' + arr[day];
        }
        // 元素也可以不用添加事件---操作DOM
        var p = document.querySelector('p');
        p.innerText = getDate();
    </script>
    ```
- 语法格式[**重点**]：
    ```
    element.innerHTML
    ```
- **说明**：起始位置到终止位置的全部内容，包括HTML标签，同时保留空格和换行。
- **innerText和innerHTML的异同**：
    -  innerText：不识别html标签 非标准；
    -  innerHTML：识别HTML标签  W3C标准，保留空格和换行；
    -  这两个属性是可读写的，可以获取元素里面的内容；
        ```
        <div id="nav"></div>
        <p id="page">
            123
            <span>我是文字</span>
        </p>
        
        <script>
            
            // innerText和innerHTML的区别
            // 1.innerText：不识别html标签 非标准
            var div = document.querySelector('div');
            div.innerText = '<strong>今天是：</strong>2020';
            // 2.innerHTML：识别HTML标签  W3C标准，保留空格和换行
            var div = document.getElementById('nav');
            div.innerHTML = '<strong>今天是：</strong>2020';
            // 3.这两个属性是可读写的，可以获取元素里面的内容
            var p = document.getElementById('page');
            console.log(p.innerText);
            console.log(p.innerHTML);
        </script>
        ```
#### 3.修改元素属性
- **常见元素的属性操作**
    ```
    1.innerText、innerHTML改变元素内容
    2.src、href
    3.id、alt、title
    ```
- 实例演示：
    ```
    <button id="zxy">张学友</button>
    <button id="ldh">刘德华</button> <br>
    <img src="../CSS3/images/ldh.jpg" alt="" title="刘德华">
    <script>
        // (2)操作元素之修改元素属性
        // 1.获取元素
        var ldh = document.getElementById("ldh");
        var zxy = document.getElementById("zxy");
        var img = document.querySelector("img");
        // 2.注册事件和事件处理程序
        zxy.onclick = function() {
            img.src = '../CSS3/images/zxy.jpg';
            img.title = '歌神张学友';
        }
        ldh.onclick = function() {
            img.src = '../CSS3/images/ldh.jpg';
            img.title = '刘德华';
        }
    </script>
    ```
- 操作元素案例之分时显示不同图片，显示不同的问候语
    ```
    <style>
        img {
                    width: 300px;
                }
    </style>
    
    <img src="../CSS3/images/s.gif" alt="">
    <div id="morning">上午好</div>
    
    // 1.获取元素
    <script>
        var img = document.querySelector('img');
        var div = document.getElementById("morning");
        // 2.得到当前的小时
        var date = new Date();
        var h = date.getHours();
        // 3.判断小时来改变图片和文字信息
        if (h < 12) {
            img.src = '../CSS3/images/s.gif';
            div.innerHTML = '上午好，好好写代码';
        } else if(h < 18) {
            img.src = '../CSS3/images/x.gif';
            div.innerHTML = '下午好，好好写代码';
        }else {
            img.src = '../CSS3/images/w.gif';
            div.innerHTML = '晚上好，好好写代码';
        }
    </script>
    ```
- **表单元素的属性操作**
    - 利用DOM可以操作如下**表单的属性**：
        ```
        type、value、checked、selected、disabled
        ```
- 实际案例：
    ```
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            position: relative;
            width: 400px;
            border-bottom: 1px solid #ccc;
            margin: 100px auto;
            }
    
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
            }
    
        .box img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 24px;
            }
    </style>
    </head>
    
    <body>
        <!-- 需求：点击按钮将密码框切换为文本框，并可以查看密码明文 -->
        <div class="box">
        <label for=""><img src="../CSS3/images/close.png" alt="" id="eye"></label>
        <input type="password" id="pwd">
        </div>
    <script>
        // 1.获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 2.注册事件与处理程序
        var flag = 0;
        eye.onclick = function () {
        // 鼠标点击一次后，flag一定要变化
        if (flag == 0) {
            pwd.type = 'text';
            eye.src = '../CSS3/images/open.png';
            flag = 1;
            } else {
                pwd.type = 'password';
                eye.src = '../CSS3/images/close.png';
                flag = 0;
            }
        }
    </script>
    </body>
    </html>
    ```
- **样式属性操作**
    - 可以通过JS修改元素的大小、颜色、位置等样式。
- 语法格式：
    ```
    1.element.style  行内样式操作
    
    2.element.className  类名样式操作
    ```
- **注意点**：
    - JS中的样式采用驼峰命名法，比如fontSize、backgroundColor；
    - JS修改style样式操作，产生的是**行内样式**，CSS权重比较高；
- **案例：淘宝点击关闭二维码**
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>操作元素案例之淘宝点击关闭二维码</title>
        <!-- 思路：利用样式的显示和隐藏完成，display:none隐藏元素; display:block显示元素-->
        <style>
            .box {
                position: relative;
                width: 74px;
                height: 88px;
                border: 1px solid #ccc;
                margin: 100px auto;
                font-size: 12px;
                text-align: center;
                color: #f40;
            }
            .box img {
                width: 60px;
                margin-top: 5px;
            }
            .close-btn {
                position: absolute;
                top: -1px;
                left: -16px;
                width: 14px;
                height: 14px;
                border: 1px solid #ccc;
                line-height: 14px;
                font-family: Arial, Helvetica, sans-serif;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div class="box">淘宝二维码
            <img src="../CSS3//images/tao.png" alt="">
            <i class="close-btn"></i>
        </div>
       
        <script>
            // 1.获取元素
            var btn = document.querySelector('.close-btn');
            var box = document.querySelector('.box');
            // 2.注册事件与事件处理程序
            btn.onclick = function() {
                box.style.display = 'none';
            }
        </script>
    </body>
    </html>
    ```
- **操作元素案例之循环精灵图背景**
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            * {
                padding: 0;
                margin: 0;
            }
    
            li {
                list-style-type: none;
            }
    
            .box {
                width: 250px;
                margin: 100px auto;
            }
    
            .box li {
                float: left;
                width: 24px;
                height: 24px;
                background-color: pink;
                margin: 15px;
                background: url(../CSS3/images/sprite.png) no-repeat;
            }
    
        </style>
    </head>
    <body>
        <!-- 操作元素案例之循环精灵图背景 -->
        <!-- 思路：利用for循环设置一组元素的精灵图背景即修改精灵图片的背景位置background-position -->
        <!-- 规律：让循环中的i索引号*44就是每个图片的y坐标 -->
        <div class="box">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    
        <script>
            // 1.获取元素
            var lis = document.querySelectorAll('li');
            for(var i = 0; i < lis.length; i++) {
                // 核心：让索引号*44就是每个li的y坐标
                var index_y = i * 44;
                lis[i].style.backgroundPosition = '0 -' + index_y + 'px';
            }
        </script>
    </body>
    </html>
    ```
- 两个新的表单事件：**获得焦点onfocus和失去焦点onblur**
    ```
    <input type="text" value="手机">
    
    <script>
        // 1.获取元素
        var text = document.querySelector('input');
        // 2.注册事件，获得焦点事件onfocus
        text.onfocus = function() {
            console.log('得到了焦点');
        }
        // 3.注册事件，失去焦点事件onblur
        text.onblur = function() {
            console.log('失去了焦点');
        }
    </script>
    ```
- **操作元素案例之显示隐藏文本框内容**
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            input {
                color: #999;
            }
        </style>
    </head>
    <body>
        <!-- 需求：当鼠标点击文本框时，里面的默认文字隐藏；当鼠标离开文本框时，里面的文字显示-->
        <!-- 思路：首先表单需要2个新的事件，获得焦点onfocus和失去焦点onblur -->
        <!-- 如果获得焦点，判断表单中的内容是否是默认文字，如果是默认文字，就清空表单内容 -->
        <!-- 如果失去焦点，判断表单内容是否为空，如果为空，则表单内容改成默认文字 -->
        <input type="text" value="手机">
    
        <script>
            // 1.获取元素
            var text = document.querySelector('input');
            // 2.注册事件，获得焦点事件onfocus
            text.onfocus = function() {
                // console.log('得到了焦点');
                if(text.value === '手机') {
                    this.value = '';
                }
                // 获得焦点后，需要把文本框中的文字变黑
                this.style.color = '#333';
            }
            // 3.注册事件，失去焦点事件onblur
            text.onblur = function() {
                // console.log('失去了焦点');
                if(text.value === ''){
                    this.value = '手机';
                }
                // 失去焦点需要把文本框中的文字颜色变为浅色
                this.style.color = '#999';
            }
        </script>
    </body>
    </html>
    ```
- **通过className更改元素样式**
    - **注意**：
        - 如果样式修改较多，可以采取操作类名方式更改元素样式；
        - class因为是关键字，因此使用className来操作元素类名属性；
        - className会直接更改元素的类名，会覆盖原先的类名；
    ```
    使用element.style获得修改元素样式，如果样式比较少或功能简单时适合
    <div>文本</div>
    <script>
    1.使用element.style获得修改元素样式，如果样式比较少或功能简单时适合
        var test = document.querySelector('div');
        test.onclick = function() {
            this.style.backgroundColor = 'purple';
            this.style.color = '#fff';
            this.style.fontSize = '25px';
            this.style.marginTop = '100px';
        }
    </script>
    2.通过修改元素的className更改元素的样式，适合于样式较多或功能复杂的情况
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color:pink;
            margin: 100px auto;
        }
        /* 鼠标点击后，新增的样式 */
        .change {
            background-color:purple;
            color: #fff;
            font-size: 25px;
            margin-top: 100px;
        }
    </style>

    <div class="first">文本</div>
    <script>
        var test = document.querySelector('div');
        test.onclick = function() {
            // 让当前元素的类名，改成了change

            // 2.通过修改元素的className更改元素的样式，适合于样式较多或功能复杂的情况
            // 3.如果想要保留原先的类名，可以用下面的方法即多类名选择器
            this.className = 'first change';
            // this.className = 'change';
        }
    </script>
    ```
- **操作元素案例之密码格式提示错误信息**
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>操作元素案例之密码格式提示错误信息</title>
        <style>
            div {
                width: 600px;
                margin: 100px auto;
            }
    
            .message {
                display: inline-block;
                font-size: 12px;
                color: #999;
                background: url(../CSS3/images/mess.png) no-repeat left center;
                padding-left: 20px;
            }
    
            .wrong {
                color: red;
                background-image: url(../CSS3/images/wrong.png);
            }
    
            .right {
                color: green;
                background-image: url(../CSS3/images/right.png);
            }
        </style>
    </head>
    <body>
        <!-- 分析：首先判断的事件是表单失去焦点onblur -->
        <!-- 如果输入正确则提示正确的信息，颜色为小绿色小图标变化 -->
        <!-- 如果输入错误，则提示错误信息颜色为红色小图标变化 -->
        <!-- 因为里面样式变化较多，采用className来修改样式 -->
        <div class="register">
            <input type="password" class="ipt">
            <p class="message">请输入6~16位密码</p>
        </div>
    
        <script>
            // 1.获得元素
            var ipt = document.querySelector('.ipt');
            var message = document.querySelector('.message');
            // 2.注册事件  失去焦点
            ipt.onblur = function() {
                // 根据表单中值的长度ipt.value.length
                if(this.value.length < 6 || this.value.length > 16) {
                   message.className = 'message wrong';
                   message.innerHTML = '您输入的密码位数不对，要求6~16位之间';
                }else {
                    message.className = 'message right';
                    message.innerHTML = '您输入的正确';
                }
            }
    
        </script>
    </body>
    </html>
    ```
#### 4.操作元素总结
- 操作元素是DOM中的核心内容，主要知识如下：
![操作元素总结.png](https://upload-images.jianshu.io/upload_images/13407176-6916b9d9a700cf70.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
#### 5.操作元素之排他思想[算法]
- 如果用同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：
    - (1).首先将所有元素全部清除样式；
    - (2).然后给当前元素设置样式；
- **注意**：顺序不能颠倒，首先干掉其他人，在设置自己。
#### 6.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)