### 技术交流 QQ 群:1027579432，欢迎你的加入！

#### 1.元素 scroll 系列属性

- 使用 scroll 系列的相关属性可以动态的得到该元素的大小、滚动距离等。
  ![元素scroll系列属性.png](https://upload-images.jianshu.io/upload_images/13407176-089525c119629f20.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
  ![元素scroll系列属性解释.png](https://upload-images.jianshu.io/upload_images/13407176-e9da5a6215bfb945.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 2.页面被卷去的头部

- 如果浏览器的高(或宽)度不足以显示整个页面时，会出现滚动条。当滚动条向下滚动时，页面上面会被隐藏掉的高度，就称为页面被卷去的头部。**滚动条在滚动时触发 onscroll 事件**。

#### 3.仿淘宝固定右侧侧边栏案例
- 功能需求：
  - 原先侧边栏是绝对定位；
  - 当页面滚动到一定位置时，侧边栏改为固定定位；
  - 页面继续滚动，会让返回顶部显示出来；
- 核心思路：
  - 需要用到页面滚动事件scroll，因为是页面滚动，所以事件源是document；
  - 滚动到某个位置，就判断页面被卷去的上部值；
  - **页面被卷去的头部：可以通过window.pageYOffset获得**。如果是被卷去的左侧window.pageXOffset；
  - 注意：元素被卷去的头部是element.scrollTop，如果是页面被卷去的头部则是window.pageYOffset。
![侧边栏由绝对定位过渡到固定定位时，位置的确定原理.png](https://upload-images.jianshu.io/upload_images/13407176-360b8057fd7d387b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **页面被卷去的头部兼容性解决方案**：
- 需要注意的是：页面被卷去的头部，有兼容性问题。因此，被卷去的头部通常有如下几种写法：
  - 1.声明了DTD(!DOCTYPE html)，使用document.documentElement.scrollTop
  - 2.未声明DTD，使用document.body.scrollTop
  - 3.新方法window.pageYOffset和window.pageXOffset，IE9开始支持。
  ```javascript
  function getScroll(){
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }
  使用的时候getScroll().left
  ```

#### 3.三大系列总结
![三大系列对比.png](https://upload-images.jianshu.io/upload_images/13407176-438417dc528b82dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![offset.png](https://upload-images.jianshu.io/upload_images/13407176-e0a23c6cea7f09cb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![client.png](https://upload-images.jianshu.io/upload_images/13407176-ee4acba1f2a9e191.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![scroll.png](https://upload-images.jianshu.io/upload_images/13407176-29ffc48292a950ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 它们主要的用法：
  - offset系列经常用于获得**元素**的位置offsetLeft、offsetTop；
  - client经常用于获取元素大小clientWidth、clientHeight
  - scroll经常用于获取滚动距离scrollTop、scrollLeft 
- 注意：**页面滚动的距离通过window.pageXOffset**获得

#### 4.资料下载

- [笔记及代码，欢迎 star,follow,fork......](https://github.com/cdlwhm1217096231/HTML_CSS_JavaScript/tree/master/JavaScript)
