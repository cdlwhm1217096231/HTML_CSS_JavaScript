### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

- 主要是**遍历、创建、添加、删除元素**操作。
#### 1.遍历元素
- jQuery隐式迭代是对同一类元素做了同样的操作。**如果想要给同一类元素做不同操作，就需要用到遍历**。
- 语法1：
    ```javascript
    $("div").each(function(index,domEle){xxx;})
    ```
    - each()方法遍历匹配的每一个元素。主要用DOM处理，each每一个元素。
    - 里面的回调函数有2个参数：index是每个元素的索引号，**domEle是每个DOM元素对象，不是jQuery对象**。
    - **所以想使用jQuery方法，需要给这个DOM元素转换为jQuery对象$(domEle)**。
- 语法2：
    ```javascript
    $.each(object, function(index, element){xxx;})
    ```
    - $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组、对象。
    - 里面的函数有2个参数：index是每个元素的索引号，element遍历内容。

#### 2.创建元素
- 语法：
    ```javascript
    $("<li></li>");  // 动态的创建了一个li标签
    ```

#### 3.添加元素
- **内部添加**：
    ```javascript
    element.append("内容")
    element.prepend("内容")
    ```
- **append()把内容放入匹配元素内部最后面，类似于原生JS中的appendChild。prepend()把内容放入匹配元素内部最前面**。
- **内部添加元素，生成之后，它们是父子关系**。
- **外部添加**：
    ```javascript
    element.after("内容")   
    element.before("内容")
    ```
- **after()把内容放入目标元素后面，before()把内容放入目标元素前面**。
- **外部添加元素，生成之后，它们是兄弟关系**。

#### 4.删除元素
- 语法：
    ```javascript
    element.remover()  // 删除匹配的元素(本身)
    element.empty()  // 删除匹配的元素集合中所有的子节点
    element.html("")  // 清空匹配的元素内容
    ```

#### 5.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)