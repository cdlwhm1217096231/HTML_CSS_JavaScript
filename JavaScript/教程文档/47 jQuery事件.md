### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.jQuery事件注册

##### 单个事件注册
- 语法：
    ```javascript
    element.事件(function(){})
    // 例如 
    $("div").click(function(){ // 事件处理程序 })
    ```
- 其他事件与原生JS基本一致。例如mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll等。

#### 2.jQuery事件处理

##### 2.1 事件处理on()绑定事件
- on()方法在匹配元素上绑定一个或多个事件的事件处理函数。
- 语法：
    ```javascript
    element.on(events, [selector,] fn)
    ```
    - events:一个或多个用空格分开的事件类型，如click、keydown等
    - selector:元素的子元素选择器。
    - fn:回调函数即绑定在元素身上的监听函数。
- **on()方法的优势1：可以绑定多个事件处理程序**。
    ```javascript
    $("div").on({
                mouseenter: function(){},
                click: function() {},
                mouseleave: function() {}
    });
    ```
- **如果事件处理程序相同**，可合并在一起书写：
    ```javascript
    $("div").on("mouseover mouseout", function(){
        $(this).toggleClass("current");
    });
    ```
- **on()方法的优势2：可以实现事件委托操作**。事件委托即把原来加给子元素身上的事件绑定到父元素身上，就是把事件委托给父元素。在此之前，有bind()、live()、delegate()等方法来处理事件绑定或事件委派，最新版本的请使用on代替它们。
    ```javascript
    $("ul").on("click", "li", function(){
        alert(11);
    })  // click是绑定在ul身上，但是事件的触发者是ul的子元素li
    ```
- **on()方法的优势3：动态创建的元素，click没有办法绑定事件。on()可以给动态生成的元素绑定事件[重点]**。
    ```javascript
    <ol></ol>

    var li = $("<li>我是后来创建的小li</li>");
    $("ol").append(li);

    $("ol").on("click", "li", function(){
        alert(123);
    })
    ```

##### 2.2 事件处理off()解绑事件
- off()方法可以移除通过on()方法添加的事件处理程序。
    ```javascript
    <div></div>
    <ul>
        <li>我们都是好孩子</li>
        <li>我们都是好孩子</li>
        <li>我们都是好孩子</li>
        <li>我们都是好孩子</li>
        <li>我们都是好孩子</li>
    </ul>

    $("div").off();  // 解除了div身上的所有事件处理程序
    $("div").off("click"); // 解除了div身上的点击事件

    $("ul").on("click", "li", function(){
        alert(11);
    })

    $("ul").off("click", "li");  // 解除事件委托
    ```
- 如果有的事件只想触发一次，可以使用one()来绑定事件。
    ```javascript
    // one()只能触发事件一次
    $("p").one("click", function(){
        alert(11);
    })
    ```

##### 2.3 自动触发事件trigger()
- 有些事件希望自动触发，比如轮播图自动播放功能与点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发。
- 第一种简写形式：
    ```javascript
    element.click()  
    ```
- 第二种自动触发模式：
    ```javascript
    element.trigger("事件")
    ```
- 第三种自动触发模式，不会触发元素的默认行为。
    ```javascript
    element.triggerHandler("事件")
    $("input").on("focus", function(){
        $(this).val("你好吗");
    });
    // 不会触发元素的默认行为
    $("input").triggerHandler("focus");
    // 会触发元素的默认行为
    $("input").focus();
    // 会触发元素的默认行为
    $("input").trigger("focus");
    ```

#### 3.jQuery事件对象event
- 事件被触发，就会有事件对象的产生。
    ```javascript
    element.on(events, [seletor,] function(event){})
    ```
    - 阻止默认行为:event.preventDefault()或return false；
    - 阻止冒泡:event.stopPropagation()

#### 4.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)