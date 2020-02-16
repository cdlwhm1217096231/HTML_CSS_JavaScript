### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.DOM简介
- 文档对象模型(Document Object Model,简称**DOM**)，是W3C组织推荐的处理可扩展标记语言(HTML或XML)的标准**编程接口**。
- W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式。
#### 2.DOM树
![DOM树.png](https://upload-images.jianshu.io/upload_images/13407176-7319d28a26b68b1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 文档：一个页面就是一个文档，DOM中使用document表示。
- 元素：页面中的所有标签都是元素，DOM中使用element表示。
- **节点**：网页中的所有内容都是节点(标签、属性、文本、注释等)，DOM中使用node表示。
- **DOM把以上内容都看成是对象**。
#### 3.获取元素
- **如何获取页面中的元素**？
    - DOM在实际开发中主要用来操作元素，我们如何来获取页面中的元素呢？**获取页面中的元素可以使用下面的几种方法**：    
        - 根据ID获取；
        - 根据标签名获取；
        - 通过HTML5新增的方法获取；
        - 特殊元素获取；
    - **根据ID获取**
        - 使用document.getElementById('id属性值')方法获取带有ID的元素对象。
            ```
            <div id="time">2020-02-16</div>
            <script>
            // 注意：因为文档页面从上往下加载，所以先得有标签，所以script标签写在div标签下面！
            // 方法1：根据ID获取元素
            var timer = document.getElementById('time');  // 接收的是一个字符串
            console.log(timer);
            console.log(typeof timer);  // 返回的是一个元素对象
            console.dir(timer); // 打印返回的元素对象，更好的查看里面的属性和方法
            </script>
            ```
    - **根据标签名获取**
        - 使用document.getElementsByTagName('标签名')方法可以返回带有指定标签名的**对象的集合**。
        - 使用element.getElementsByTagName('标签名')方法可以带有指定标签名的**某些元素对象**。
        - **由于得到的是一个对象的集合，所以想要操作里面的元素就需要遍历**。
        - **得到的元素对象是动态的**。
            ```
            <ul>
                <li>知否知否应是绿肥红瘦</li>
                <li>知否知否应是绿肥红瘦</li>
                <li>知否知否应是绿肥红瘦</li>
                <li>知否知否应是绿肥红瘦</li>
                <li>知否知否应是绿肥红瘦</li>
            </ul>
            
            <ul id='nav'>
                <li>库里</li>
                <li>库里</li>
                <li>库里</li>
                <li>库里</li>
                <li>库里</li>
            </ul>
            
            <script>
                // 方法2：根据标签名获取
                var lis = document.getElementsByTagName('li');  // 接收的是一个字符串
                console.log(lis);  // 返回的是元素对象的集合，以伪数组的形式存储的
                console.log(lis[0]);
                // 依次打印里面的元素对象，使用遍历的方法
                for (var i = 0; i < lis.length; i++) {
                console.log(lis[i]);
                }
                // element.getElementsByTagName()：可以得到这个元素里面的某些标签
                var nav = document.getElementById('nav');  // 获取id='nav'的ul标签
                var res = nav.getElementsByTagName('li');
                console.log(res);
            </script>
            ```
    - **根据HTML5新增的方法获取元素**
        - 通过document.getElementsByClassName('类名')的方法返回元素对象集合；
        - 通过document.querySelector('选择器')的方法指定选择器返回第一个元素对象；
        - 通过document.querySelectorAll('选择器')的方法指定选择器返回所有元素对象；
            ```
            <div class="box">盒子1</div>
            <div class="box">盒子2</div>
            <div id="navs">
            <ul>
                <li>首页</li>
                <li>产品</li>
            </ul>
            </div>
            
            <script>
                // 方法3：根据H5新增的方法获取元素：getElementByClassName('类名')
                var boxs = document.getElementsByClassName('box');
                console.log(boxs);
                // 根据H5新增的方法获取元素：querySelector('选择器')：返回指定选择器的第一个元素对象，切记! 里面的选择器需要加符号，例如.box #navs等
                var firstBox = document.querySelector('.box');
                console.log(firstBox);
                var navs = document.querySelector('#navs');
                console.log(navs);
                var li = document.querySelector('li');
                console.log(li);
                // 根据H5新增的方法获取元素：querySelectorAll('选择器')：返回指定选择器的所有元素对象
                var box = document.querySelectorAll('.box');
                console.log(box);
                var lis = document.querySelectorAll('li');
                console.log(lis);
            </script>
            ```
    - **根据特殊元素(body、html)获取元素**
        - 获取body元素：通过document.body方法得到body元素对象；
        - 获取html元素：通过document.documentElement方法得到html元素对象；
            ```
            // 方法4：根据特殊元素获取元素
            // 获取body元素
            var body = document.body;
            console.log(body);
            console.dir(body);
            // 获取html元素
            var html = document.documentElement;
            console.log(html);
            console.dir(html);
            ```
#### 4.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)