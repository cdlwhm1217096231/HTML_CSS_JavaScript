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
