### 技术交流QQ群:1027579432，欢迎你的加入！
#### 1.为什么学习节点操作
- 获取元素通常使用两种方式：
    - **(1).利用DOM提供的方法获取元素**
        ```
        document.getElementById()
        document.getElementsByTagName()
        document.querySeletor()等
        缺点：逻辑性不强、繁琐
        ```
    - **(2).利用节点层次关系获取元素**
        - 利用父子兄节点关系获取元素；
        - 逻辑性强，但兼容性稍差；
- 上面两种方法都能获取元素节点，后面都会使用，但是节点操作更简单。
#### 2.节点概述
- 网页中的所有内容都是节点(标签、属性、文本、注释等)，在DOM中，节点使用node来表示。
- HTML DOM树中的所有节点均可以通过JS进行访问，所有HTML元素(节点)均可以被修改，也可以创建或删除。
![DOM树.png](https://upload-images.jianshu.io/upload_images/13407176-a0e761fccbcd7f77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 一般地，**节点至少拥有nodeType(节点类型)、nodeName(节点名称)和nodeValue(节点值)三个基本属性**。
    - 元素节点nodeType为1；
    - 属性节点nodeType为2；
    - 文本节点nodeType为3(文本节点包括文字、空格、换行等)；
- **实际开发中，节点操作主要操作的是元素节点**。
#### 3.节点层次
- 利用DOM树可以把节点划分为不同的层次关系，常见的是**父子兄层级关系**。
##### 3.1 父级节点
- parentNode属性可返回某个节点的父节点，注意父节点特指**最近的一个父节点**；
- 如果指定的节点没有父节点则返回null;
    ```
    node.parentNode
    ```
##### 3.2 子节点
- parentNode.childNodes返回包含指定节点的子节点的集合，该集合为即时更新的集合；
- parentNode.children是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回(**重点掌握**)；
- 虽然children是一个非标准，但是得到了各个浏览器的支持，因此可以放心使用；
- firstChild返回第一个子节点，找不到就返回null。同样，也是包含所有的节点。
- lastChild返回最后一个子节点，找不到就返回null。同样，也是包含所有的节点。
- firstElementChild返回第一个子元素节点，找不到则返回null。**这个方法有兼容性问题，IE9以上才支持**；
- lastElementChild返回最后一个子元素节点，找不到则返回null。**这个方法有兼容性问题，IE9以上才支持**；
- 实际开发中，firstChild和lastChild包含其他节点，操作不方便。而firstElementChild和lastElementChild又有兼容性问题，那么如何获取第一个子元素节点或最后一个子元素节点呢？
    - **解决方法**：
        - (1).如果想要第一个子元素节点，可以使用parentNode.children[0]； 
        - (2).如果想要最后一个子元素节点，可以使用parentNode.children[parentNode.children.length - 1]；
    ```
    1. parentNode.childNodes(标准)
    2. parentNode.children(非标准)
    3. parentNode.firstChild
    4. parentNode.lastChild
    5. parentNode.firstElementChild
    6. parentNode.lastElementChild
    ```
- 注意：**返回值中包含了所有的子节点，包括元素节点、文本节点等**；
- **如果只想要获得当中的元素节点，则需要专门处理。因此一般不提倡使用childNodes**；
    ```
    var ul = document.querySelector('ul');
    for(var i = 0; i < ul.childNodes.length; i++){
        if(ul.childNodes[i].nodeType == 1) {
            // ul.childNodes[i]是元素节点
            console.log(ul.childNodes[i]);
        }
    }
    ```
##### 3.3 兄弟节点
- nextSibling返回当前元素的下一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。
- previousSibling返回当前元素的上一个兄弟节点，找不到则返回null。同样，也是包含所有的节点。
- nextElementSibling返回当前元素下一个兄弟元素节点，找不到则返回null。**这个方法有兼容性问题，IE9以上才支持**；
- previousElementSibling返回当前元素上一个兄弟元素节点，找不到则返回null。**这个方法有兼容性问题，IE9以上才支持**；
    ```
    1. node.nextSibling
    2. node.previousSibling
    3. node.nextElementSibling
    4. node.previousElementSibling
    ```
- **如何解决兼容性问题**？[自己封装一个兼容性的函数]
    ```
    function getNextElementSibling(element) {
        var el = element;
        while(el = el.nextSibling) {
            if (el.nodeType === 1) {
                return el;
            }
        }
        return null;
    }
    ```
#### 4.创建节点
- 语法格式：
    ```
    document.createElement('tagName')
    ```
-  document.createElement()方法创建由tagName指定的HTML元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以也称为**动态创建元素节点**。
#### 5.添加节点
- node.appendChild()方法**将一个节点添加到指定父节点的子节点列表末尾**。类似于CSS中的after伪元素。
- node.insertBefore()方法**将一个节点添加到父节点的指定子节点前面**。类似于CSS中的before伪元素。
- 语法格式：
    ```
    1. node.appendChild(child)
    2. node.insertBefore(child, 指定元素)
    ```
#### 6.删除节点
- node.removeChild(child)方法**从DOM父节点中删除一个子节点，返回删除的节点**。
#### 7.复制(克隆)节点
- node.cloneNode()方法**返回调用该方法的节点的一个副本，也称为克隆节点或拷贝节点**。
- 注意：**如果括号参数为空或false，则是浅拷贝。即只克隆复制节点本身，不克隆里面的子节点**。
#### 8.资料下载
- [笔记及代码，欢迎star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)