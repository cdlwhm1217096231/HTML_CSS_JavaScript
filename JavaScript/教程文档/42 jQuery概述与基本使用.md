### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.JavaScript库
- JavaScript库：即library，是一个**封装**好的特定的**集合**(方法和函数)。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show、获取元素等。
- 简单理解：就是一个js文件，里面对我们原生js代码进行了封装，存放到里面。这样，我们可以快速高效的使用这些封装好的功能了。
- 比如jQuery就是为了快速方便的操作DOM，里面基本都是函数(方法)。
- **常见的JavaScript库**：jQuery、Prototype、YUI、Dojo、Ext JS、移动端的zepto等。这些库都是对原生js进行封装，**内部都是用JavaScript实现的**，下面主要学习jQuery。

#### 2.jQuery的概念
- jQuery是一个快速、简洁的JavaScript库，其设计宗旨是"write less, do more"，即倡导写更少的代码，做更多的事情。
- jQuery中j即JavaScript，Query是查询。**jQuery意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能**。
- **jQuery封装了JavaScript常用的功能代码**，优化了DOM操作、事件处理、动画设计和Ajax交互。
- **学习jQuery的本质：学习调用这些函数(方法)**。

#### 3.jQuery的优点
- 轻量级：核心文件只有几十kb，不会影响页面的加载速度。
- 跨浏览器兼容：基本兼容了现在主流的浏览器。
- 链式编程、隐式迭代。
- 对事件、样式、动画支持，大大简化了DOM操作。
- 支持插件扩展开发，有丰富的第三方插件。例如：树形菜单、日期控件、轮播图等。
- 免费、开源。

#### 4.jQuery的下载
- 官方网站：https://jquery.com/
- jQuery不同版本 https://code.jquery.com/
    - 1x：兼容IE6、7、8等低版本浏览器，官网不再更新。
    - 2x: 不兼容IE6、7、8等低版本浏览器，官网不再更新。
    - 3x: 不兼容IE6、7、8等低版本浏览器，是官方主要更新维护的版本。
- 打开网址https://code.jquery.com/jquery-3.5.1.js，复制网页中的所有代码，创建一个新的文件jquery.min.js，并将所有的代码复制到该文件中。

#### 5.jQuery的入口函数
- 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装。**相当于原生js中的DOMContentLoaded。不同于原生js中的load事件是等页面文档、外部的js文件、css文件、图片加载完成后才执行内部代码**。
    ```javascript
    $(function(){  // 推荐这种方式!!!!
        ...  // 此处是页面DOM加载完成的入口
    });

    // 或者
    $(document).ready(function()){
        ... // 此处是页面DOM加载完成的入口
    }
    ```
#### 6.jQuery的使用步骤
- (1).引入jQuery文件
- (2).书写jQuery的入口函数，将要执行的内部代码放入入口函数中。

#### 7.jQuery的顶级对象\$
- \$是jQuery的别称，在代码中可以使用jQuery代替\$，但是一般为了方便，通常都直接使用\$。
- \$是jQuery的顶级对象，相当于原生JavaScript中的window对象。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

#### 8.jQuery对象和DOM对象
- DOM对象：使用原生js获取的对象。
jQuery对象：用jQuery方式获取过来的对象。
- jQuery对象的本质：通过$对DOM对象包装后产生的对象(伪数组形式存储)。
- **jQuery对象只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法**。
- **DOM对象和jQuery对象之间是可以相互转换的**。因为原生JS比jQuery更大，原生的一些属性和方法jQuery没有给我们封装。要想使用这些属性和方法，则需要把jQuery对象转换为DOM对象才能使用。
    - DOM对象转换为jQuery对象： \$(DOM对象)
    ```javascript
    // 1.DOM对象转换为jQuery对象
    // (1).直接获取视频，得到的就是jQuery对象
    $('video');
    // (2).已经使用原生js获取过来的DOM对象
    var myvideo = document.querySelector('video');
    // $(myvideo).play(); jQuery对象没有play()方法
    // myvideo.play();
    ```
    - jQuery对象转换为DOM对象(两种方法) 
    ```javascript
    $('div')[index]   // index是索引号

    // 或者
    $('div').get(index)  // index是索引号
    ```

#### 9.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
