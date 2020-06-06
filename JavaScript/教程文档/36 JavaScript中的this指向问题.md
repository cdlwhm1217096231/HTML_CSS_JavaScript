### 技术交流QQ群:1027579432，欢迎你的加入！
### 欢迎关注我的微信公众号：CurryCoder的程序人生

#### 1.函数内this指向问题
- 函数内部的this指向是当我们调用函数的时候确定的。调用方式的不同决定了this的指向不同。**一般情况下**，this指向我们的调用者。
![函数内this的指向.png](https://upload-images.jianshu.io/upload_images/13407176-767780463fdca463.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.改变函数内部的this指向
- JavaScript为我们专门提供了一些方法帮我们更优雅的处理函数内部的this指向问题，常用的有bind()、call()、apply()三种方法。

##### 2.1 call()方法
- call()方法**调用**一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。
- 语法规范：
    ```javascript
    fun.call(thisArg, arg1, arg2, ...)
    ```

##### 2.2 apply()方法
- apply()方法**调用**一个函数。简单理解为调用函数的方式，但是它可以改变函数的this指向。
- 语法规范：
    - thisArg:在fun函数运行时指定的this值；
    - argsArray:传递的值，**必须包含在数组中**；
    - 返回值就是函数的返回值，因为它就是调用函数；
    ```javascript
    fun.apply(thisArg, [argsArray])
    ```

##### 2.3 bind()方法[重点]
- **bind()方法不会调用函数**。但是能改变函数内部this指向。
- **bind()方法的应用场景**：如果有的函数我们不需要立即调用，但是又想改变这个函数内部的this指向,此时用bind()方法。
- 语法规范：
    - thisArg:在fun函数运行时指定的this值；
    - arg1、arg2:传递的其他参数；
    - 返回由指定的this值和初始化参数改造的**原函数拷贝**；
    ```javascript
    fun.bind(thisArg, arg1, arg2, ...)
    ```

#### 4.call()、apply()、bind()方法总结
- **相同点**：
    - 都可以改变函数内部this的指向；
- **不同点**：
    - call()和apply()方法会调用函数，并且改变函数内部this指向；
    - call()和apply()方法传递的参数不同，call()方法传递的参数是arg1,arg2,...形式，apply()方法传递的参数必须是数组形式[arg]；
    - bind()方法不会调用函数，可以改变函数内部的this指向；
- **主要应用场景**：
    - call()方法经常用于继承；
    - apply()方法常与数组有关系，例如借助数学对象实例实现求数组最大值与最小值；
    - bind()方法不调用函数，但是还想改变this指向。比如改变定时器内部的this指向；
    
#### 5.资料下载
- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)