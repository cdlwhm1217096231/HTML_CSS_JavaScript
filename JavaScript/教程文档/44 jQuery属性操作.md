### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.设置或获取元素固有属性值prop()
- 所谓的固有属性就是指元素本身自带的属性。如\<a\>元素里面的href，\<input\>元素里面的type。
- **获取属性语法**：
    ```javascript
    prop("属性名")
    ```
- **设置属性语法**：
    ```javascript
    prop("属性名", "属性值")
    ```

#### 2.设置或获取元素自定义属性值attr()
- 用户自己给元素增加的属性，称为自定义属性。比如给div添加index="1"属性。attr()方法也可以获取H5自定义属性。
- **获取属性语法**：
    ```javascript
    attr("自定义的属性名")  // 类似原生getAttribute()
    ```
- **设置属性语法**：
    ```javascript
    attr("自定义的属性名", "属性值")  // 类似原生setAttribute()
    ```

#### 3.数据缓存data()
- data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都会被移除。同时，data()方法还支持H5自定义属性data-index，得到的是数字型。
- **附加数据语法**：
```javascript
data("name", "value")  // 向被选元素附加数据
```
- **获取数据语法**：
    ```javascript
    data("name")   // 向被选元素获取数据
    ```

#### 4.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)